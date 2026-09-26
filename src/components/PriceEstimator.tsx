"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { estimatorConfig, estimatorText } from "@/content/estimator";
import type { Language } from "@/content/translations";

type PackageKey = (typeof estimatorConfig.packages)[number]["key"];
type AddonKey = (typeof estimatorConfig.addons)[number]["key"];

function formatISK(value: number): string {
  return `${value.toLocaleString("de-DE")} ISK`;
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function PriceEstimator({ language }: { language: Language }) {
  const t = estimatorText[language];
  const [pkg, setPkg] = useState<PackageKey>("signature");
  const [guests, setGuests] = useState<number>(estimatorConfig.guestDefault);
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({
    florals: true,
    lighting: false,
    backdrop: false,
    setup: true,
    coordination: false
  });

  const { low, high } = useMemo(() => {
    const base = estimatorConfig.packages.find((p) => p.key === pkg)?.base ?? 0;
    const guestsCost = guests * estimatorConfig.perGuest;
    const addonsCost = estimatorConfig.addons.reduce(
      (sum, addon) => (addons[addon.key] ? sum + addon.cost : sum),
      0
    );
    const estimate = base + guestsCost + addonsCost;
    return {
      low: roundTo(estimate * estimatorConfig.rangeLow, estimatorConfig.roundTo),
      high: roundTo(estimate * estimatorConfig.rangeHigh, estimatorConfig.roundTo)
    };
  }, [pkg, guests, addons]);

  return (
    <div className="estimator">
      <div className="estimator-controls">
        <div className="estimator-field">
          <span className="estimator-label">{t.packageLabel}</span>
          <div className="estimator-segments" role="group" aria-label={t.packageLabel}>
            {estimatorConfig.packages.map((p) => (
              <button
                key={p.key}
                type="button"
                className={pkg === p.key ? "active" : ""}
                aria-pressed={pkg === p.key}
                onClick={() => setPkg(p.key)}
              >
                {t.packages[p.key]}
              </button>
            ))}
          </div>
        </div>

        <div className="estimator-field">
          <span className="estimator-label">
            {t.guestsLabel}: <strong>{guests}</strong>
          </span>
          <input
            type="range"
            min={estimatorConfig.guestMin}
            max={estimatorConfig.guestMax}
            step={5}
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            aria-label={t.guestsLabel}
          />
        </div>

        <div className="estimator-field">
          <span className="estimator-label">{t.addonsLabel}</span>
          <div className="estimator-addons">
            {estimatorConfig.addons.map((addon) => (
              <label key={addon.key} className={addons[addon.key] ? "checked" : ""}>
                <input
                  type="checkbox"
                  checked={addons[addon.key]}
                  onChange={(event) =>
                    setAddons((current) => ({ ...current, [addon.key]: event.target.checked }))
                  }
                />
                {t.addons[addon.key]}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="estimator-result">
        <span className="estimator-result-label">{t.resultLabel}</span>
        <p className="estimator-range" aria-live="polite">
          {formatISK(low)} <span>–</span> {formatISK(high)}
        </p>
        <p className="estimator-note">{t.note}</p>
        <a className="button primary full" href="#inquiry" onClick={() => trackEvent("estimator_cta", { package: pkg, guests, estimate_low: low, estimate_high: high })}>
          {t.cta}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
