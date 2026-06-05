"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ---------------------------------------------------------------------------
// Shared Vimeo lightbox. Any card can call open(videoId, orientation) to play a
// clip in a centered modal — landscape (16:9) or portrait (9:16) for reels.
// ---------------------------------------------------------------------------

type Orientation = "landscape" | "portrait";
type Playing = { id: string; orientation: Orientation };

type VideoContextValue = {
  open: (videoId: string, orientation?: Orientation) => void;
  close: () => void;
};

const VideoContext = createContext<VideoContextValue | null>(null);

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used within <VideoProvider>");
  return ctx;
}

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [playing, setPlaying] = useState<Playing | null>(null);

  const open = useCallback(
    (id: string, orientation: Orientation = "landscape") =>
      setPlaying({ id, orientation }),
    [],
  );
  const close = useCallback(() => setPlaying(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (playing) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playing, close]);

  const isPortrait = playing?.orientation === "portrait";

  return (
    <VideoContext.Provider value={{ open, close }}>
      {children}
      {playing && (
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
          <div
            className={`relative z-10 animate-fade-up ${
              isPortrait
                ? "aspect-[9/16] h-[82vh] max-h-[82vh] max-w-[92vw]"
                : "aspect-video w-full max-w-5xl"
            }`}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
              <iframe
                src={`https://player.vimeo.com/video/${playing.id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
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
  orientation = "landscape",
  className,
  label = "Play video",
  children,
}: {
  videoId: string;
  orientation?: Orientation;
  className?: string;
  label?: string;
  children: React.ReactNode;
}) {
  const { open } = useVideo();
  return (
    <button
      onClick={() => open(videoId, orientation)}
      aria-label={label}
      className={className}
    >
      {children}
    </button>
  );
}
