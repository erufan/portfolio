import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "fa",
    debug: true,
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Home: "Home",
          ExpandedText: { open: "close", close: "... continue" },
          ViewCode: "View Code",
          ViewProject: "View Project",
        },
      },
      fa: {
        translation: {
          Home: "خانه",
          ExpandedText: { open: "بستن", close: "... ادامه" },
          ViewCode: "نمایش کد",
          ViewProject: "نمایش پروژه",
        },
      },
    },
  });

export default i18n;
