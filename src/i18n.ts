import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      Студия: "Студия",
      Кейсы: "Кейсы",
      Услуги: "Услуги",
      "+Начать проект": "+ Начать проект",
      Создаем:
        "Создаем цифровые продукты, которые приносят пользу бизнесу наших клиентов.",
    },
  },
  en: {
    translation: {
      Студия: "Studio",
      Кейсы: "Cases",
      Услуги: "Services",
      "+Начать проект": "+ Start project",
      Создаем:
        "We create digital products that benefit our clients' businesses.",
    },
  },
  uzb: {
    translation: {
      Студия: "Studiya",
      Кейсы: "Ishlar",
      Услуги: "Xizmatlar",
      "+Начать проект": "+ Loyihani boshlash",
      Создаем:
        "Biz mijozlarimizning biznesiga foyda keltiradigan raqamli mahsulotlarni yaratamiz.",
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
