import { siteContent } from "./site";

// Shared UI labels + the (generic) "How we work" steps, reused by every service page.
export const serviceLabels = {
  en: {
    home: "Home",
    cta: "Request a quote",
    galleryTitle: "Selected work",
    stepsTitle: "How we work",
    steps: [
      { title: "Consultation", desc: "We learn your date, venue, guest count, and the mood you imagine." },
      { title: "Concept", desc: "You receive a tailored look — colours, details, and setup as one plan." },
      { title: "Setup on the day", desc: "We deliver, install, and finish everything on-site, then take it down." }
    ]
  },
  is: {
    home: "Forsíða",
    cta: "Fá tilboð",
    galleryTitle: "Valin verkefni",
    stepsTitle: "Svona vinnum við",
    steps: [
      { title: "Ráðgjöf", desc: "Við kynnumst dagsetningu, stað, gestafjölda og stemningunni sem þið sjáið fyrir ykkur." },
      { title: "Hugmynd", desc: "Þið fáið sérsniðna umgjörð — liti, smáatriði og uppsetningu sem eina áætlun." },
      { title: "Uppsetning á deginum", desc: "Við afhendum, setjum upp og göngum frá öllu á staðnum og tökum svo niður." }
    ]
  }
} as const;

type ServiceCopy = {
  current: string;
  eyebrow: string;
  title: string;
  lead: string;
  trust: string;
  introTitle: string;
  introText: string;
  includesTitle: string;
  includes: readonly string[];
  faqTitle: string;
  faq: readonly { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
};

export type ServiceContent = {
  portfolioIndex: number;
  meta: { title: string; description: string; keywords: readonly string[] };
  en: ServiceCopy;
  is: ServiceCopy;
};

export const services = {
  brudkaup: {
    portfolioIndex: 0,
    meta: {
      title: "Brúðkaupsskreytingar á Íslandi | Wedding Decoration | Dream Decor",
      description:
        "Brúðkaupsskreytingar um allt Ísland — sérsniðnar skreytingar fyrir athöfn og veislu. Wedding decoration and styling across Iceland by Dream Decor Studio.",
      keywords: ["brúðkaupsskreytingar", "brúðkaupsskreytingar Reykjavík", "wedding decoration Iceland", "wedding styling Iceland"]
    },
    en: {
      current: "Weddings",
      eyebrow: "Wedding decoration",
      title: "Wedding decoration across Iceland.",
      lead: "From the ceremony arch to the last candle on the table, we style weddings into one elegant, personal celebration — shaped around your venue, season, and story.",
      trust: "Tailored styling for weddings across Iceland",
      introTitle: "Styling that turns a venue into your day.",
      introText:
        "Every wedding is different, so we never reuse a template. We start from your venue, colours, and the mood you imagine, then design a coherent look that carries from the ceremony through to the reception. On the day, we deliver, install, and finish everything on-site so you can be fully present.",
      includesTitle: "What a wedding setup can include",
      includes: [
        "Ceremony styling, arches or backdrops",
        "Tablescapes, centrepieces, and place settings",
        "Floral direction and candle arrangements",
        "Sweetheart or head-table focal styling",
        "Photo corners and welcome details",
        "On-site setup and takedown"
      ],
      faqTitle: "Wedding decor questions",
      faq: [
        { q: "How far in advance should we book wedding decor?", a: "For weddings we recommend reaching out 2–3 months ahead, especially for the summer season, so we can secure the concept and any florals or rentals." },
        { q: "Do you travel outside the Reykjavik area?", a: "Yes. We style weddings across Iceland. Venues further from the capital area may include a small travel fee, which we confirm in your quote." },
        { q: "Can you work with our florist or planner?", a: "Absolutely. We're happy to coordinate with your florist, planner, or venue team so everything comes together seamlessly." }
      ],
      finalTitle: "Let's shape your wedding decor.",
      finalText: "Tell us the date, venue, and the mood you imagine — we'll prepare a tailored proposal."
    },
    is: {
      current: "Brúðkaup",
      eyebrow: "Brúðkaupsskreytingar",
      title: "Brúðkaupsskreytingar um allt Ísland.",
      lead: "Frá athafnarboga að síðasta kerti á borðinu hönnum við brúðkaup sem eina glæsilega og persónulega heild — mótaða út frá staðnum, árstíðinni og sögunni ykkar.",
      trust: "Sérsniðnar skreytingar fyrir brúðkaup um allt Ísland",
      introTitle: "Skreytingar sem breyta sal í daginn ykkar.",
      introText:
        "Hvert brúðkaup er einstakt og því endurnýtum við aldrei sniðmát. Við byrjum á staðnum, litunum og stemningunni sem þið sjáið fyrir ykkur og hönnum svo heildstæða umgjörð sem fylgir frá athöfn til veislu. Á deginum sjálfum afhendum við, setjum upp og göngum frá öllu á staðnum svo þið getið notið dagsins.",
      includesTitle: "Hvað getur brúðkaupsuppsetning innihaldið",
      includes: [
        "Skreyting athafnar, bogar eða bakgrunnar",
        "Borðskreytingar, miðjuskreytingar og borðbúnaður",
        "Blómahönnun og kertaskreytingar",
        "Skreyting brúðhjónaborðs",
        "Myndahorn og móttökuatriði",
        "Uppsetning og niðurtaka á staðnum"
      ],
      faqTitle: "Spurningar um brúðkaupsskreytingar",
      faq: [
        { q: "Hversu langt fram í tímann ætti að bóka?", a: "Fyrir brúðkaup mælum við með 2–3 mánuðum, sérstaklega yfir sumartímann, svo við getum tryggt hugmyndina og blóm eða leigumuni." },
        { q: "Ferðist þið út fyrir höfuðborgarsvæðið?", a: "Já. Við skreytum brúðkaup um allt Ísland. Staðir fjær höfuðborgarsvæðinu geta borið lítið ferðagjald sem við staðfestum í tilboði." },
        { q: "Getið þið unnið með blómasala eða skipuleggjanda?", a: "Að sjálfsögðu. Við vinnum gjarnan með blómasala, skipuleggjanda eða starfsfólki staðarins svo allt falli saman." }
      ],
      finalTitle: "Mótum brúðkaupsskreytingarnar ykkar.",
      finalText: "Segðu okkur dagsetningu, stað og stemningu — við útbúum sérsniðið tilboð."
    }
  },
  bonord: {
    portfolioIndex: 1,
    meta: {
      title: "Bónorðsskreytingar á Íslandi | Proposal Decor | Dream Decor",
      description:
        "Bónorðs- og trúlofunarskreytingar um allt Ísland. Proposal and engagement styling across Iceland by Dream Decor Studio.",
      keywords: ["bónorðsskreytingar", "bónorð skreyting", "proposal decor Iceland", "engagement styling Iceland"]
    },
    en: {
      current: "Proposals",
      eyebrow: "Proposal decoration",
      title: "Proposal & engagement styling in Iceland.",
      lead: "A private, beautifully styled setting for the question, the answer, and the celebration that follows — designed around the moment you have in mind.",
      trust: "Intimate proposal setups across Iceland",
      introTitle: "Make the moment unforgettable.",
      introText:
        "Whether it's an intimate indoor corner or a dramatic Icelandic backdrop, we shape a setting that feels personal and photo-ready. We handle candles, florals, lighting, and the little details, and set everything up before you arrive.",
      includesTitle: "What a proposal setup can include",
      includes: [
        "Concept and location guidance",
        "Candles, florals, and lighting",
        "Photo-ready backdrop or corner",
        "Personal details and signage",
        "On-site setup before you arrive",
        "Discreet, on-time coordination"
      ],
      faqTitle: "Proposal decor questions",
      faq: [
        { q: "How much notice do you need?", a: "A week or two is usually enough for an intimate setup, but reach out as early as you can so we can secure the location and details." },
        { q: "Can you keep it a surprise?", a: "Absolutely. We coordinate discreetly and set everything up ahead of time so the moment stays a secret." },
        { q: "Do you decorate outdoor locations?", a: "Yes, weather permitting. We'll suggest settings that work for the season and keep a backup plan in mind." }
      ],
      finalTitle: "Let's plan your proposal.",
      finalText: "Tell us your idea and the moment you imagine — we'll shape a setting around it."
    },
    is: {
      current: "Bónorð",
      eyebrow: "Bónorðsskreytingar",
      title: "Bónorðs- og trúlofunarskreytingar á Íslandi.",
      lead: "Persónuleg og fallega hönnuð umgjörð fyrir stóru spurninguna, svarið og fögnuðinn sem fylgir — mótuð í kringum augnablikið sem þig dreymir um.",
      trust: "Persónulegar bónorðsuppsetningar um allt Ísland",
      introTitle: "Gerðu augnablikið ógleymanlegt.",
      introText:
        "Hvort sem það er notalegt horn innandyra eða stórbrotinn íslenskur bakgrunnur, hönnum við umgjörð sem er persónuleg og myndvæn. Við sjáum um kerti, blóm, lýsingu og smáatriðin og setjum allt upp áður en þið mætið.",
      includesTitle: "Hvað getur bónorðsuppsetning innihaldið",
      includes: [
        "Ráðgjöf um hugmynd og staðsetningu",
        "Kerti, blóm og lýsing",
        "Myndvænn bakgrunnur eða horn",
        "Persónuleg smáatriði og skilti",
        "Uppsetning áður en þið mætið",
        "Nærgætin og stundvís umsjón"
      ],
      faqTitle: "Spurningar um bónorðsskreytingar",
      faq: [
        { q: "Hversu mikinn fyrirvara þurfið þið?", a: "Ein til tvær vikur duga oftast fyrir minni uppsetningu, en hafðu samband sem fyrst svo við getum tryggt staðsetningu og smáatriði." },
        { q: "Getið þið haldið þessu leyndu?", a: "Að sjálfsögðu. Við vinnum nærgætið og setjum allt upp fyrirfram svo augnablikið haldist leyndarmál." },
        { q: "Skreytið þið útisvæði?", a: "Já, ef veður leyfir. Við stingum upp á stöðum sem henta árstíðinni og höfum varaáætlun." }
      ],
      finalTitle: "Skipuleggjum bónorðið ykkar.",
      finalText: "Segðu okkur hugmyndina og augnablikið sem þú sérð fyrir þér — við mótum umgjörð í kringum það."
    }
  },
  barnavidburdir: {
    portfolioIndex: 2,
    meta: {
      title: "Barnaskreytingar & kynjaveislur | Baby Event Decor | Dream Decor",
      description:
        "Skreytingar fyrir kynjaveislur, steypiboð og skírnir um allt Ísland. Gender reveal and baby event styling across Iceland.",
      keywords: ["kynjaveisla skreytingar", "steypiboð skreytingar", "barnaskreytingar", "baby shower decor Iceland", "gender reveal Iceland"]
    },
    en: {
      current: "Baby events",
      eyebrow: "Baby celebrations",
      title: "Gender reveals & baby event styling.",
      lead: "Playful, refined decor for gender reveals, baby showers, christenings, and first birthdays — warm settings the whole family will remember.",
      trust: "Warm baby-event styling across Iceland",
      introTitle: "Celebrate the little milestones in style.",
      introText:
        "From soft pastel themes to bold reveals, we design a look built around your family and venue — backdrops, dessert tables, balloons, and photo corners that feel considered rather than cookie-cutter. We set up and finish everything on-site.",
      includesTitle: "What a baby-event setup can include",
      includes: [
        "Themed backdrop or arch",
        "Dessert and treat table styling",
        "Balloon and floral accents",
        "Photo corner and props",
        "Personalised details and signage",
        "On-site setup and takedown"
      ],
      faqTitle: "Baby-event decor questions",
      faq: [
        { q: "Can you keep a gender reveal a surprise from us too?", a: "Yes — we can work with a trusted person or your clinic so the reveal is a surprise for everyone, including you." },
        { q: "Do you decorate at home or at a venue?", a: "Both. We style homes, halls, and restaurants across Iceland, adapting to the space you choose." },
        { q: "How far ahead should we book?", a: "A few weeks is usually enough, but earlier is better for weekends and busy seasons." }
      ],
      finalTitle: "Let's style your celebration.",
      finalText: "Tell us the occasion, theme, and date — we'll design it around your family."
    },
    is: {
      current: "Barnatilefni",
      eyebrow: "Barnaskreytingar",
      title: "Skreytingar fyrir kynjaveislur og barnatilefni.",
      lead: "Leikandi og fáguð hönnun fyrir kynjaveislur, steypiboð, skírnir og fyrstu afmælin — hlýleg umgjörð sem öll fjölskyldan man eftir.",
      trust: "Hlýlegar barnaskreytingar um allt Ísland",
      introTitle: "Fagnaðu litlu tímamótunum með stæl.",
      introText:
        "Frá mjúkum pastellitum til líflegra kynjaveislna hönnum við útlit sem er byggt í kringum fjölskylduna og staðinn — bakgrunna, veisluborð, blöðrur og myndahorn sem eru úthugsuð. Við setjum upp og göngum frá öllu á staðnum.",
      includesTitle: "Hvað getur barnauppsetning innihaldið",
      includes: [
        "Þemabakgrunnur eða bogi",
        "Skreyting veislu- og sælgætisborðs",
        "Blöðru- og blómaskreytingar",
        "Myndahorn og fylgihlutir",
        "Persónuleg smáatriði og skilti",
        "Uppsetning og niðurtaka á staðnum"
      ],
      faqTitle: "Spurningar um barnaskreytingar",
      faq: [
        { q: "Getið þið haldið kyninu leyndu fyrir okkur líka?", a: "Já — við getum unnið með traustri manneskju eða heilsugæslunni svo kynið sé óvænt fyrir alla, líka ykkur." },
        { q: "Skreytið þið heima eða á viðburðastað?", a: "Hvort tveggja. Við skreytum heimili, sali og veitingastaði um allt Ísland." },
        { q: "Hversu langt fram í tímann ætti að bóka?", a: "Nokkrar vikur duga oftast, en fyrr er betra fyrir helgar og annatíma." }
      ],
      finalTitle: "Skreytum tilefnið ykkar.",
      finalText: "Segðu okkur tilefnið, þemað og dagsetningu — við hönnum það í kringum fjölskylduna."
    }
  },
  fyrirtaekjavidburdir: {
    portfolioIndex: 3,
    meta: {
      title: "Fyrirtækjaviðburðir skreytingar | Corporate Event Decor | Dream Decor",
      description:
        "Skreytingar fyrir fyrirtækjaviðburði, kynningar og ráðstefnur um allt Ísland. Corporate event styling across Iceland.",
      keywords: ["fyrirtækjaviðburðir skreytingar", "corporate event decor Iceland", "fyrirtækjaskreytingar", "event styling Reykjavik"]
    },
    en: {
      current: "Corporate",
      eyebrow: "Corporate events",
      title: "Corporate event decoration in Iceland.",
      lead: "Polished, brand-aware styling for launches, conferences, dinners, and team celebrations — a professional setting that reflects your company.",
      trust: "Trusted by teams across Iceland",
      introTitle: "Decor that represents your brand.",
      introText:
        "We design corporate settings that look considered and on-brand, from colour direction to table styling and stage or entrance details. We work around your schedule and handle setup and takedown with minimal disruption to your event.",
      includesTitle: "What a corporate setup can include",
      includes: [
        "Brand-aware concept and colours",
        "Venue and table styling",
        "Stage, entrance, or booth details",
        "Florals and lighting accents",
        "Signage and welcome elements",
        "On-site setup and takedown"
      ],
      faqTitle: "Corporate decor questions",
      faq: [
        { q: "Can you match our brand colours and guidelines?", a: "Yes. Share your brand assets and we'll design the setting to align with your identity." },
        { q: "Do you invoice companies?", a: "Yes, we provide proper invoicing for businesses. We'll confirm the details in your quote." },
        { q: "Can you work outside business hours?", a: "Often, yes. We can set up before or after hours to fit around your event schedule." }
      ],
      finalTitle: "Let's plan your corporate event.",
      finalText: "Tell us the event, date, and any brand guidelines — we'll prepare a proposal."
    },
    is: {
      current: "Fyrirtæki",
      eyebrow: "Fyrirtækjaviðburðir",
      title: "Skreytingar fyrir fyrirtækjaviðburði á Íslandi.",
      lead: "Fáguð og vörumerkjavæn hönnun fyrir kynningar, ráðstefnur, kvöldverði og starfsmannagleði — fagleg umgjörð sem endurspeglar fyrirtækið.",
      trust: "Treyst af fyrirtækjum um allt Ísland",
      introTitle: "Skreytingar sem endurspegla vörumerkið.",
      introText:
        "Við hönnum umgjörð sem er fáguð og í takt við vörumerkið, frá litavali til borðskreytinga og sviðs- eða inngangsatriða. Við vinnum eftir tímaáætlun ykkar og sjáum um uppsetningu og niðurtöku með sem minnstu raski.",
      includesTitle: "Hvað getur fyrirtækjauppsetning innihaldið",
      includes: [
        "Hugmynd og litir í takt við vörumerki",
        "Skreyting staðar og borða",
        "Sviðs-, inngangs- eða bássatriði",
        "Blóma- og lýsingaráherslur",
        "Skilti og móttökuatriði",
        "Uppsetning og niðurtaka á staðnum"
      ],
      faqTitle: "Spurningar um fyrirtækjaskreytingar",
      faq: [
        { q: "Getið þið fylgt vörumerkjalitum og leiðbeiningum?", a: "Já. Sendu okkur vörumerkjaefnið og við hönnum umgjörðina í takt við ímyndina." },
        { q: "Gefið þið út reikninga á fyrirtæki?", a: "Já, við gefum út reikninga fyrir fyrirtæki. Við staðfestum smáatriðin í tilboði." },
        { q: "Getið þið unnið utan opnunartíma?", a: "Oft, já. Við getum sett upp fyrir eða eftir vinnutíma til að passa við dagskrána." }
      ],
      finalTitle: "Skipuleggjum fyrirtækjaviðburðinn.",
      finalText: "Segðu okkur viðburðinn, dagsetningu og vörumerkjaleiðbeiningar — við útbúum tilboð."
    }
  },
  arstidaskreytingar: {
    portfolioIndex: 4,
    meta: {
      title: "Árstíða- og hátíðarskreytingar | Seasonal Decor | Dream Decor",
      description:
        "Hátíðar- og árstíðaskreytingar fyrir heimili og fyrirtæki um allt Ísland. Seasonal and holiday styling across Iceland.",
      keywords: ["hátíðarskreytingar", "jólaskreytingar fyrirtæki", "árstíðaskreytingar", "seasonal decor Iceland", "holiday decoration Iceland"]
    },
    en: {
      current: "Seasonal",
      eyebrow: "Seasonal & holiday",
      title: "Seasonal & holiday decoration.",
      lead: "Festive installations for homes, restaurants, shops, and offices — seasonal styling designed for the Icelandic setting, from winter warmth to bright celebrations.",
      trust: "Seasonal styling across Iceland",
      introTitle: "Bring the season into your space.",
      introText:
        "We create seasonal and holiday installations that suit your space and audience — window displays, entrances, table settings, and full interiors. Great for businesses that want a fresh look each season, with setup and later removal handled for you.",
      includesTitle: "What a seasonal setup can include",
      includes: [
        "Seasonal concept and colours",
        "Window and entrance displays",
        "Table and interior styling",
        "Lighting, greenery, and props",
        "Refresh or rotation options",
        "Setup and later removal"
      ],
      faqTitle: "Seasonal decor questions",
      faq: [
        { q: "Do you decorate businesses as well as homes?", a: "Yes — shops, restaurants, salons, and offices are a big part of our seasonal work, alongside private homes." },
        { q: "Can you remove and store the decor afterwards?", a: "Yes, we can handle takedown and discuss storage or reuse for next season." },
        { q: "How early should we book for the holidays?", a: "The winter season books up fast — reach out well ahead, ideally by early autumn." }
      ],
      finalTitle: "Let's style your season.",
      finalText: "Tell us your space and the season you're planning for — we'll design it."
    },
    is: {
      current: "Árstíðabundið",
      eyebrow: "Árstíða- og hátíðarskreytingar",
      title: "Árstíða- og hátíðarskreytingar.",
      lead: "Hátíðlegar uppsetningar fyrir heimili, veitingastaði, verslanir og skrifstofur — árstíðabundin hönnun fyrir íslenskar aðstæður, frá vetrarhlýju til bjartra hátíða.",
      trust: "Árstíðaskreytingar um allt Ísland",
      introTitle: "Færðu árstíðina inn í rýmið.",
      introText:
        "Við búum til árstíða- og hátíðaruppsetningar sem henta rýminu og gestunum — gluggaútstillingar, innganga, borðuppsetningar og heil rými. Frábært fyrir fyrirtæki sem vilja ferskt útlit hverja árstíð, með uppsetningu og niðurtöku í okkar höndum.",
      includesTitle: "Hvað getur árstíðauppsetning innihaldið",
      includes: [
        "Árstíðabundin hugmynd og litir",
        "Glugga- og inngangsútstillingar",
        "Borð- og innirýmisskreytingar",
        "Lýsing, grænt og fylgihlutir",
        "Endurnýjun eða skipti",
        "Uppsetning og niðurtaka síðar"
      ],
      faqTitle: "Spurningar um árstíðaskreytingar",
      faq: [
        { q: "Skreytið þið fyrirtæki jafnt sem heimili?", a: "Já — verslanir, veitingastaðir, stofur og skrifstofur eru stór hluti af árstíðavinnunni, ásamt heimilum." },
        { q: "Getið þið fjarlægt og geymt skreytingarnar eftir á?", a: "Já, við sjáum um niðurtöku og ræðum geymslu eða endurnýtingu fyrir næstu árstíð." },
        { q: "Hversu snemma ætti að bóka fyrir hátíðirnar?", a: "Vetrartíminn fyllist hratt — hafðu samband tímanlega, helst snemma hausts." }
      ],
      finalTitle: "Skreytum árstíðina þína.",
      finalText: "Segðu okkur rýmið og árstíðina sem þú ert að skipuleggja — við hönnum það."
    }
  },
  serividburdir: {
    portfolioIndex: 5,
    meta: {
      title: "Einka- og sérviðburðir | Private Event Decor | Dream Decor",
      description:
        "Sérsniðnar skreytingar fyrir afmæli, árshátíðir og þemaveislur um allt Ísland. Bespoke private event styling across Iceland.",
      keywords: ["einkaviðburðir skreytingar", "afmælisskreytingar", "þemaveisla skreytingar", "private event decor Iceland", "birthday decor Iceland"]
    },
    en: {
      current: "Private events",
      eyebrow: "Private & custom",
      title: "Private & custom event decoration.",
      lead: "Birthdays, anniversaries, themed parties, and one-of-a-kind celebrations — bespoke styling for the events that don't fit a standard category.",
      trust: "Bespoke celebrations across Iceland",
      introTitle: "Your event, your way.",
      introText:
        "Have something specific in mind? We love custom briefs. Tell us the occasion, theme, and mood, and we'll design a setting that fits — from an elegant milestone birthday to a fully themed party, with setup and finishing handled on-site.",
      includesTitle: "What a custom setup can include",
      includes: [
        "Custom concept and moodboard",
        "Themed styling and props",
        "Table, backdrop, and focal details",
        "Florals, candles, and lighting",
        "Flexible scope to fit your budget",
        "On-site setup and finishing"
      ],
      faqTitle: "Custom event questions",
      faq: [
        { q: "What kinds of events do you take on?", a: "Almost anything — milestone birthdays, anniversaries, themed parties, and unusual briefs are all welcome." },
        { q: "Can you work to a specific theme?", a: "Yes. Bring us a theme, colour, or inspiration and we'll build a cohesive look around it." },
        { q: "Can you match a set budget?", a: "We shape the scope around your budget and are upfront about what's possible." }
      ],
      finalTitle: "Let's create something unique.",
      finalText: "Tell us your idea, theme, and date — we'll shape a custom proposal."
    },
    is: {
      current: "Einkaviðburðir",
      eyebrow: "Einka- og sérviðburðir",
      title: "Einka- og sérviðburðaskreytingar.",
      lead: "Afmæli, árshátíðir, þemaveislur og einstök tilefni — sérsniðin hönnun fyrir viðburði sem falla utan hefðbundinna flokka.",
      trust: "Sérsniðnar veislur um allt Ísland",
      introTitle: "Þinn viðburður, á þínum forsendum.",
      introText:
        "Ertu með eitthvað ákveðið í huga? Við elskum sérverkefni. Segðu okkur tilefnið, þemað og stemninguna og við hönnum umgjörð sem passar — frá glæsilegu stórafmæli til þemaveislu, með uppsetningu og frágangi á staðnum.",
      includesTitle: "Hvað getur séruppsetning innihaldið",
      includes: [
        "Sérsniðin hugmynd og hugmyndatafla",
        "Þemahönnun og fylgihlutir",
        "Borð-, bakgrunns- og fókusatriði",
        "Blóm, kerti og lýsing",
        "Sveigjanlegt umfang eftir fjárhag",
        "Uppsetning og frágangur á staðnum"
      ],
      faqTitle: "Spurningar um sérviðburði",
      faq: [
        { q: "Hvers konar viðburði takið þið að ykkur?", a: "Nánast allt — stórafmæli, árshátíðir, þemaveislur og óvenjuleg verkefni eru öll velkomin." },
        { q: "Getið þið unnið eftir ákveðnu þema?", a: "Já. Komdu með þema, lit eða innblástur og við byggjum heildstætt útlit í kringum það." },
        { q: "Getið þið unnið eftir ákveðnum fjárhag?", a: "Við mótum umfangið eftir fjárhagnum og erum hreinskilin um hvað er mögulegt." }
      ],
      finalTitle: "Sköpum eitthvað einstakt.",
      finalText: "Segðu okkur hugmyndina, þemað og dagsetningu — við útbúum sérsniðið tilboð."
    }
  }
} as const;

export type ServiceSlug = keyof typeof services;

export const serviceSlugs = Object.keys(services) as ServiceSlug[];

export function heroImageFor(slug: ServiceSlug): string {
  return siteContent.portfolio[services[slug].portfolioIndex].images[0];
}
