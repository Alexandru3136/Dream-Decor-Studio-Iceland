import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Decor Studio Iceland | Event Decoration in Iceland",
  description:
    "Elegant event decoration, styling, and seasonal installations for weddings, private celebrations, and events in Iceland."
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
