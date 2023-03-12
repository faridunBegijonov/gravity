import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { Layout } from "../../common/layout/layout.component";
import img1 from "../../assets/services/1.svg";
import img2 from "../../assets/services/2.svg";
import img3 from "../../assets/services/3.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Container maxWidth="xl">
        <div className="h-auto">
          <h1 className="text-[24px] md:text-[28px] 2xl:text-[34px] ">
            Услуги
          </h1>
          <div className="flex justify-between max-[1000px]:mt-[30px] xl:mt-[60px] max-[550px]:flex-col  mx-auto items-center max-[760px]:flex-wrap max-[600px]:flex-wrap  md:w-[100%] lg:w-[88%] lg:mt-[20px] 2xl:w-[78%] ">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex-col items-center w-[100%]"
            >
              <div className="h-[350px] max-[700px]:w-[100%] max-[760px]:h-auto w-[250px] ">
                <img
                  className="w-[140px] max-[700px]:mx-auto max-[1000px]:w-[100px] max-[1000px]:h-[100px] lg:w-[120px] lg:h-[120px]"
                  src={img1}
                  alt="img"
                />
                <ul className="mt-8 max-[760px]:h-auto max-[1000px]:mt-[4px] lg:mt-4 h-[60px]">
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Адаптивный веб-дизайн
                  </li>
                  <li className="p-2 max-[1000px]:p-[1px]">— UX/UI дизайн</li>
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Дизайны мобильных приложений
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[100%]">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="h-[350px] max-[760px]:mt-[18px] max-[700px]:w-[100%] max-[760px]:h-auto w-[250px]"
              >
                <img
                  src={img2}
                  className="max-[1000px]:w-[100px] max-[700px]:mx-auto max-[1000px]:h-[100px] lg:w-[120px] lg:h-[120px] "
                  alt="img"
                />
                <ul className="mt-8 max-[768px]:h-auto max-[1000px]:mt-[4px] lg:mt-4 h-[60px]">
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Корпоративные сайты, интернет-магазины
                  </li>
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Мобильное приложение
                  </li>
                  <li className="p-2 max-[1000px]:p-[1px]">— CRM-системы</li>
                </ul>
              </div>
            </div>
            <div className="w-[100%]">
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="h-[350px] max-[700px]:w-[100%] max-[760px]:mt-[14px] max-[760px]:h-auto max-[760px]:w-[280px]"
              >
                <img
                  src={img3}
                  className="max-[1000px]:w-[100px] max-[700px]:mx-auto max-[1000px]:h-[100px] lg:w-[120px] lg:h-[120px]"
                  alt="img"
                />
                <ul className="mt-8 max-[760px]:h-auto max-[1000px]:mt-[4px] lg:mt-4 h-[60px]">
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Домен и Хостинг
                  </li>
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Техническая поддержка сайтов
                  </li>
                  <li className="p-2 max-[1000px]:p-[1px]">
                    — Поддержка контента
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Service;
