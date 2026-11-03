/* ============================================================
   KOBI COHEN'S BARBERSHOP — site config
   All business data lives here. Fields marked  // TODO / placeholder
   were NOT found on the business's public pages and must be confirmed
   with the business before publishing.
   Sources: mytor.co.il/p/vkyDS (+ /express/, /team/, reviews API),
            instagram.com/kobicohensbarbershop, public Google-listing aggregators.
   ============================================================ */
window.SITE = {
  name: "KOBI COHEN'S",
  fullName: "KOBI COHEN'S BARBERSHOP",
  tagline: "Old School אמיתי, בגרסה של היום.",
  about: "מספרה בסגנון Old School – אמיתית. מקום שכל אחד מרגיש בו בבית, וכולם פה משפחה. ועל הדרך עושים את מה שאנחנו הכי טובים בו: שולחים אתכם החוצה במיטבכם. יש הרבה מספרות, אבל KOBI COHEN'S BARBERSHOP יש רק אחת.",
  // original mytor text (verbatim): "מספרה בסגנון old school,אמיתית. כזאת שכל אחד מרגיש בה בבית וכולם פה משפחה. ו...על הדרך עושים את מה שאנחנו הכי טובים בו,מוציאים אתכם טיללללל שהוא זמר... אז דבר אחרון מלך, יש הרבה מספרות,אבל kobi cohens barbershop יש רק אחת."

  // Phone: NOT shown on mytor (tel: link is empty). Number below appears on the public
  // Google listing (via exa.ai + zips.co.il). TODO: confirm with Kobi + confirm it has WhatsApp.
  phone: "050-408-4655",
  whatsapp: "972504084655",         // international format, no "+"; used for cart checkout
  email: "hila.swc@gmail.com",      // from mytor contact icon (Cloudflare-protected mailto). TODO: confirm it is the business email
  instagram: "https://instagram.com/kobicohensbarbershop",
  instagramHandle: "@kobicohensbarbershop",

  address: "מתחם אשכנזי, חנות מס׳ 7",
  street: "אשכנזי 17",              // from public Google listing
  city: "יהוד-מונוסון",
  postalCode: "5647003",
  geo: { lat: 32.029306, lng: 34.890721 },
  wazeUrl: "https://waze.com/ul?ll=32.029306,34.890721&navigate=yes",
  mapsQuery: "Kobi Cohen's Barber Shop, אשכנזי 17, יהוד-מונוסון",

  // Booking stays on the business's existing mytor system
  bookingUrl: "https://mytor.co.il/p/vkyDS/",
  expressUrl: "https://mytor.co.il/p/vkyDS/express/",

  // Hours exactly as on mytor (day 0 = Sunday)
  hours: [
    { day: "ראשון", open: "09:30", close: "18:45" },
    { day: "שני",   closed: true },
    { day: "שלישי", open: "09:30", close: "18:45" },
    { day: "רביעי", open: "09:30", close: "21:15" },
    { day: "חמישי", open: "09:30", close: "21:15" },
    { day: "שישי",  open: "09:00", close: "14:00" },
    { day: "שבת",   closed: true }
  ],

  team: [
    { name: "קובי כהן", role: "Owner & Barber", img: "assets/img/kobi.jpg" },
    { name: "אורן בגייב", role: "Barber", img: "assets/img/oren.jpg" }
  ],

  // Services + prices exactly as on mytor /express/. Durations are NOT published -> null (TODO).
  // mytor lists both "תספורת גבר+סידור זקן" and "תספורת גבר וסידור זקן" (both ₪70) — shown once here.
  services: [
    { cat: "תספורות", name: "תספורת גבר", price: 70, duration: null, popular: true },
    { cat: "תספורות", name: "תספורת ילד", price: 70, duration: null },
    { cat: "זקן", name: "סידור זקן", price: 50, duration: null },
    { cat: "זקן", name: "תספורת גבר + סידור זקן", price: 70, duration: null, popular: true, note: "Best Value" },
    { cat: "צבע", name: "גווני שמש ללא כובע", price: 70, duration: null },
    { cat: "צבע", name: "גוונים עם כובע", price: 150, duration: null },
    { cat: "צבע", name: "גוונים צבעוניים", price: 220, duration: null },
    { cat: "צבע", name: "חמצון וצבע צבעוני ראש מלא", price: 300, duration: null }
  ],

  // ---------------- SHOP ----------------
  // Empty = the shop shows an elegant "COMING SOON" state and the cart icon is hidden.
  // To open the shop, add items, e.g.:
  //   { id: "aftershave-1", name: "After Shave", desc: "שם מותג · 100ml", price: /* ₪ */ 0, img: "assets/img/products/aftershave.jpg" }
  // id: unique, price: number in ₪ (or null = "מחיר בתיאום"), img: optional (falls back to an icon: bottle|cream|jar|drop).
  products: [],
  fulfilment: "איסוף עצמי מהמספרה (מתחם אשכנזי, יהוד)",   // TODO: confirm; add delivery option/price if offered

  // Online payment — NOT CONNECTED. Put a Grow/Meshulam/PayPal/Bit payment-page link here
  // and set enabled:true to show a "pay online" button in the cart.
  payment: { enabled: false, provider: "", url: "" },

  // Real reviews from mytor (9 reviews, all 5★, average 5.00). One review had no text and is omitted.
  rating: { value: 5.0, count: 9, source: "mytor" },
  reviews: [
    { name: "מישל קוגן", when: "לפני שבוע", text: "צוות של אלופים כיף לבוא לשתות אספרסו להביא רבולי מהשכן ולהתחיל להסתפר" },
    { name: "עידו שבתאי", when: "לפני 4 חודשים", text: "מספרה מס 1 בארץ וספרים מס 1 בארץ. אהובים, מזמינים ומקצוענים ❤️" },
    { name: "צוף בועז", when: "לפני 4 חודשים", text: "אחרי יותר מ 15 שנים איתך, אתה בהחלט ספר מספר אחד!" },
    { name: "אלכס", when: "לפני 5 חודשים", text: "קובי ואורן אנשים מקצועיים ונחמדים ביותר. אני ובן שלי כבר הפכנו להיות חברים במספרה, אנשים חמים ונחמדים. אני קונה אצלם גם אפטר-שייבים מצויינים וקרמים לגילוח וטיפול בשער" },
    { name: "אורן ניוסטד", when: "לפני 5 חודשים", text: "שני ספרים מטורפים, קובי בן אדם כזה גבר, סבלני, מחייך כל הזמן שירות מטורף. מומלץ בחום!!" },
    { name: "איתמר", when: "לפני 5 חודשים", text: "מסתפר אצלך קובי מכיתה ח!!! תמיד עם סבלנות וחיוך. אין על קובי!!!" },
    { name: "נאור ממון", when: "לפני 6 חודשים", text: "אין על קובי ועל הסבלנות שלו! מספר 1" },
    { name: "גל מירון", when: "לפני 6 חודשים", text: "הספרים הכי טובים מאנשים הכי מדהימים שיש 10 מ-10 בהכל" }
  ],

  // Gallery: no work photos are published on mytor. Add Instagram photos here (TODO).
  gallery: [],

  siteUrl: "https://xbycomm.github.io/kobi-cohens/",   // planned GitHub Pages project URL (not published yet)
  credit: { text: "XBYcomm", url: "https://xbycomm.github.io/" }
};
