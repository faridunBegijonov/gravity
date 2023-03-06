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
      Достижения: "Достижения",
      "Бизнес и сертифицированный":
        "Бизнес и сертифицированный партнер компании «1C-Битрикс»",
      "Лидер продаж":
        "Лидер продаж продуктов 1C-Битрикс в Таджикистане (2018/2019/2020) гг.",
      "Нам доверяют": "Нам доверяют",
      "лет успешной работы": "лет успешной работы",
      "сотрудников в штате": "сотрудников в штате",
      "реализовынных проектов": "реализовынных проектов",
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
      Достижения: "Achievements",
      "Бизнес и сертифицированный":
        "Business and certified partner of 1C-Bitrix",
      "Лидер продаж":
        "Sales leader of 1C-Bitrix products in Tajikistan (2018/2019/2020)",
      "Нам доверяют": "We are trusted",
      "лет успешной работы": "years of successful work",
      "сотрудников в штате": "employees in the state",
      "реализовынных проектов": "implemented projects",
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
      Достижения: "Yutuqlar",
      "Бизнес и сертифицированный":
        "1C-Bitrix kompaniyasining biznes va sertifikatlangan hamkori",
      "Лидер продаж":
        "Tojikistonda 1C-Bitrix mahsulotlarini sotish bo'yicha yetakchi (2018/2019/2020)",
      "Нам доверяют": "Biz ishonamiz",
      "лет успешной работы": "muvaffaqiyatli ish yillari",
      "сотрудников в штате": "davlatdagi xodimlar",
      "реализовынных проектов": "amalga oshirilgan loyihalar",
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
