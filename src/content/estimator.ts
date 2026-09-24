// Rough price estimator configuration.
// TODO(client): adjust all numbers below to your real pricing. These are indicative placeholders
// anchored to Icelandic market ranges — the UI always presents the result as a range, never a firm quote.
export const estimatorConfig = {
  perGuest: 1500, // ISK added per guest (table styling, place settings, etc.)
  guestMin: 10,
  guestMax: 300,
  guestDefault: 80,
  rangeLow: 0.9, // result shown as [estimate * rangeLow, estimate * rangeHigh]
  rangeHigh: 1.2,
  roundTo: 5000, // round the displayed range to the nearest N ISK
  packages: [
    { key: "essential", base: 150000 },
    { key: "signature", base: 300000 },
    { key: "bespoke", base: 500000 }
  ],
  addons: [
    { key: "florals", cost: 80000 },
    { key: "lighting", cost: 50000 },
    { key: "backdrop", cost: 90000 },
    { key: "setup", cost: 40000 },
    { key: "coordination", cost: 60000 }
  ]
} as const;

export type EstimatorLang = {
  eyebrow: string;
  title: string;
  packageLabel: string;
  packages: Record<"essential" | "signature" | "bespoke", string>;
  guestsLabel: string;
  addonsLabel: string;
  addons: Record<"florals" | "lighting" | "backdrop" | "setup" | "coordination", string>;
  resultLabel: string;
  note: string;
  cta: string;
};

export const estimatorText: { en: EstimatorLang; is: EstimatorLang } = {
  en: {
    eyebrow: "Estimate",
    title: "Get a rough idea of your budget.",
    packageLabel: "Service level",
    packages: {
      essential: "Essential",
      signature: "Signature",
      bespoke: "Bespoke"
    },
    guestsLabel: "Approximate guests",
    addonsLabel: "Add-ons",
    addons: {
      florals: "Florals & greenery",
      lighting: "Candles & lighting",
      backdrop: "Backdrop or arch",
      setup: "Setup & takedown",
      coordination: "Day-of coordination"
    },
    resultLabel: "Estimated range",
    note: "This is a rough guide only. Your final quote depends on the venue, season, and full décor scope.",
    cta: "Get an exact quote"
  },
  is: {
    eyebrow: "Áætlun",
    title: "Fáðu grófa hugmynd um kostnaðinn.",
    packageLabel: "Þjónustustig",
    packages: {
      essential: "Grunnur",
      signature: "Signature",
      bespoke: "Sérsniðið"
    },
    guestsLabel: "Áætlaður gestafjöldi",
    addonsLabel: "Viðbætur",
    addons: {
      florals: "Blóm og grænt",
      lighting: "Kerti og lýsing",
      backdrop: "Bakgrunnur eða bogi",
      setup: "Uppsetning og niðurtaka",
      coordination: "Umsjón á deginum"
    },
    resultLabel: "Áætlað bil",
    note: "Þetta er einungis gróf viðmiðun. Endanlegt tilboð fer eftir stað, árstíð og umfangi skreytinga.",
    cta: "Fá nákvæmt tilboð"
  }
};
