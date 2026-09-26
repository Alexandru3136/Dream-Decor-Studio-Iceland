"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  X
} from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { InstagramFeed } from "@/components/InstagramFeed";
import { PriceEstimator } from "@/components/PriceEstimator";
import { siteContent } from "@/content/site";
import { Language, translations } from "@/content/translations";
import { trackEvent } from "@/lib/analytics";
import { estimatorText } from "@/content/estimator";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  // Restore the visitor's preferred language: ?lang= wins, then a saved choice.
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
      // Ignore storage failures (private mode, blocked cookies).
    }
  }, [language]);

  return (
    <main>
      <Hero language={language} setLanguage={setLanguage} />
      <Services language={language} />
      <About language={language} />
      <Founder language={language} />
      <WhyChooseUs language={language} />
      <PortfolioPreview language={language} />
      <InstagramSection language={language} />
      <Process language={language} />
      <Pricing language={language} />
      <Estimator language={language} />
      <Testimonials language={language} />
      <Faq language={language} />
      <ServiceArea language={language} />
      <Inquiry language={language} />
      <Footer language={language} />
      <FloatingWhatsApp href={siteContent.contact.whatsapp} label={t.whatsappCta} />
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
  const [menuOpen, setMenuOpen] = useState(false);
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
          <Image src={siteContent.brand.logo} alt="" aria-hidden="true" width={58} height={34} priority />
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
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={menuOpen ? "mobile-menu open" : "mobile-menu"}
        hidden={!menuOpen}
      >
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>

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
            {siteContent.booking.noonaUrl ? (
              <a
                className="button secondary"
                href={siteContent.booking.noonaUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Calendar size={18} aria-hidden="true" />
                {t.bookNoona}
              </a>
            ) : (
              <a className="button secondary" href="#portfolio">
                {t.viewPortfolio}
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual" aria-label="Elegant decorated event table">
          <Image
            className="hero-photo"
            src={siteContent.hero.image}
            alt="Elegant decorated event table with candles and flowers"
            fill
            priority
            sizes="(max-width: 720px) 100vw, 50vw"
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
        {t.services.map((service, index) => {
          const href = siteContent.serviceLinks[index];
          const inner = (
            <>
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
              {href ? (
                <span className="service-card-link">
                  {t.learnMore}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              ) : null}
            </>
          );

          return href ? (
            <Link className="service-card linked" href={href} key={service.title}>
              {inner}
            </Link>
          ) : (
            <article className="service-card" key={service.title}>
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="about" className="section about-section alt">
      <div>
        <SectionIntro eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.aboutText} />
        <a className="text-link" href="#inquiry">
          {t.aboutCta}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="about-media">
        <BeforeAfter
          before={siteContent.beforeAfter.before}
          after={siteContent.beforeAfter.after}
          beforeLabel={t.beforeLabel}
          afterLabel={t.afterLabel}
        />
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const image = item.images[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + item.images.length) % item.images.length);
  }

  function handleTouchEnd(endX: number) {
    if (touchStartX === null) return;
    const delta = endX - touchStartX;
    if (Math.abs(delta) > 40) {
      move(delta < 0 ? 1 : -1);
    }
    setTouchStartX(null);
  }

  return (
    <div
      className="portfolio-carousel"
      onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
    >
      <Image
        src={image}
        alt={`${title} gallery image ${index + 1}`}
        fill
        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />
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
        <a href={`mailto:${contact.email}`}>
          <Mail size={16} aria-hidden="true" />
          {contact.email}
        </a>
        <a href={contact.phoneHref} onClick={() => trackEvent("phone_click")}>
          <Phone size={16} aria-hidden="true" />
          {contact.phone}
        </a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_click")}>
          <MessageCircle size={16} aria-hidden="true" />
          WhatsApp
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          <Instagram size={16} aria-hidden="true" />
          {contact.instagramHandle}
        </a>
        <a href={contact.facebook} target="_blank" rel="noreferrer">
          <Facebook size={16} aria-hidden="true" />
          {contact.facebookLabel}
        </a>
      </div>
      <p className="response-time">{t.responseTime}</p>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  const t = translations[language];
  const { contact, brand } = siteContent;

  return (
    <footer className="site-footer">
      <div>
        <Image src={brand.logo} alt="" aria-hidden="true" width={62} height={42} />
        <div>
          <strong>{brand.name}</strong>
          <span>{t.contactUs}</span>
        </div>
      </div>
      <div className="footer-links" aria-label={t.followUs}>
        <a href={`mailto:${contact.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
        <a href={contact.phoneHref} aria-label="Phone">
          <Phone size={18} />
        </a>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <MessageCircle size={18} />
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
          <Facebook size={18} />
        </a>
      </div>
    </footer>
  );
}

function Pricing({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="pricing" className="section alt">
      <SectionIntro eyebrow={t.pricingEyebrow} title={t.pricingTitle} />
      <div className="pricing-grid">
        {t.pricing.map((tier) => (
          <article
            className={"featured" in tier && tier.featured ? "pricing-card featured" : "pricing-card"}
            key={tier.name}
          >
            <h3>{tier.name}</h3>
            <p className="pricing-price">{tier.price}</p>
            <p className="pricing-desc">{tier.description}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a className="button primary full" href="#inquiry">
              {t.bookConsultation}
            </a>
          </article>
        ))}
      </div>
      <p className="pricing-note">{t.pricingNote}</p>
    </section>
  );
}

function Estimator({ language }: { language: Language }) {
  const t = estimatorText[language];

  return (
    <section id="estimate" className="section estimator-section">
      <SectionIntro eyebrow={t.eyebrow} title={t.title} />
      <PriceEstimator language={language} />
    </section>
  );
}

function Testimonials({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="section testimonials-section">
      <SectionIntro eyebrow={t.testimonialsEyebrow} title={t.testimonialsTitle} />
      <div className="testimonials-placeholder">
        <Quote size={32} aria-hidden="true" />
        <p>{t.testimonialsPlaceholder}</p>
        <a className="button secondary" href={siteContent.contact.instagram} target="_blank" rel="noreferrer">
          <Instagram size={18} aria-hidden="true" />
          {siteContent.contact.instagramHandle}
        </a>
      </div>
    </section>
  );
}

function Founder({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="section founder-section alt">
      <div className="founder-layout">
        <div className="founder-photo">
          {/* TODO(client): replace with a real photo of the founder */}
          <div className="founder-photo-placeholder">
            <Sparkles size={32} aria-hidden="true" />
          </div>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">{t.founderEyebrow}</p>
          <h2>{t.founderTitle}</h2>
          <div className="gold-divider" aria-hidden="true" />
          <p>{t.founderText}</p>
          <p className="founder-name">{t.founderName}</p>
        </div>
      </div>
    </section>
  );
}

function Faq({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section id="faq" className="section faq-section alt">
      <SectionIntro eyebrow={t.faqEyebrow} title={t.faqTitle} />
      <div className="faq-list">
        {t.faq.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              {item.question}
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function InstagramSection({ language }: { language: Language }) {
  const t = translations[language];

  return (
    <section className="section instagram-section alt">
      <SectionIntro eyebrow={t.instagramEyebrow} title={t.instagramTitle} />
      <InstagramFeed
        feedId={process.env.NEXT_PUBLIC_BEHOLD_FEED_ID}
        profileUrl={siteContent.contact.instagram}
        handle={siteContent.contact.instagramHandle}
        follow={t.instagramFollow}
      />
    </section>
  );
}

function ServiceArea({ language }: { language: Language }) {
  const t = translations[language];
  const [visible, setVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section service-area-section">
      <SectionIntro eyebrow={t.mapEyebrow} title={t.mapTitle} />
      <div className="service-area-map" ref={mapRef}>
        {visible ? (
          <iframe
            src={siteContent.map.embedUrl}
            title={t.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : null}
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
