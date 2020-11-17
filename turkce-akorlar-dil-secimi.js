import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from '../locales/en/translation.json';
import translationTR from '../locales/tr/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  },
  interpolation: {
    escapeValue: false   
  }
};

let lang = "tr";


if(window.location.hostname === "akoroke.com" || window.location.hostname === "www.akoroke.com") {
  lang = "tr";
} else {
  lang = "en";
}



i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: lang,
    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
