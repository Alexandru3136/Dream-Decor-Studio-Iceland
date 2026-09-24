"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { siteContent } from "@/content/site";
import { serviceLabels, services, heroImageFor, type ServiceSlug } from "@/content/services";
import type { Language } from "@/content/translations";

export function ServicePageView({ slug }: { slug: ServiceSlug }) {
  const [language, setLanguage] = useState<Language>("is");
  const service = services[slug];
  const t = service[language];
  const labels = serviceLabels[language];
  const heroImage = heroImageFor(slug);
  const images = siteContent.portfolio[service.portfolioIndex].images;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("dds-lang");
    } catch {
      stored = null;
    }
    const preferred = fromUrl ?? stored;
    if (preferred === "is" || preferred === "en") {
      setLanguage(preferred);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "is" ? "is" : "en";
    try {
      window.localStorage.setItem("dds-lang", language);
    } catch {
      // ignore
    }
  }, [language]);

  return (
    <main className="service-page">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Dream Decor Studio Iceland home">
          <Image src={siteContent.brand.logo} alt="" aria-hidden="true" width={58} height={34} priority />
          <span>{siteContent.brand.shortName}</span>
        </Link>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">{labels.home}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{t.current}</span>
        </nav>
        <div className="language-switch" aria-label="Language">
          {(["en", "is"] as const).map((item) => (
            <button
              className={language === item ? "active" : ""}
              key={item}
              onClick={() => setLanguage(item)}
              type="button"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      <section className="service-hero-split">
        <div className="service-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <div className="gold-divider" aria-hidden="true" />
          <p className="lead">{t.lead}</p>
          <a className="button primary" href="/#inquiry">
            {labels.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="service-trust">
            <Sparkles size={15} aria-hidden="true" />
            {t.trust}
          </p>
        </div>
        <div className="service-hero-visual">
          <Image src={heroImage} alt={t.eyebrow} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <h2>{labels.galleryTitle}</h2>
          <div className="gold-divider" aria-hidden="true" />
        </div>
        <div className="service-gallery">
          {images.map((src, index) => (
            <div className="service-gallery-item" key={src}>
              <Image
                src={src}
                alt={`${t.eyebrow} ${index + 1}`}
                fill
                sizes="(max-width: 720px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section service-intro alt">
        <div>
          <h2>{t.introTitle}</h2>
          <p>{t.introText}</p>
        </div>
        <div className="service-includes">
          <h3>{t.includesTitle}</h3>
          <ul>
            {t.includes.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section service-steps-section">
        <div className="section-intro">
          <h2>{labels.stepsTitle}</h2>
          <div className="gold-divider" aria-hidden="true" />
        </div>
        <div className="service-steps">
          {labels.steps.map((step, index) => (
            <article className="service-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section service-faq alt">
        <div className="service-faq-intro">
          <h2>{t.faqTitle}</h2>
          <div className="gold-divider" aria-hidden="true" />
          <p>{t.finalText}</p>
          <a className="button secondary" href="/#inquiry">
            {labels.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {t.faq.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        className="service-cta has-image"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 17, 38, 0.82), rgba(7, 17, 38, 0.9)), url(${heroImage})`
        }}
      >
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <a className="button primary" href="/#inquiry">
          {labels.cta}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
