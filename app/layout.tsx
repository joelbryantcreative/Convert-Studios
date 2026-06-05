import type { Metadata } from "next";
import { Archivo, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { VideoProvider } from "@/components/VideoProvider";

const archivoExpanded = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo-expanded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = "https://convert.studios";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Convert Studios | Content that converts attention into customers",
    template: "%s · Convert Studios",
  },
  description:
    "A filmmaker-led content marketing studio helping businesses turn the way they show up online into a measurable engine for growth, through story-led content and strategic paid distribution.",
  keywords: [
    "content marketing",
    "video production",
    "lead generation",
    "paid advertising",
    "Australia",
    "documentary filmmaking",
  ],
  authors: [{ name: "Convert Studios" }],
  openGraph: {
    title: "Convert Studios | Content that converts attention into customers",
    description:
      "Story-led content, beautifully made and strategically distributed. We help businesses turn attention into measurable growth.",
    url: siteUrl,
    siteName: "Convert Studios",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Studios",
    description:
      "Content that converts attention into customers. A filmmaker-led content marketing studio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${archivoExpanded.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <body className="bg-ink font-sans text-bone antialiased">
        <VideoProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </VideoProvider>
      </body>
    </html>
  );
}
