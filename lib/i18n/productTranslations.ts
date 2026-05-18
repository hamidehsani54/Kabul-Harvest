import type { Locale } from "./types";

export type ProductTranslation = {
  name: string;
  subtitle: string;
  benefits: string[];
  ingredients: string[];
};

type ProductTranslationMap = Record<string, ProductTranslation>;

const svProducts: ProductTranslationMap = {
  "afghan-almonds-badam": {
    name: "Afghanska mandlar",
    subtitle: "Badam — hela, naturligt torkade, rika och smöriga",
    benefits: ["Högt protein & vitamin E", "Perfekt som mellanmål & bakning", "Återförslutbar förpackning"],
    ingredients: ["Premium mandlar", "Från Afghanistan-regionen", "Ingen tillsatt olja"],
  },
  "pistachios-pista": {
    name: "Pistagenötter",
    subtitle: "Pista — jumbokärnor, naturligt öppnade",
    benefits: ["Krispig textur", "Naturligt livfull färg", "Perfekt som gåva"],
    ingredients: ["Rostade pistagenötter", "Lätt saltad variant finns"],
  },
  "walnuts-charmaghz": {
    name: "Valnötter",
    subtitle: "Charmaghz — halvor & bitar, omega-rika",
    benefits: ["Hjärnvänliga fetter", "Redo för bakning & frukost", "Sorterade för kvalitet"],
    ingredients: ["Skalade valnötter", "Förvaras svalt"],
  },
  "raisins-kishmish": {
    name: "Russin",
    subtitle: "Kishmish — söta, saftiga torkade druvor",
    benefits: ["Naturlig sötma", "Fiber & energi", "Perfekt till desserter"],
    ingredients: ["Soltorkade druvor", "Inga konstgjorda färger"],
  },
  "apricots-ashtaq": {
    name: "Aprikoser (Ashtaq)",
    subtitle: "Ashtaq — fasta, syrligt-söta torkade aprikoser",
    benefits: ["Rik på betakaroten", "Bra i trail mix", "Traditionell soltorkning"],
    ingredients: ["Hela torkade aprikoser", "Sulfutfritt alternativ på förpackningen"],
  },
  "apricots-kishta": {
    name: "Aprikoser (Kishta)",
    subtitle: "Kishta — mjuka, honungssöta aprikoshalvor",
    benefits: ["Naturligt söta", "Mellanmål eller bakning", "Handsorterade"],
    ingredients: ["Torkade aprikoshalvor", "Inget tillsatt socker"],
  },
  "figs-anjeer": {
    name: "Fikon",
    subtitle: "Anjeer — stora, honungssöta hela fikon",
    benefits: ["Fiberrika", "Naturligt söta", "Passar som gåva"],
    ingredients: ["Hela torkade fikon", "Handsorterade"],
  },
  anardana: {
    name: "Granatäpplekärnor",
    subtitle: "Anardana — syrliga torkade kärnor för matlagning",
    benefits: ["Ger syra till chutney & sallader", "Traditionell krydda", "Aromatiska"],
    ingredients: ["Torkade granatäpplekärnor", "Förvaras lufttätt"],
  },
  "white-mulberry-shahtoot": {
    name: "Vitt mullbär",
    subtitle: "Shahtoot — sega, naturligt söta bär",
    benefits: ["Unik smak", "Järn & antioxidanter", "Mellanmål eller flingor"],
    ingredients: ["Vita mullbär", "Inget tillsatt socker"],
  },
  "pine-nuts-jalghoza": {
    name: "Pinjenötter",
    subtitle: "Jalghoza — delikata, smöriga kärnor",
    benefits: ["Premiumgarnering till ris & sallader", "Rika & krämiga", "Använd sparsamt"],
    ingredients: ["Råa pinjenötter", "Kyl efter öppning"],
  },
  "dates-khorma": {
    name: "Torkade dadlar",
    subtitle: "Khorma — mjuka, karamellsöta hela dadlar",
    benefits: ["Naturlig energi", "Favorit till ramadan & gåvor", "Urkärnade alternativ"],
    ingredients: ["Hela dadlar", "Urkärnade eller med kärna — se etikett"],
  },
  "saffron-zafran": {
    name: "Saffran",
    subtitle: "Zafran — premiumtrådar till ris & desserter",
    benefits: ["Aroma & färg", "Lite räcker långt", "Renhet labbtestad"],
    ingredients: ["100 % saffrantrådar", "Glasförpackning"],
  },
  "barberries-zereshk": {
    name: "Barberis",
    subtitle: "Zereshk — syrliga rubinröda bär till polo & sallader",
    benefits: ["Klassisk till risrätter", "Syrlig kick", "Skölj före användning"],
    ingredients: ["Torkade barberis", "Förvaras svalt & torrt"],
  },
  "black-bulberry-toot-siya": {
    name: "Svart mullbär",
    subtitle: "Toot Siya — intensiva, små torkade bär",
    benefits: ["Kraftig smak till bakning", "Antioxidanter", "Bra i müsli"],
    ingredients: ["Torkade svarta mullbär", "Kan innehålla spår av andra bär"],
  },
  sinjid: {
    name: "Sinjid",
    subtitle: "Traditionell afghansk oleaster — syrligt-söt torkad frukt",
    benefits: ["Särpräglad smak", "Mellanmål eller till te", "Naturligt torkad"],
    ingredients: ["Torkad sinjid-frukt", "Inget tillsatt socker"],
  },
  qorot: {
    name: "Qorot",
    subtitle: "Torkad yoghurtkur — salt traditionell basvara",
    benefits: ["Umami till soppor & grytor", "Lång hållbarhet", "Äkta skafferifavorit"],
    ingredients: ["Torkad fermenterad yoghurtkur", "Förvaras svalt & torrt"],
  },
};

