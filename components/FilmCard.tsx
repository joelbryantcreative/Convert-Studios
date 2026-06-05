"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Landscape brand-film card. Shows a custom thumbnail with a play button; click
// plays the Vimeo embed in place (with controls). Returns to the thumbnail when
// the film ends.
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
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-bone/10">
        {playing ? (
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
            title={`${client} brand film`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
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
            <div className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/0" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/55 transition group-hover:bg-ink/70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 text-center text-xs uppercase tracking-widest2 text-bone/60">
        {client}
      </figcaption>
    </figure>
  );
}
