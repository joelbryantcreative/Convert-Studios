import Image from "next/image";

// Adaptive brand mark.
//   tone="light"  → white mark, for use on dark backgrounds
//   tone="dark"   → ink mark, for use on light backgrounds
export function Logo({
  tone = "light",
  className = "h-10 w-auto md:h-11",
  priority = false,
}: {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "dark" ? "/logo-mark-ink.png" : "/logo-mark-white.png"}
      alt="Convert Studios"
      width={48}
      height={48}
      priority={priority}
      className={className}
    />
  );
}
