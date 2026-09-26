import type { Metadata } from "next";
import Script from "next/script";
import { siteContent } from "@/content/site";
import "./globals.css";

const siteUrl = "https://dream-decor-studio-iceland.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dream Decor Studio Iceland | Event Decor for Every Celebration",
  description:
    "Event decoration in Iceland for weddings, proposals, gender reveals, corporate events, holidays, and private celebrations. Tailored styling across Iceland.",
  keywords: [
    "event decor Iceland",
    "wedding decoration Iceland",
    "event styling Reykjavik",
    "proposal decor Iceland",
    "party decoration Iceland",
    "corporate event decor Iceland"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Dream Decor Studio Iceland",
    description:
      "Tailored event decor for weddings, proposals, baby celebrations, corporate events, holidays, and private occasions across Iceland.",
    url: siteUrl,
    siteName: "Dream Decor Studio Iceland",
    type: "website",
    locale: "en_IS",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dream Decor Studio Iceland" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Decor Studio Iceland",
    description:
      "Tailored event decor for weddings, proposals, corporate events, and private celebrations across Iceland.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.brand.name,
  image: `${siteUrl}/opengraph-image`,
  url: siteUrl,
  email: siteContent.contact.email,
  telephone: siteContent.contact.phone,
  description:
    "Event decoration studio in Iceland offering tailored styling for weddings, proposals, corporate events, holidays, and private celebrations.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IS",
    addressRegion: "Iceland"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteContent.contact.geo.latitude,
    longitude: siteContent.contact.geo.longitude
  },
  areaServed: {
    "@type": "Country",
    name: "Iceland"
  },
  sameAs: [siteContent.contact.instagram, siteContent.contact.facebook],
  priceRange: "$$"
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}

        {/* Analytics load only when the matching env var is set (see .env.example). */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        {fbPixelId ? (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${fbPixelId}');
fbq('track', 'PageView');`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
