export const siteContent = {
  brand: {
    name: "Dream Decor Studio Iceland",
    shortName: "Dream Decor",
    logo: "/images/dream-decor-mark.jpg"
  },
  hero: {
    image: "/images/hero-event-table.jpg"
  },
  about: {
    image: "/images/stock/40-custom-16935902.jpg"
  },
  // TODO(client): replace with real before/after photos of the same venue for the strongest effect.
  beforeAfter: {
    before: "/images/stock/17-private-5814107.jpg",
    after: "/images/stock/01-wedding-17022991.jpg"
  },
  // Links for the homepage service cards, aligned by index with translations.services.
  // Empty string = no dedicated page yet (card stays non-clickable until we build it).
  serviceLinks: [
    "/thjonusta/brudkaup", // Weddings
    "/thjonusta/bonord", // Proposals & engagements
    "/thjonusta/barnavidburdir", // Baby celebrations
    "/thjonusta/fyrirtaekjavidburdir", // Corporate events
    "/thjonusta/arstidaskreytingar", // Seasonal & holiday
    "/thjonusta/serividburdir" // Private & custom events
  ],
  // Portfolio copy (title/description) lives in translations.ts; only labels + images are here.
  portfolio: [
    {
      label: "01",
      images: [
        "/images/stock/01-wedding-17022991.jpg",
        "/images/stock/03-wedding-33964860.jpg",
        "/images/stock/05-wedding-34615484.jpg",
        "/images/stock/07-wedding-35568780.jpg",
        "/images/stock/04-wedding-32482871.jpg",
        "/images/stock/08-wedding-31622560.jpg",
        "/images/stock/02-wedding-36873712.jpg",
        "/images/stock/06-wedding-29040997.jpg",
        "/images/stock/10-wedding-28981058.jpg",
        "/images/stock/09-wedding-11994904.jpg"
      ]
    },
    {
      label: "02",
      images: [
        "/images/stock/31-custom-34611366.jpg",
        "/images/stock/32-custom-36027420.jpg",
        "/images/stock/33-custom-30815990.jpg",
        "/images/stock/34-custom-33104599.jpg",
        "/images/stock/35-custom-35985250.jpg"
      ]
    },
    {
      label: "03",
      images: [
        "/images/stock/16-private-29964260.jpg",
        "/images/stock/baby-a.jpg",
        "/images/stock/baby-b.jpg",
        "/images/stock/baby-c.jpg",
        "/images/stock/baby-d.jpg",
        "/images/stock/baby-e.jpg"
      ]
    },
    {
      label: "04",
      images: [
        "/images/stock/18-private-16120267.jpg",
        "/images/stock/corp-a.jpg",
        "/images/stock/corp-b.jpg",
        "/images/stock/corp-c.jpg",
        "/images/stock/corp-d.jpg",
        "/images/stock/corp-e.jpg"
      ]
    },
    {
      label: "05",
      images: [
        "/images/stock/21-seasonal-35134120.jpg",
        "/images/stock/22-seasonal-30592868.jpg",
        "/images/stock/23-seasonal-9523622.jpg",
        "/images/stock/24-seasonal-19598161.jpg",
        "/images/stock/25-seasonal-10810992.jpg",
        "/images/stock/27-seasonal-35985969.jpg",
        "/images/stock/29-seasonal-19594433.jpg",
        "/images/stock/26-seasonal-34241261.jpg",
        "/images/stock/28-seasonal-29585261.jpg",
        "/images/stock/30-seasonal-34481875.jpg"
      ]
    },
    {
      label: "06",
      images: [
        "/images/stock/11-private-28988081.jpg",
        "/images/stock/12-private-28988084.jpg",
        "/images/stock/13-private-34278807.jpg",
        "/images/stock/14-private-34597787.jpg",
        "/images/stock/15-private-16958224.jpg"
      ]
    }
  ],
  contact: {
    location: "Iceland",
    email: "dreamdecor.iceland@gmail.com",
    phone: "+354 766 6488",
    phoneHref: "tel:+3547666488",
    whatsapp: "https://wa.me/3547666488",
    instagram: "https://www.instagram.com/dream.decor.iceland/",
    instagramHandle: "@dream.decor.iceland",
    facebook: "https://www.facebook.com/profile.php?id=61592121797915",
    facebookLabel: "Dream Decor",
    // TODO(client): replace with the studio's exact coordinates for accurate local SEO.
    geo: { latitude: 64.1466, longitude: -21.9426 }
  },
  // TODO(client): paste the Noona booking link when the business account is ready. Empty = button hidden.
  booking: {
    noonaUrl: ""
  },
  // TODO(client): replace with a Google Maps embed URL centred on the studio / service area.
  map: {
    embedUrl:
      "https://www.google.com/maps?q=Reykjavik,+Iceland&output=embed"
  }
};
