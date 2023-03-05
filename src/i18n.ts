import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      Студия: "Студия",
      Кейсы: "Кейсы",
      Услуги: "Услуги",
      "+Начать проект": "+ Начать проект",
    },
  },
  en: {
    translation: {
      Студия: "Studio",
      Кейсы: "Cases",
      Услуги: "Services",
      "+Начать проект": "+ Start project",
    },
  },
  uzb: {
    translation: {
      Студия: "Studiya",
      Кейсы: "Ishlar",
      Услуги: "Xizmatlar",
      "+Начать проект": "+ Loyihani boshlash",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
