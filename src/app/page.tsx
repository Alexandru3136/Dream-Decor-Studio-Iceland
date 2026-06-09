"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Sparkles } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { siteContent } from "@/content/site";
import { Language, translations } from "@/content/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <main>
      <Hero language={language} setLanguage={setLanguage} />
      <Services language={language} />
      <About language={language} />
      <WhyChooseUs language={language} />
      <PortfolioPreview language={language} />
      <Process language={language} />
      <Inquiry language={language} />
    </main>
  );
}

function Hero({
  language,
  setLanguage
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const t = translations[language];
  const nav = [
    { label: t.navServices, href: "#services" },
    { label: t.navPortfolio, href: "#portfolio" },
    { label: t.navProcess, href: "#process" },
    { label: t.navInquiry, href: "#inquiry" }
  ];

  return (
    <section className="hero-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Dream Decor Studio Iceland home">
          <img src={siteContent.brand.logo} alt="" aria-hidden="true" />
          <span>{siteContent.brand.shortName}</span>
        </a>
        <div className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
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
        <a className="icon-link" href="#inquiry" aria-label={t.bookConsultation}>
          <Mail size={18} aria-hidden="true" />
        </a>
      </nav>

      <div id="top" className="hero-grid">
        <div className="hero-copy">
          <p className="brand-title">{siteContent.brand.name}</p>
          <div className="gold-divider" aria-hidden="true" />
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#inquiry">
              {t.bookConsultation}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#portfolio">
              {t.viewPortfolio}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Elegant decorated event table">
          <img
            className="hero-photo"
            src={siteContent.hero.image}
            alt="Elegant decorated event table with candles and flowers"
          />
        </div>
      </div>
    </section>
  );
}

function Services({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="services" className="section">
      <SectionIntro eyebrow={t.servicesEyebrow} title={t.servicesTitle} />
      <div className="service-grid">
        {t.services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function About({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="about" className="section about-section">
      <div>
        <SectionIntro eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.aboutText} />
        <a className="text-link" href="#inquiry">
          {t.aboutCta}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="about-media">
        <img src={siteContent.about.image} alt="Elegant event table with floral decor" />
      </div>
    </section>
  );
}

function WhyChooseUs({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="section">
      <SectionIntro eyebrow={t.whyEyebrow} title={t.whyTitle} />
      <div className="why-grid">
        {t.why.map((item, index) => (
          <article className="why-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioPreview({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="portfolio-copy">
        <SectionIntro eyebrow={t.portfolioEyebrow} title={t.portfolioTitle} text={t.portfolioText} />
        <a className="text-link" href="#inquiry">
          {t.planEvent}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="portfolio-grid">
        {siteContent.portfolio.map((item, index) => (
          <article className="portfolio-item" key={item.label}>
            <PortfolioCarousel item={item} title={t.portfolio[index].title} />
            <h2>{t.portfolio[index].title}</h2>
            <p>{t.portfolio[index].description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioCarousel({
  item,
  title
}: {
  item: (typeof siteContent.portfolio)[number];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const image = item.images[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + item.images.length) % item.images.length);
  }

  return (
    <div className="portfolio-carousel">
      <img src={image} alt={`${title} gallery image ${index + 1}`} />
      <button className="carousel-arrow prev" type="button" aria-label="Previous image" onClick={() => move(-1)}>
        ‹
      </button>
      <button className="carousel-arrow next" type="button" aria-label="Next image" onClick={() => move(1)}>
        ›
      </button>
      <span className="portfolio-label">{item.label}</span>
      <span className="carousel-count">
        {index + 1} / {item.images.length}
      </span>
    </div>
  );
}

function Process({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="process" className="section process-section">
      <SectionIntro eyebrow={t.processEyebrow} title={t.processTitle} />
      <div className="process-list">
        {t.process.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Inquiry({ language }: { language: Language }) {
  const t = translations[language];
  const { contact } = siteContent;

  return (
    <section id="inquiry" className="inquiry-section">
      <div>
        <p className="eyebrow">{t.inquiryEyebrow}</p>
        <h2>{t.inquiryTitle}</h2>
        <div className="gold-divider" aria-hidden="true" />
        <p>{t.inquiryText}</p>
      </div>
      <InquiryForm language={language} />
      <div className="contact-strip">
        <span>
          <MapPin size={16} aria-hidden="true" />
          {contact.location}
        </span>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="gold-divider" aria-hidden="true" />
      {text ? <p>{text}</p> : null}
    </div>
  );
}
