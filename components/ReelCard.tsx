"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Short-form ad card. Click swaps the poster for the Vimeo player in place
// (no modal, no controls) so the vertical clip plays right where it sits.
// When the clip ends, the card returns to its thumbnail.
export function ReelCard({
  poster,
  duration,
  id,
}: {
  poster: string;
  duration: string;
  id: string;
}) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!playing) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    function onMessage(e: MessageEvent) {
      if (e.source !== iframe?.contentWindow) return;
      let data: { event?: string } | null = null;
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (!data) return;
      if (data.event === "ready") {
        // Subscribe to the player's "ended" event.
        iframe?.contentWindow?.postMessage(
          JSON.stringify({ method: "addEventListener", value: "ended" }),
          "*",
        );
      } else if (data.event === "ended") {
        setPlaying(false);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [playing]);

  return (
    <div className="group relative aspect-[9/16] w-[70%] shrink-0 snap-center overflow-hidden rounded-2xl bg-ink ring-1 ring-bone/10 md:w-auto">
      {playing ? (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${id}?autoplay=1&controls=0&title=0&byline=0&portrait=0&dnt=1`}
          title="Convert Studios short-form ad"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play short-form video"
          className="absolute inset-0 h-full w-full text-left"
        >
          <Image
            src={poster}
            alt="Short-form video still"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 70vw, 18vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 transition group-hover:bg-ink/70">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[11px] text-white/80">
            <span>0:00 / {duration}</span>
            <div className="flex items-center gap-2 opacity-80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 5V4L8 9H4z" /></svg>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
