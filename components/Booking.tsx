"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ---------------------------------------------------------------------------
// Booking modal context
// Wraps the app so any "Book a Game Plan Call" button can open the same modal.
// The modal embeds a Calendly iframe placeholder. Swap CALENDLY_URL for the
// real scheduling link when it's ready.
// ---------------------------------------------------------------------------

const CALENDLY_URL = "https://calendly.com/convert-studios/game-plan-call";

type BookingContextValue = {
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a Game Plan Call"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          <button
            aria-label="Close booking dialog"
            onClick={close}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          <div className="relative z-10 flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-ink shadow-2xl ring-1 ring-bone/10 animate-fade-up">
            <div className="flex items-center justify-between border-b border-bone/10 px-6 py-4">
              <div>
                <p className="eyebrow">Convert Studios</p>
                <h2 className="font-display text-lg text-bone">
                  Book a Game Plan Call
                </h2>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone transition hover:bg-bone hover:text-ink"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 2l12 12M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            {/* Calendly iframe placeholder: swap src for the live link */}
            <iframe
              src={CALENDLY_URL}
              title="Schedule a Game Plan Call with Convert Studios"
              className="h-full w-full flex-1 border-0 bg-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function BookCallButton({
  className,
  children = "Book a Game Plan Call",
  variant = "primary",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const { open } = useBooking();
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button onClick={open} className={`${base} ${className ?? ""}`}>
      {children}
    </button>
  );
}
