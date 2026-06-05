"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Landscape brand-film card. Click swaps the thumbnail for the Vimeo player in
// place (no modal, no controls UI). Tapping the playing video toggles
// pause/play via the Vimeo API, and the card returns to its thumbnail when the
// film ends.
export function FilmCard({
  poster,
  id,
  client,
}: {
  poster: string;
  id: string;
  client: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function post(method: string, value?: string) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify(value !== undefined ? { method, value } : { method }),
      "*",
    );
  }

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
        ["play", "pause", "ended"].forEach((ev) => post("addEventListener", ev));
      } else if (data.event === "play") {
        setPaused(false);
      } else if (data.event === "pause") {
        setPaused(true);
      } else if (data.event === "ended") {
        setPlaying(false);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [playing]);

  function togglePlay() {
    post(paused ? "play" : "pause");
    setPaused((p) => !p);
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      {playing ? (
        <>
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${id}?autoplay=1&controls=0&title=0&byline=0&portrait=0&dnt=1`}
            title={`${client} brand film`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0"
          />
          {/* Transparent layer that toggles pause/play (controls stay hidden) */}
          <button
            onClick={togglePlay}
            aria-label={paused ? "Play video" : "Pause video"}
            className="absolute inset-0 h-full w-full"
          >
            <span
              className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 transition ${
                paused ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setPaused(false);
            setPlaying(true);
          }}
          aria-label={`Play the ${client} brand film`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt={`${client} brand film still`}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 transition group-hover:bg-ink/70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
