# Kobi Cohen's Barbershop — מסמך אתר (SITE.md)

מסמך המשכיות עיצובית ופיתוחית. לעדכן את ה-Changelog בכל שינוי.

## העסק
- **שם:** Kobi Cohen's Barbershop ("KOBI COHEN'S"), מספרת גברים בסגנון Old School.
- **בעלים:** קובי כהן. **ספר נוסף:** אורן בגייב.
- **כתובת:** מתחם אשכנזי, חנות מס׳ 7, אשכנזי 17, יהוד-מונוסון.
- **תורים:** מערכת mytor הקיימת: https://mytor.co.il/p/vkyDS/ (תור אקספרס: `/express/`). האתר לא מחליף את המערכת, הוא מפנה אליה.
- **מקורות התוכן:** דף ה-mytor (טקסט "קצת עלינו", שעות, מחירון, 9 ביקורות, תמונות הצוות), אינסטגרם `@kobicohensbarbershop`, ומספר הטלפון מכרטיס גוגל הציבורי.

## קהל יעד
גברים מהאזור (יהוד, סביון, אור יהודה, קריית אונו), אבות וילדים (תספורת ילד), לקוחות קבועים ותיקים ("מסתפר אצלך מכיתה ח", "15 שנים איתך"). רובם מגיעים מהנייד, ולכן קביעת תור בלחיצה אחת היא הפעולה המרכזית.

## טון דיבור (v2, 2026-11-03)
**אלגנטי, צעיר ומסוגנן**, ועדיין חם. משפטים קצרים ובטוחים, מלוטשים, עם הרבה אוויר. בלי סלנג ילדותי ובלי מתיחות אותיות ("טיללללל"). החום וה"משפחה" נשארים, בניסוח בוגר.
- **מיתוג באנגלית כמו של העסק:** השם תמיד **KOBI COHEN'S BARBERSHOP** באותיות גדולות (ב-mytor המותג כתוב "KOBI COHEN'S", ובטקסט שלו ובאינסטגרם "kobi cohens barbershop" / kobicohensbarbershop). ה-lockup בנוי משתי שורות: `KOBI COHEN'S` בסריף, ומתחתיו `BARBERSHOP` ב-Montserrat עם ריווח אותיות רחב.
- **שילוב אנגלית מבוקר:** kickers באנגלית מעל כל כותרת עברית (The Menu, The Grooming Shop, About, Reviews, Visit Us, FAQ, Fresh Cuts), וביטויים כמו Old School, Grooming, Fresh Cut, Best Value. הכותרות הראשיות, ההסברים וה-CTA בעברית.
- **CTA בשם פעולה:** "קביעת תור", "התור הפנוי הקרוב", "חיוג". לא בציווי ("קבעו!").
- **שורות מפתח:**
  - כותרת ראשית: "יש הרבה מספרות. / יש רק אחת כזאת."
  - משנה: "Old School אמיתי, בגרסה של היום. דיוק בכל פרט, יחס של בית – ויוצאים מוכנים לבמה."
- **"אודות":** ניסוח מלוטש של הטקסט המקורי מ-mytor. המקור המילולי שמור כהערה ב-config.js.
- **עובדות:** מחירים, שעות, כתובת וביקורות (מילה במילה) לא משתנים, ולא ממציאים טענות.
- **הערה טיפוגרפית:** ריווח אותיות רחב רק לאנגלית. עברית תמיד בלי letter-spacing (ראו `.eyebrow .he`).

## סגנון ויזואלי
- **מצב רוח:** ברברשופ וינטג׳: עץ כהה, פליז, עמוד ספרים אדום-לבן-כחול, נייר שמנת.
- **פלטה:**
  | תפקיד | משתנה | Hex |
  |---|---|---|
  | רקע כהה (הירו/פוטר) | `--ink` | `#14110F` |
  | כהה משני | `--ink-2` / `--ink-3` | `#1E1A17` / `#2A2420` |
  | שמנת (סקשנים בהירים) | `--cream` | `#F4ECDF` |
  | רקע עמוד | `--paper` | `#FBF7F0` |
  | קווים | `--line` | `#E3D7C3` |
  | זהב/פליז (CTA) | `--gold` / `--gold-2` | `#C9A25A` / `#E2C48A` |
  | אדום ברבר (kicker, תגיות) | `--red` | `#B3282D` |
  | כחול ברבר (עמוד) | `--navy` | `#1F3A5F` |
  | טקסט | `--txt` / `--muted` | `#231E1A` / `#6F655B` |
  | וואטסאפ | `--wa` | `#25D366` |
