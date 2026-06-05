import Link from "next/link";

// Primary CTA. Routes to the contact page (email / phone / form) rather than a
// self-service booking calendar.
export function BookCallButton({
  className,
  children = "Book a Game Plan Call",
  variant = "primary",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <Link href="/contact" className={`${base} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
