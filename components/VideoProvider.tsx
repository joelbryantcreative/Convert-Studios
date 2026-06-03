"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ---------------------------------------------------------------------------
// Shared Vimeo lightbox. Any card can call open(videoId) to play a clip in a
// centered 16:9 modal. Keeps a single iframe mounted at a time.
// ---------------------------------------------------------------------------

type VideoContextValue = { open: (videoId: string) => void; close: () => void };

const VideoContext = createContext<VideoContextValue | null>(null);

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used within <VideoProvider>");
  return ctx;
}

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [videoId, setVideoId] = useState<string | null>(null);

  const open = useCallback((id: string) => setVideoId(id), []);
  const close = useCallback(() => setVideoId(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (videoId) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoId, close]);

  return (
    <VideoContext.Provider value={{ open, close }}>
      {children}
      {videoId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          <button
            aria-label="Close video"
            onClick={close}
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-5xl animate-fade-up">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                title="Convert Studios video"
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
}

export function VideoTrigger({
  videoId,
  className,
  label = "Play video",
  children,
}: {
  videoId: string;
  className?: string;
  label?: string;
  children: React.ReactNode;
}) {
  const { open } = useVideo();
  return (
    <button onClick={() => open(videoId)} aria-label={label} className={className}>
      {children}
    </button>
  );
}
