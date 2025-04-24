import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ar from "@/locales/ar.json";
import de from "@/locales/de.json";
import en from "@/locales/en.json";
import fa from "@/locales/fa.json";
import fr from "@/locales/fr.json";
import hi from "@/locales/hi.json";
import ja from "@/locales/ja.json";
import ko from "@/locales/ko.json";
import pt from "@/locales/pt.json";
import ru from "@/locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      ja: { translation: ja },
      ar: { translation: ar },
      fa: { translation: fa },
      hi: { translation: hi },
      ru: { translation: ru },
      ko: { translation: ko },
      pt: { translation: pt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
