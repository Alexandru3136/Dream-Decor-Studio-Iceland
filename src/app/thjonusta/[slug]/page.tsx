import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteContent } from "@/content/site";
import { services, serviceSlugs, heroImageFor, type ServiceSlug } from "@/content/services";
import { ServicePageView } from "@/components/ServicePageView";

const siteUrl = "https://dream-decor-studio-iceland.vercel.app";

function isServiceSlug(slug: string): slug is ServiceSlug {
  return slug in services;
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};

  const service = services[slug];
  const pageUrl = `${siteUrl}/thjonusta/${slug}`;

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: [...service.meta.keywords],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: pageUrl,
      siteName: "Dream Decor Studio Iceland",
      type: "website",
      locale: "is_IS",
      images: [{ url: heroImageFor(slug), width: 1200, height: 630 }]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const service = services[slug];
  const pageUrl = `${siteUrl}/thjonusta/${slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.en.eyebrow,
    name: service.is.title,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      name: siteContent.brand.name,
      telephone: siteContent.contact.phone,
      email: siteContent.contact.email
    },
    areaServed: { "@type": "Country", name: "Iceland" },
    description: service.en.lead
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: service.en.current, item: pageUrl }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicePageView slug={slug} />
    </>
  );
}
