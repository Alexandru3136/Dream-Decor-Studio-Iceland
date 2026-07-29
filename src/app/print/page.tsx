import type { Metadata } from "next";
import Link from "next/link";
import "./print.css";

export const metadata: Metadata = {
  title: "Dream Decor Studio Iceland | Print Collection",
  robots: { index: false, follow: false }
};

const collections = [
  {
    title: "Business card",
    pdf: "/downloads/dream-decor-business-card.pdf",
    items: [
      { image: "/images/print-previews/business-card-front.png", label: "Front" },
      { image: "/images/print-previews/business-card-back.png", label: "Back" }
    ]
  },
  {
    title: "General flyer A6",
    pdf: "/downloads/dream-decor-flyer-general-a6.pdf",
    items: [
      { image: "/images/print-previews/flyer-general-en.png", label: "English" },
      { image: "/images/print-previews/flyer-general-is.png", label: "Íslenska" }
    ]
  },
  {
    title: "Direct flyer DL",
    pdf: "/downloads/dream-decor-flyer-direct-dl.pdf",
    items: [
      { image: "/images/print-previews/flyer-direct-en.png", label: "English" },
      { image: "/images/print-previews/flyer-direct-is.png", label: "Íslenska" }
    ]
  },
  {
    title: "Partner flyer A6",
    pdf: "/downloads/dream-decor-flyer-partners-a6.pdf",
    items: [
      { image: "/images/print-previews/flyer-partners-en.png", label: "English" },
      { image: "/images/print-previews/flyer-partners-is.png", label: "Íslenska" }
    ]
  },
  {
    title: "Consultation voucher",
    pdf: "/downloads/dream-decor-consultation-voucher.pdf",
    items: [
      { image: "/images/print-previews/voucher-front.png", label: "Front" },
      { image: "/images/print-previews/voucher-back.png", label: "Back" }
    ]
  }
];

export default function PrintCollection() {
  return (
    <main className="print-page">
      <header>
        <p>Dream Decor Studio Iceland</p>
        <h1>Print collection</h1>
        <div>
          <span>Client previews and print-ready PDF files.</span>
          <Link href="/">Back to website</Link>
        </div>
      </header>

      {collections.map((collection) => (
        <section key={collection.title}>
          <div className="print-section-heading">
            <h2>{collection.title}</h2>
            <a href={collection.pdf} target="_blank" rel="noreferrer">
              Open PDF
            </a>
          </div>
          <div className="print-grid">
            {collection.items.map((item) => (
              <figure key={item.image}>
                <img src={item.image} alt={`${collection.title} ${item.label}`} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