- **פונטים (Google Fonts):**
  - כותרות: `Frank Ruhl Libre` במשקלים 500/700/900.
  - גוף: `Heebo` במשקלים 300–800 (ה-lead ב-300).
  - אנגלית באותיות גדולות (kickers, lockup, תגיות, תפקידי צוות): `Montserrat` במשקלים 500–700, עם letter-spacing של 0.12–0.58em. משתנה: `--caps`.
- **רדיוסים:** `--r: 14px` לכרטיסים ושדות, `--r-lg: 22px` לכרטיסים גדולים ותמונות, `999px` לכפתורים ולתגיות (pill).
- **ריווח:** סקשן 80px אנכי בדסקטופ ו-56px במובייל. רוחב תוכן מקסימלי 1160px (`.wrap`), ו-760px ל-FAQ.
- **צללים:** `--sh: 0 10px 30px rgba(20,17,15,.12)`.
- **אלמנטים חוזרים:** lockup של KOBI COHEN'S / BARBERSHOP (בהדר ובפוטר), עמוד ספרים מונפש (`.pole`), כפתור זהב בגרדיאנט, kicker אדום באנגלית עם ריווח רחב מעל כל כותרת, ותמונות עם מסגרת זהב ופילטר sepia קל.

## מבנה העמוד (index.html)
1. **Header דביק:** לוגו (תמונת פרופיל מאינסטגרם), ניווט, כפתור סל עם מונה, וכפתור "קבעו תור".
2. **Hero:** שורת "KOBI COHEN'S BARBERSHOP · יהוד", כותרת "יש הרבה מספרות. יש רק אחת כזאת.", שני CTA ("קביעת תור" ו"התור הפנוי הקרוב"), תגיות אמון (דירוג 5.0, מחיר מ-₪70, פתוח/סגור עכשיו בזמן אמת), ותמונת קובי.
3. **מחירון (#services):** טאבים לפי קטגוריה (הכל/תספורות/זקן/צבע), וכל שורה עם מחיר וקישור "לתור".
4. **חנות (#shop):** כרטיסי מוצר, "הוספה לסל", ובאנר "מצב הדגמה" כל עוד `shopIsPlaceholder: true`.
5. **אודות + צוות (#about, #team).**
6. **ביקורות (#reviews):** קרוסלה אופקית עם scroll-snap. מציגים רק ביקורות אמיתיות מ-mytor.
7. **גלריה (#gallery):** מוסתרת כל עוד `gallery` ריק.
8. **כרטיס אינסטגרם.**
9. **הגעה (#visit):** כתובת, Waze, חיוג, טבלת שעות שמדגישה את היום הנוכחי, ומפת גוגל.
10. **FAQ (#faq):** `<details>`, רק עובדות מהעסק.
11. **CTA סופי** ו-**פוטר** עם קרדיט "עיצוב ובניית האתר: XBYcomm".
12. **צפים:** כפתור וואטסאפ, ובמובייל (עד 820px) סרגל תחתון דביק: חיוג / קביעת תור / סל.

## קבצים
- `index.html`: מבנה, SEO, OG ו-JSON-LD (`BarberShop`).
- `assets/config.js`: **כל** נתוני העסק. משנים כאן ולא ב-HTML.
- `assets/app.js`: רינדור מהקונפיג, סל, סטטוס פתוח/סגור.
- `assets/style.css`: עיצוב, mobile-first ברייקפוינטים 980/820/480.
- `assets/img/`: kobi.jpg, oren.jpg (מ-mytor), ig-profile.jpg (אינסטגרם, 150px), og.jpg (1200×630).
- `robots.txt`, `sitemap.xml`, `.nojekyll`: מוכנים ל-GitHub Pages.
- כל הנתיבים יחסיים. אין build, והאתר עובד כמו שהוא גם תחת תת-נתיב `/kobi-cohens/`.

## שדות config (`window.SITE`)
`name, fullName, tagline, about, phone, whatsapp, email, instagram, instagramHandle, address, street, city, postalCode, geo{lat,lng}, wazeUrl, mapsQuery, bookingUrl, expressUrl, hours[{day,open,close|closed}] (אינדקס 0 = ראשון), team[{name,role,img}], services[{cat,name,price,duration,popular,note}], shopIsPlaceholder, products[{id,name,desc,price|null,img|null,icon,placeholder}], fulfilment, payment{enabled,provider,url}, rating{value,count,source}, reviews[{name,when,text}], gallery[{src,alt}], siteUrl, credit{text,url}`

## חנות וסל
**מצב נוכחי:** `products: []`, החנות עדיין לא פתוחה.
- **כשהרשימה ריקה:**
  - המחלקה #shop נשארת, ובמקום הכרטיסים מוצג מצב **"THE GROOMING SHOP · COMING SOON"**, עם שורה בעברית שהמוצרים בדרך וכפתור "לשאול בוואטסאפ".
  - ל-`<html>` מתווסף class `no-shop`, שמסתיר את אייקון הסל בהדר ואת כפתור הסל בסרגל המובייל.
  - הסרגל עובר לשתי עמודות: חיוג / קביעת תור.
  - הבדיקה רצה בסקריפט inline ב-head, לפני הציור הראשון, כדי שלא תהיה קפיצת layout.
- **איך פותחים את החנות:** מוסיפים פריטים ל-`products` ב-`assets/config.js`, וזה הכל. הסל, המונה וה-checkout חוזרים אוטומטית.
  ```js
  products: [
    { id: "aftershave-1", name: "After Shave", desc: "מותג · 100ml", price: 0 /* ₪ */, img: "assets/img/products/aftershave.jpg" },
    { id: "beard-oil-1",  name: "Beard Oil",   desc: "מותג · 30ml",  price: 0 /* ₪ */, icon: "drop" }
  ]
  ```
  - `id` חייב להיות ייחודי, כי הוא המפתח בסל.
  - `price` הוא מספר בש״ח, או `null` להצגת "מחיר בתיאום".
  - `img` אופציונלי. בלעדיו מוצג אייקון: `bottle` / `cream` / `jar` / `drop`.
  - תמונות שמים בתיקייה `assets/img/products/`, ביחס 1:1, ברוחב 600px ומעלה.
- **הסל:**
  - נשמר ב-`localStorage` במפתח `kc_cart_v1` (מבנה `{id: qty}`). פריט שנמחק מהקונפיג נמחק גם מהסל.
  - אפשר להוסיף, להגדיל או להקטין כמות ולהסיר, ויש toast אישור.
  - `price:null` לא נכנס לסכום ומסומן בכוכבית.
- **Checkout:** פותח `wa.me/<whatsapp>` עם הודעה מוכנה: פריטים × כמות, סה״כ, אופן איסוף, שם והערה.
- **תשלום אונליין:** לא מחובר. מחברים כך: `payment:{enabled:true, provider:"Grow", url:"<קישור לדף תשלום>"}`.
- המגירה נסגרת ב-Esc או בלחיצה על הרקע, והפוקוס חוזר לכפתור שפתח אותה.

## אנימציות (v3)
הכל ב-CSS וב-vanilla JS (IntersectionObserver, requestAnimationFrame), בלי ספריות. מנפישים רק `transform`, `translate`, `opacity` ו-`clip-path`.

| אנימציה | איפה | מימוש |
|---|---|---|
| פס התקדמות גלילה (אדום, זהב, כחול) | ראש העמוד | `#progress` עם scaleX, ב-rAF |
| הדר מתכהה עם צל בגלילה | `.top.scrolled` | class toggle |
| חשיפת כותרת מילה-מילה (stagger) | `h1.split` | JS מפצל ל-`.w>span` עם `--i`, ו-translateY מתוך מסכה |
| כניסה מדורגת של eyebrow, lead, CTA ותגיות | `.rv-hero` עם `--d` | class `loaded` על `<html>` |
| חשיפת התמונה בווילון, ואז Ken Burns איטי (22s) | `.hero-pic .kb` | clip-path ו-keyframes `kenburns` |
| Parallax עדין לתמונה (דסקטופ בלבד, מעל 820px) | `.hero-pic` | translate3d, ב-rAF |
| Shimmer זהב על BARBERSHOP / COMING SOON | `.lockup small`, `.eyebrow b`, `.shimmer` | background-clip:text |
| עמוד ספרים מסתובב | `.pole` | background-position |
| פס ברבר מונפש בתחתית ההירו | `.pole-bar` | background-position |
| Marquee: FADES · BEARDS · COLOR · OLD SCHOOL · KIDS CUTS · GROOMING | `.marquee` | translateX(-50%) על תוכן כפול, נעצר ב-hover |
| Scroll-reveal מדורג לכותרות, שורות שירות, ביקורות, צוות, FAQ ועוד | `[data-rv]` עם `--rd` | IntersectionObserver, חד-פעמי |
| Count-up לדירוג (0 עד 5.0) ולמספר הביקורות (0 עד 9) | `[data-count]` | rAF עם ease-out |
| כפתורים "מגנטיים" | `.btn`, `.cart-btn`, `.fab-wa` | pointermove, רק במסך עם עכבר |
| ברק אור שעובר על כפתור זהב | `.btn-gold::after` | hover |
| הרמה ב-hover לשורות שירות, ביקורות, USP, צוות ואינסטגרם | | transform |
| קרוסלת ביקורות: חצים, autoplay כל 4.5 שניות | `#revTrack` | נעצרת באינטראקציה, ב-hover או מחוץ למסך |
| נקודת "פתוח עכשיו" פועמת וטבעת סביב כפתור הוואטסאפ | `.dot`, `.fab-wa::before` | keyframes |
| אייקון צף ב-Coming Soon | `.soon-ring` | float |

- **Reduced motion:** תחת `prefers-reduced-motion`, ל-`<html>` מתווסף class `rm`. כל האנימציות והמעברים כבויים, התוכן גלוי מיד, ואין autoplay ולא count-up.
- **בלי JS (`no-js`):** שום דבר לא מוסתר.
- **מניעת גלילה אופקית:** `overflow-x:clip` על `html` ו-`body`, וה-marquee בתוך `overflow:hidden`.
- **ביצועים:** CLS שנמדד: 0.001 בדסקטופ.

## נגישות ו-SEO
`lang=he dir=rtl`, קישור "דלג לתוכן", `aria-label` לכפתורי אייקון, `:focus-visible` בזהב, `prefers-reduced-motion`, ניגודיות גבוהה. Meta description, OG ו-Twitter card, JSON-LD מסוג BarberShop עם שעות, דירוג ו-ReserveAction.

## Placeholders פתוחים (לפני פרסום)
- [ ] **מוצרים:** הרשימה ריקה בכוונה (Coming Soon). כשיגיעו שמות, מחירים ותמונות מוסיפים ל-`products`.
- [ ] **טלפון/וואטסאפ 050-408-4655:** לקוח מכרטיס גוגל, כי ב-mytor שדה הטלפון ריק. לאשר עם קובי שזה המספר ושיש בו וואטסאפ.
- [ ] **אימייל hila.swc@gmail.com:** מופיע באייקון המייל ב-mytor. לאשר לפני שמציגים אותו (כרגע לא מוצג באתר).
- [ ] **משכי טיפולים:** לא פורסמו (`duration: null`).
- [ ] **גלריית עבודות:** אין תמונות. להוסיף מאינסטגרם, באישור.
- [ ] **תמונת לוגו באיכות גבוהה:** יש רק 150px מאינסטגרם.
- [ ] **אופן מסירה:** איסוף עצמי בלבד. לאשר, ולהוסיף משלוח אם יש.
- [ ] **ספק תשלום:** Grow, Meshulam, PayPal או Bit.
- [x] **URL מתוכנן:** https://xbycomm.github.io/kobi-cohens/ (ריפו פרויקט `xbycomm/kobi-cohens`). canonical, og:url, og:image מוחלט, JSON-LD url, robots.txt, sitemap.xml ו-.nojekyll כבר מוכנים. **עדיין לא פורסם.**
- [ ] ב-mytor מופיעים "תספורת גבר+סידור זקן" ו"תספורת גבר וסידור זקן" (שניהם ₪70). באתר הם מוצגים פעם אחת. לבדוק עם קובי.

## Changelog
- **2026-11-03:** גרסה ראשונה (XBYcomm). נבנו הירו, מחירון עם טאבים, חנות עם סל ו-checkout בוואטסאפ, אודות וצוות, ביקורות, אינסטגרם, הגעה עם שעות ומפה, FAQ, סרגל מובייל דביק, וכפתור וואטסאפ צף. כל התוכן נשלף מ-mytor/vkyDS. לא פורסם.
- **2026-11-03 (v2, לפי פידבק של בני):**
  - כל הטקסטים נכתבו מחדש בטון אלגנטי, צעיר ומסוגנן, כולל meta ו-OG, ה-FAQ וה-CTA הסופי "מוכנים ל-Fresh Cut?".
  - נוסף מיתוג BARBERSHOP באנגלית: lockup בהדר ובפוטר, שורה מעל הכותרת הראשית, ב-title, ב-JSON-LD ובזכויות היוצרים.
  - kickers באנגלית, ופונט Montserrat ל-caps עם ריווח רחב.
  - שמות מוצרי הדוגמה באנגלית, תגית Best Value, ותפקידי צוות באנגלית (Owner & Barber / Barber).
  - אימוג׳ים הוסרו מהכפתורים ומהודעות הוואטסאפ.
  - גיבוי של הגרסה הקודמת: `/workspace/backups-kobi-cohens-<HHMM>`.
- **2026-11-03 (v3):**
  - 4 מוצרי הדוגמה הוסרו. החנות מציגה מצב "THE GROOMING SHOP · COMING SOON", והסל מוסתר אוטומטית כל עוד `products` ריק.
  - נוספה חבילת אנימציות (פירוט במחלקה "אנימציות").
  - הכנה ל-GitHub Pages תחת https://xbycomm.github.io/kobi-cohens/ (canonical, og:url, robots, sitemap, .nojekyll).
  - config.js נטען ב-head.
  - גיבוי: `/workspace/backups-kobi-cohens-v2-1659`.
