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
      "Мы являемся": "Мы являемся лучшей IT студией Таджикистана.",
      "Любим создавать":
        " Любим создавать продающие, имиджевые сайты и предлагаем нестандартные решения. Внедряем в ваш бизнес комплекс digital-сервисов: начиная от проектирования и дизайн-концепций до многофункциональных CRM-систем.",
      "Помогаем вашему":
        "Помогаем вашему бренду сиять в digital-вселенной, соответствовать международным стандартам и привлекать клиентов вашей мечты.",
      Мы: "Мы — Gravity Studio.",
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
      "Мы являемся": "We are the best IT studio in Tajikistan.",
      "Любим создавать":
        "We like to create selling, image sites and offer non-standard solutions. We introduce a complex of digital services into your business: from design and design concepts to multifunctional CRM systems.",
      "Помогаем вашему":
        "We help your brand shine in the digital universe, meet international standards and attract the customers of your dreams.",
      Мы: "We are Gravity Studio.",
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
      "Мы являемся": "Biz Tojikistondagi eng yaxshi IT-studiyamiz.",
      "Любим создавать":
        "Biz savdo, tasvir saytlarini yaratishni va nostandart yechimlarni taklif qilishni yoqtiramiz. Biz sizning biznesingizga raqamli xizmatlar majmuasini kiritamiz: dizayn va dizayn konsepsiyalaridan tortib ko‘p funksiyali CRM tizimlarigacha.",
      "Помогаем вашему":
        "Biz sizning brendingizni raqamli olamda porlashiga, xalqaro standartlarga javob berishiga va orzuingizdagi mijozlarni jalb qilishga yordam beramiz.",
      Мы: "Biz Gravity Studiomiz.",
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
