"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Language, translations } from "@/content/translations";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function InquiryForm({ language }: { language: Language }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const t = translations[language].form;
  const eventTypes = translations[language].eventTypes;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      language
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label className="honeypot" aria-hidden="true">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        {t.name}
        <input type="text" name="name" placeholder={t.namePlaceholder} required />
      </label>
      <label>
        {t.email}
        <input type="email" name="email" placeholder="name@email.com" required />
      </label>
      <label>
        {t.phone}
        <input type="tel" name="phone" placeholder={t.phonePlaceholder} required />
      </label>
      <label>
        {t.eventType}
        <select name="eventType" defaultValue="" required>
          <option value="" disabled>
            {t.chooseEventType}
          </option>
          {eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label>
        {t.date}
        <input
          type="text"
          name="date"
          placeholder="2026-08-24"
          inputMode="numeric"
          pattern="\\d{4}-\\d{2}-\\d{2}"
          title="Use YYYY-MM-DD, for example 2026-08-24"
        />
      </label>
      <label>
        {t.location}
        <input type="text" name="location" placeholder="Reykjavik, Akureyri..." />
      </label>
      <label>
        {t.guests}
        <input type="number" min="1" name="guests" placeholder="80" />
      </label>
      <label>
        {t.budget}
        <input type="text" name="budget" placeholder={t.budgetPlaceholder} />
      </label>
      <label>
        {t.contactMethod}
        <select name="contactMethod" defaultValue="" required>
          <option value="" disabled>
            {t.chooseContactMethod}
          </option>
          {t.contactMethods.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        {t.support}
        <select name="support" defaultValue="">
          <option value="" disabled>
            {t.chooseSupport}
          </option>
          {t.supportOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="full">
        {t.mood}
        <input type="text" name="mood" placeholder={t.moodPlaceholder} />
      </label>
      <label className="full">
        {t.message}
        <textarea name="message" rows={4} placeholder={t.messagePlaceholder} required />
      </label>
      <button className="button primary full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      {status === "sent" ? <p className="form-status full">{t.sent}</p> : null}
      {status === "error" ? <p className="form-status error full">{t.error}</p> : null}
      {status === "error" ? (
        <p className="form-fallback full">
          <a href="tel:+3547666488">+354 766 6488</a>
          <a href="mailto:dreamdecor.iceland@gmail.com">dreamdecor.iceland@gmail.com</a>
        </p>
      ) : null}
    </form>
  );
}
