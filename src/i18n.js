import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import XHR from "i18next-http-backend"; // <---- add this

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(XHR) // <---- add this
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    ns: ["main", "work", "about", "skills"],
    fallbackLng: "en",
    supportedLngs: ["de", "en"],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
    debug: false,
  });

export default i18n;
