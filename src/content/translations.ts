export type Language = "en" | "is";

export const translations = {
  en: {
    navServices: "Services",
    navPortfolio: "Portfolio",
    navProcess: "Process",
    navInquiry: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroKicker: "Event decor across Iceland",
    heroTitle: "Dreamlike decor for every celebration.",
    heroLead:
      "Tailored event styling for weddings, proposals, gender reveals, corporate events, holidays, and private celebrations.",
    bookConsultation: "Request a quote",
    viewPortfolio: "View portfolio",
    servicesEyebrow: "Services",
    servicesTitle: "A complete decor service for every kind of celebration.",
    learnMore: "Learn more",
    aboutEyebrow: "About the studio",
    aboutTitle: "Decor with atmosphere, balance, and a sense of occasion.",
    aboutText:
      "Dream Decor Studio Iceland creates thoughtful event styling around your venue, story, season, and guests. From the first moodboard to the final candle, every detail is shaped into one coherent celebration.",
    aboutCta: "Tell us about your event",
    whyEyebrow: "Why choose us",
    whyTitle: "From first idea to final setup, everything works together.",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Explore decor directions for every celebration.",
    portfolioText:
      "Browse visual references for weddings, proposals, baby celebrations, corporate events, holidays, and custom occasions. Client work will progressively replace the reference imagery.",
    planEvent: "Plan your event",
    processEyebrow: "Process",
    processTitle: "Clear planning, thoughtful styling, a memorable result.",
    inquiryEyebrow: "Request a quote",
    inquiryTitle: "Tell us the date, place, and mood. We will shape the decor around it.",
    inquiryText:
      "Share the practical details and the atmosphere you imagine. We will review your request and contact you with the next steps.",
    responseTime: "We usually reply within one business day.",
    contactUs: "Contact Dream Decor",
    followUs: "Follow our latest work",
    whatsappCta: "Chat on WhatsApp",
    bookNoona: "Book a consultation",
    beforeLabel: "Before",
    afterLabel: "After",
    testimonialsEyebrow: "Reviews",
    testimonialsTitle: "What clients say about working with us.",
    testimonialsPlaceholder: "Client reviews will appear here as we complete our first events. In the meantime, follow us on Instagram to see our work in progress.",
    founderEyebrow: "Meet the founder",
    founderTitle: "The person behind every concept.",
    founderText: "Dream Decor Studio Iceland was founded with a simple belief: every celebration deserves a setting that feels as special as the moment itself. From the first conversation to the final candle, every detail is personal.",
    founderName: "Founder, Dream Decor Studio Iceland",
    pricingEyebrow: "Packages",
    pricingTitle: "A package for every kind of celebration.",
    pricingNote:
      "Every celebration is quoted individually. Share your details and we'll prepare a tailored proposal.",
    // TODO(client): confirm package names and what each includes. Prices are quoted per event.
    pricing: [
      {
        name: "Essential",
        price: "Price on request",
        description: "Styling for intimate gatherings and focused setups.",
        features: ["Concept direction", "Table & focal styling", "On-site setup"]
      },
      {
        name: "Signature",
        price: "Price on request",
        description: "Our most popular full-service décor for larger celebrations.",
        features: ["Full concept & moodboard", "Complete venue styling", "Setup & takedown"],
        featured: true
      },
      {
        name: "Bespoke",
        price: "Price on request",
        description: "Fully tailored design for weddings and premium events.",
        features: ["Bespoke design", "Florals & installations", "Coordination on the day"]
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Good to know before you book.",
    // TODO(client): adjust answers to match the studio's real policies.
    faq: [
      {
        question: "Which areas in Iceland do you cover?",
        answer:
          "We are based in the capital area and travel across Iceland. Travel outside the Reykjavik area may add a small fee."
      },
      {
        question: "How far in advance should I book?",
        answer:
          "For weddings and large events we recommend 2–3 months ahead. Smaller setups can often be arranged with a few weeks' notice."
      },
      {
        question: "Do you handle setup and takedown?",
        answer:
          "Yes. Depending on the package we deliver, install, style on-site, and remove the décor after the event."
      },
      {
        question: "Can you work with my budget?",
        answer:
          "We shape each concept around your budget and priorities, and we are transparent about what is possible."
      },
      {
        question: "Do you provide flowers and rentals?",
        answer:
          "Yes, florals, candles, backdrops, and décor rentals can all be included in your concept."
      }
    ],
    mapEyebrow: "Where we work",
    mapTitle: "Serving celebrations across Iceland.",
    instagramEyebrow: "Instagram",
    instagramTitle: "Our latest work on Instagram.",
    instagramFollow: "Follow on Instagram",
    services: [
      {
        title: "Weddings",
        description: "Ceremonies and receptions styled as one elegant, personal celebration.",
        includes: ["Ceremony styling", "Tablescapes", "Floral direction"]
      },
      {
        title: "Proposals & engagements",
        description: "Romantic settings for the question, the answer, and the celebration afterward.",
        includes: ["Concept and location", "Candles and flowers", "Photo-ready setup"]
      },
      {
        title: "Baby celebrations",
        description: "Warm concepts for gender reveals, baby showers, baptisms, and first birthdays.",
        includes: ["Themed backdrop", "Dessert table", "Photo corner"]
      },
      {
        title: "Corporate events",
        description: "Polished decor for launches, dinners, team celebrations, and branded gatherings.",
        includes: ["Brand-aware concept", "Venue styling", "On-site setup"]
      },
      {
        title: "Seasonal & holiday",
        description: "Festive installations for homes, restaurants, salons, shops, and offices.",
        includes: ["Holiday decor", "Window styling", "Seasonal installations"]
      },
      {
        title: "Private & custom events",
        description: "Birthdays, anniversaries, themed parties, and celebrations outside the usual categories.",
        includes: ["Custom moodboard", "Flexible styling", "Setup and finishing"]
      }
    ],
    why: [
      {
        title: "Custom concept",
        description: "Every event receives a tailored visual direction rather than a repeated template."
      },
      {
        title: "Complete setup",
        description: "Delivery, placement, styling, and finishing touches are handled at the venue."
      },
      {
        title: "Made for Iceland",
        description: "Materials, timing, lighting, and seasonal details are selected for the local setting."
      },
      {
        title: "Clear planning",
        description: "Date, venue, guest count, budget, and priorities are clarified before styling begins."
      }
    ],
    portfolio: [
      {
        title: "Wedding settings",
        description: "Ceremony arches, tablescapes, candles, and floral moments for elegant weddings."
      },
      {
        title: "Proposals & engagements",
        description: "Intimate settings designed around a meaningful question and a memorable answer."
      },
      {
        title: "Gender reveals & baby events",
        description: "Playful, refined styling for reveals, showers, baptisms, and early milestones."
      },
      {
        title: "Corporate events",
        description: "Structured, polished settings for companies, teams, launches, and client gatherings."
      },
      {
        title: "Seasonal spaces",
        description: "Holiday decor, winter installations, shop displays, and styled interiors."
      },
      {
        title: "Private & custom celebrations",
        description: "Birthdays, anniversaries, themed parties, and ideas beyond the standard categories."
      }
    ],
    process: [
      {
        title: "Consultation",
        description: "We gather the date, venue, guest count, budget, style direction, and practical needs."
      },
      {
        title: "Concept",
        description: "The mood, colors, materials, flowers, and decor elements become a clear visual plan."
      },
      {
        title: "Setup",
        description: "Decor is prepared, delivered, installed, finished on-site, and removed when agreed."
      }
    ],
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "+354...",
      email: "Email",
      eventType: "Event type",
      chooseEventType: "Choose event type",
      date: "Event date",
      message: "Tell us about your event",
      messagePlaceholder: "Date, venue, number of guests, style you imagine — share as much or as little as you like.",
      submit: "Send request",
      sending: "Sending...",
      sentTitle: "Request received",
      sent: "Thank you. We received your request and will contact you within one business day.",
      sendAnother: "Send another request",
      error: "The request could not be sent. Please contact us by phone, email, or Instagram."
    },
    eventTypes: [
      "Wedding",
      "Proposal / Engagement",
      "Gender Reveal",
      "Baby Shower / Baptism",
      "Birthday / Anniversary",
      "Corporate Event",
      "Seasonal / Holiday Decor",
      "Private Event",
      "Other"
    ]
  },
  is: {
    navServices: "Þjónusta",
    navPortfolio: "Verkefni",
    navProcess: "Ferlið",
    navInquiry: "Hafa samband",
    openMenu: "Opna valmynd",
    closeMenu: "Loka valmynd",
    heroKicker: "Viðburðaskreytingar um allt Ísland",
    heroTitle: "Draumkenndar skreytingar fyrir öll tilefni.",
    heroLead:
      "Sérsniðnar skreytingar fyrir brúðkaup, bónorð, kynjaveislur, fyrirtækjaviðburði, hátíðir og einkasamkvæmi.",
    bookConsultation: "Fá tilboð",
    viewPortfolio: "Skoða verkefni",
    servicesEyebrow: "Þjónusta",
    servicesTitle: "Heildstæð skreytingaþjónusta fyrir alls konar tilefni.",
    learnMore: "Sjá nánar",
    aboutEyebrow: "Um stúdíóið",
    aboutTitle: "Skreytingar með stemningu, jafnvægi og hátíðlegum blæ.",
    aboutText:
      "Dream Decor Studio Iceland hannar viðburði út frá staðsetningu, sögu, árstíð og gestum. Frá fyrstu hugmyndatöflu til síðasta kertis er hverju smáatriði raðað saman í eina fallega heild.",
    aboutCta: "Segðu okkur frá viðburðinum",
    whyEyebrow: "Af hverju að velja okkur",
    whyTitle: "Frá fyrstu hugmynd til lokauppsetningar myndar allt eina heild.",
    portfolioEyebrow: "Verkefni",
    portfolioTitle: "Skoðaðu hugmyndir fyrir alls konar tilefni.",
    portfolioText:
      "Skoðaðu hugmyndir fyrir brúðkaup, bónorð, barnatengda viðburði, fyrirtæki, hátíðir og sérsniðin tilefni. Myndir úr raunverulegum verkefnum taka smám saman við af viðmiðunarmyndunum.",
    planEvent: "Skipuleggja viðburð",
    processEyebrow: "Ferlið",
    processTitle: "Skýr skipulagning, vönduð hönnun og eftirminnileg útkoma.",
    inquiryEyebrow: "Fá tilboð",
    inquiryTitle: "Segðu okkur dagsetningu, stað og stemningu. Við mótum skreytingarnar í kringum það.",
    inquiryText:
      "Sendu okkur helstu upplýsingar og lýstu stemningunni sem þú sérð fyrir þér. Við förum yfir fyrirspurnina og höfum samband um næstu skref.",
    responseTime: "Við svörum yfirleitt innan eins virks dags.",
    contactUs: "Hafa samband við Dream Decor",
    followUs: "Fylgstu með nýjustu verkefnunum",
    whatsappCta: "Spjalla á WhatsApp",
    bookNoona: "Bóka ráðgjöf",
    beforeLabel: "Fyrir",
    afterLabel: "Eftir",
    testimonialsEyebrow: "Umsagnir",
    testimonialsTitle: "Hvað viðskiptavinir segja um samstarfið.",
    testimonialsPlaceholder: "Umsagnir viðskiptavina birtast hér eftir fyrstu verkefnin okkar. Á meðan er hægt að fylgjast með okkur á Instagram.",
    founderEyebrow: "Kynntu þér stofnandann",
    founderTitle: "Manneskjan á bak við hverja hugmynd.",
    founderText: "Dream Decor Studio Iceland var stofnað með einfalda trú: hvert tilefni á skilið umgjörð sem finnst jafn sérstök og augnablikið sjálft. Frá fyrsta samtali til síðasta kertis er hvert smáatriði persónulegt.",
    founderName: "Stofnandi, Dream Decor Studio Iceland",
    pricingEyebrow: "Pakkar",
    pricingTitle: "Pakki fyrir hvers konar tilefni.",
    pricingNote:
      "Hver viðburður er verðlagður sérstaklega. Sendu okkur upplýsingar og við útbúum sérsniðið tilboð.",
    pricing: [
      {
        name: "Grunnur",
        price: "Verð samkvæmt tilboði",
        description: "Skreytingar fyrir minni samkvæmi og afmarkaðar uppsetningar.",
        features: ["Hugmyndastefna", "Borð- og fókusskreyting", "Uppsetning á staðnum"]
      },
      {
        name: "Signature",
        price: "Verð samkvæmt tilboði",
        description: "Vinsælasta heildarþjónustan okkar fyrir stærri viðburði.",
        features: ["Heildarhugmynd og tafla", "Full skreyting staðar", "Uppsetning og niðurtaka"],
        featured: true
      },
      {
        name: "Sérsniðið",
        price: "Verð samkvæmt tilboði",
        description: "Algjörlega sérsniðin hönnun fyrir brúðkaup og glæsiviðburði.",
        features: ["Sérsniðin hönnun", "Blóm og uppsetningar", "Umsjón á deginum"]
      }
    ],
    faqEyebrow: "Algengar spurningar",
    faqTitle: "Gott að vita áður en þú bókar.",
    faq: [
      {
        question: "Hvaða svæði á Íslandi þjónustið þið?",
        answer:
          "Við erum á höfuðborgarsvæðinu og ferðumst um allt Ísland. Ferðir út fyrir Reykjavíkursvæðið geta bætt við litlu gjaldi."
      },
      {
        question: "Hversu langt fram í tímann ætti ég að bóka?",
        answer:
          "Fyrir brúðkaup og stóra viðburði mælum við með 2–3 mánuðum. Minni uppsetningar er oft hægt að skipuleggja með nokkurra vikna fyrirvara."
      },
      {
        question: "Sjáið þið um uppsetningu og niðurtöku?",
        answer:
          "Já. Eftir pakka afhendum við, setjum upp, stílum á staðnum og fjarlægjum skreytingar eftir viðburðinn."
      },
      {
        question: "Getið þið unnið út frá mínum fjárhag?",
        answer:
          "Við mótum hverja hugmynd út frá fjárhag og áherslum þínum og erum gagnsæ um hvað er mögulegt."
      },
      {
        question: "Útvegið þið blóm og leigumuni?",
        answer:
          "Já, blóm, kerti, bakgrunna og leigumuni má allt fella inn í hugmyndina þína."
      }
    ],
    mapEyebrow: "Hvar við störfum",
    mapTitle: "Þjónum viðburðum um allt Ísland.",
    instagramEyebrow: "Instagram",
    instagramTitle: "Nýjustu verkefnin á Instagram.",
    instagramFollow: "Fylgja á Instagram",
    services: [
      {
        title: "Brúðkaup",
        description: "Athöfn og veisla hönnuð sem ein glæsileg og persónuleg heild.",
        includes: ["Skreyting athafnar", "Borðskreytingar", "Blómahönnun"]
      },
      {
        title: "Bónorð og trúlofanir",
        description: "Rómantísk umgjörð fyrir stóru spurninguna og fögnuðinn sem fylgir.",
        includes: ["Hugmynd og staðsetning", "Kerti og blóm", "Myndvæn uppsetning"]
      },
      {
        title: "Kynjaveislur og barnatilefni",
        description: "Hlýlegar hugmyndir fyrir kynjaveislur, steypiboð, skírnir og barnaafmæli.",
        includes: ["Þemabakgrunnur", "Veisluborð", "Myndahorn"]
      },
      {
        title: "Fyrirtækjaviðburðir",
        description: "Fágaðar skreytingar fyrir kynningar, kvöldverði, starfsmannagleði og móttökur.",
        includes: ["Hugmynd í takt við vörumerki", "Skreyting staðar", "Uppsetning á staðnum"]
      },
      {
        title: "Árstíða- og hátíðarskreytingar",
        description: "Hátíðlegar uppsetningar fyrir heimili, veitingastaði, stofur, verslanir og skrifstofur.",
        includes: ["Hátíðarskreytingar", "Gluggaútstillingar", "Árstíðabundnar uppsetningar"]
      },
      {
        title: "Einka- og sérviðburðir",
        description: "Afmæli, árshátíðir, þemaveislur og tilefni sem falla utan hefðbundinna flokka.",
        includes: ["Sérsniðin hugmyndatafla", "Sveigjanleg hönnun", "Uppsetning og frágangur"]
      }
    ],
    why: [
      {
        title: "Sérsniðin hugmynd",
        description: "Hver viðburður fær sína eigin sjónrænu stefnu í stað endurtekinnar lausnar."
      },
      {
        title: "Heildaruppsetning",
        description: "Afhending, uppröðun, hönnun og lokafrágangur fara fram á viðburðarstað."
      },
      {
        title: "Hannað fyrir Ísland",
        description: "Efni, tímasetning, lýsing og árstíðaratriði eru valin með íslenskar aðstæður í huga."
      },
      {
        title: "Skýr skipulagning",
        description: "Dagsetning, staður, gestafjöldi, fjárhagsáætlun og áherslur eru skýrðar áður en vinna hefst."
      }
    ],
    portfolio: [
      {
        title: "Brúðkaupsuppsetningar",
        description: "Bogar, borðskreytingar, kerti og blóm fyrir glæsileg brúðkaup."
      },
      {
        title: "Bónorð og trúlofanir",
        description: "Persónuleg umgjörð fyrir mikilvæga spurningu og eftirminnilegt svar."
      },
      {
        title: "Kynjaveislur og barnatilefni",
        description: "Leikandi og fáguð hönnun fyrir kynjaveislur, steypiboð, skírnir og fyrstu tímamótin."
      },
      {
        title: "Fyrirtækjaviðburðir",
        description: "Skipulögð og fáguð umgjörð fyrir fyrirtæki, teymi, kynningar og móttökur."
      },
      {
        title: "Árstíðabundin rými",
        description: "Hátíðarskreytingar, vetraruppsetningar, verslunargluggar og stílfærð rými."
      },
      {
        title: "Einka- og sérviðburðir",
        description: "Afmæli, árshátíðir, þemaveislur og hugmyndir utan hefðbundinna flokka."
      }
    ],
    process: [
      {
        title: "Ráðgjöf",
        description: "Við förum yfir dagsetningu, stað, gestafjölda, fjárhagsáætlun, stíl og hagnýtar þarfir."
      },
      {
        title: "Hugmyndavinna",
        description: "Stemning, litir, efni, blóm og skreytingaratriði verða að skýrri sjónrænni áætlun."
      },
      {
        title: "Uppsetning",
        description: "Skreytingar eru undirbúnar, afhentar, settar upp, fullkláraðar og teknar niður samkvæmt samkomulagi."
      }
    ],
    form: {
      name: "Nafn",
      namePlaceholder: "Nafnið þitt",
      phone: "Sími",
      phonePlaceholder: "+354...",
      email: "Netfang",
      eventType: "Tegund viðburðar",
      chooseEventType: "Veldu tegund viðburðar",
      date: "Dagsetning viðburðar",
      message: "Segðu okkur frá viðburðinum",
      messagePlaceholder: "Dagsetning, staður, gestafjöldi, stemning — deildu eins miklu eða litlu og þú vilt.",
      submit: "Senda fyrirspurn",
      sending: "Sendi...",
      sentTitle: "Fyrirspurn móttekin",
      sent: "Takk fyrir. Við höfum móttekið fyrirspurnina og höfum samband innan eins virks dags.",
      sendAnother: "Senda aðra fyrirspurn",
      error: "Ekki tókst að senda fyrirspurnina. Hafðu samband í síma, með netfangi eða á Instagram."
    },
    eventTypes: [
      "Brúðkaup",
      "Bónorð / Trúlofun",
      "Kynjaveisla",
      "Steypiboð / Skírn",
      "Afmæli / Árshátíð",
      "Fyrirtækjaviðburður",
      "Árstíða- / Hátíðarskreytingar",
      "Einkaviðburður",
      "Annað"
    ]
  }
} as const;
