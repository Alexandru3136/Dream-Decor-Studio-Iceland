import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-decor-studio-iceland.vercel.app"),
  title: "Dream Decor Studio Iceland | Event Decor for Every Celebration",
  description:
    "Event decoration in Iceland for weddings, proposals, gender reveals, corporate events, holidays, and private celebrations.",
  openGraph: {
    title: "Dream Decor Studio Iceland",
    description:
      "Tailored event decor for weddings, proposals, baby celebrations, corporate events, holidays, and private occasions across Iceland.",
    type: "website",
    locale: "en_IS",
    images: [{ url: "/images/hero-event-table.jpg" }]
  },
  icons: {
    icon: "/images/dream-decor-mark.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