const faProducts: ProductTranslationMap = {
  "afghan-almonds-badam": {
    name: "بادام افغانستان",
    subtitle: "بادام — کامل، طبیعی خشک‌شده، غنی و کره‌ای",
    benefits: ["پروتئین و ویتامین E بالا", "مناسب میان‌وعده و پخت", "بسته قابل بسته‌شدن مجدد"],
    ingredients: ["بادام ممتاز", "محصول منطقه افغانستان", "بدون روغن افزوده"],
  },
  "pistachios-pista": {
    name: "پسته",
    subtitle: "پسته — مغز درشت، طبیعی باز شده",
    benefits: ["بافت ترد", "رنگ طبیعی درخشان", "عالی برای هدیه"],
    ingredients: ["پسته برشت شده", "گزینه کم‌نمک موجود است"],
  },
  "walnuts-charmaghz": {
    name: "گردو",
    subtitle: "چارمغز — نصفه و تکه‌ای، سرشار از امگا",
    benefits: ["چربی مفید برای مغز", "آماده برای پخت و صبحانه", "دست‌چین برای کیفیت"],
    ingredients: ["گردوی پوست‌کنده", "در جای خنک نگهداری شود"],
  },
  "raisins-kishmish": {
    name: "کشمش",
    subtitle: "کشمش — انگور خشک شیرین و آبدار",
    benefits: ["شیرینی طبیعی", "فیبر و انرژی", "عالی برای دسر"],
    ingredients: ["انگور آفتاب‌خشک", "بدون رنگ مصنوعی"],
  },
  "apricots-ashtaq": {
    name: "زردآلو (اشتاق)",
    subtitle: "اشتاق — زردآلوی خشک سفت و ترش‌وشیرین",
    benefits: ["سرشار از بتاکاروتن", "عالی برای مخلوط خشکبار", "خشک‌کردن سنتی آفتابی"],
    ingredients: ["زردآلوی خشک کامل", "گزینه بدون سولفیت روی بسته"],
  },
  "apricots-kishta": {
    name: "زردآلو (کیشته)",
    subtitle: "کیشته — نصفه زردآلوی نرم و عسلی",
    benefits: ["طبیعی شیرین", "میان‌وعده یا پخت", "دست‌چین"],
    ingredients: ["نصفه زردآلوی خشک", "بدون شکر افزوده"],
  },
  "figs-anjeer": {
    name: "انجیر",
    subtitle: "انجیر — انجیر کامل درشت و عسلی",
    benefits: ["سرشار از فیبر", "طبیعی شیرین", "مناسب هدیه"],
    ingredients: ["انجیر خشک کامل", "دست‌چین"],
  },
  anardana: {
    name: "تخم انار",
    subtitle: "اناردانه — دانه خشک ترش برای آشپزی",
    benefits: ["ترشی به چاتنی و سالاد", "ادویه سنتی", "معطر"],
    ingredients: ["تخم انار خشک", "در ظرف دربسته نگهداری شود"],
  },
  "white-mulberry-shahtoot": {
    name: "توت سفید",
    subtitle: "شاه‌توت — توت خشک جویدنی و طبیعی شیرین",
    benefits: ["طعم منحصربه‌فرد", "آهن و آنتی‌اکسیدان", "میان‌وعده یا روی غلات"],
    ingredients: ["توت سفید", "بدون شکر افزوده"],
  },
  "pine-nuts-jalghoza": {
    name: "مغز چلغوزه",
    subtitle: "جلغوزه — مغز لطیف و کره‌ای",
    benefits: ["تزئین ممتاز برای برنج و سالاد", "غنی و کرمی", "با اندازه استفاده شود"],
    ingredients: ["مغز چلغوزه خام", "پس از باز کردن در یخچال"],
  },
  "dates-khorma": {
    name: "خرما خشک",
    subtitle: "خرما — خرمای نرم و کاراملی",
    benefits: ["انرژی طبیعی", "محبوب رمضان و هدیه", "گزینه بدون هسته"],
    ingredients: ["خرمای کامل", "با یا بدون هسته — روی برچسب"],
  },
  "saffron-zafran": {
    name: "زعفران",
    subtitle: "زعفران — رشته ممتاز برای برنج و دسر",
    benefits: ["عطر و رنگ", "کمی کافی است", "خلوص آزمایش‌شده"],
    ingredients: ["۱۰۰٪ رشته زعفران", "بسته شیشه‌ای"],
  },
  "barberries-zereshk": {
    name: "زرشک",
    subtitle: "زرشک — توت ترش یاقوتی برای پلو و سالاد",
    benefits: ["کلاسیک با غذاهای برنجی", "طعم ترش", "قبل از استفاده بشویید"],
    ingredients: ["زرشک خشک", "در جای خنک و خشک"],
  },
  "black-bulberry-toot-siya": {
    name: "توت سیاه",
    subtitle: "توت سیاه — توت خشک ریز و پرطعم",
    benefits: ["طعم قوی برای پخت", "آنتی‌اکسیدان", "عالی در موسلی"],
    ingredients: ["توت سیاه خشک", "ممکن است اثر سایر توت‌ها باشد"],
  },
  sinjid: {
    name: "سنجد",
    subtitle: "سنجد سنتی افغانستان — میوه خشک ترش‌وشیرین",
    benefits: ["طعم متمایز", "میان‌وعده یا با چای", "طبیعی خشک‌شده"],
    ingredients: ["میوه سنجد خشک", "بدون شکر افزوده"],
  },
  qorot: {
    name: "قروت",
    subtitle: "ماست خشک — ماده سنتی شور آشپزخانه",
    benefits: ["اومامی برای سوپ و خورش", "ماندگاری طولانی", "ماده اصیل آشپزخانه"],
    ingredients: ["قروت ماست تخمیرشده خشک", "در جای خنک و خشک"],
  },
};

export const productTranslations: Record<Exclude<Locale, "en">, ProductTranslationMap> = {
  sv: svProducts,
  fa: faProducts,
};
