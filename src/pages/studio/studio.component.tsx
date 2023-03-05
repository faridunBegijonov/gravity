import React from "react";
import { Navbar } from "../../common/navbar/navbar.component";
import { Footer } from "../../common/footer/footer.component";
import "./studio.style.scss";
import { Container, Typography } from "@mui/material";
import logoStudio from "../../assets/home/homeLogo.svg";
import { useTranslation } from "react-i18next";

export const Studio: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div className="flex items-center mt-[75px] contentStudio ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-[70%] contentTextStudio "
          >
            <Typography>{t("Мы являемся")}</Typography>
            <Typography>{t("Любим создавать")}</Typography>
            <Typography>{t("Помогаем вашему")}</Typography>
            <Typography>{t("Мы")}</Typography>
          </div>
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className="logoHome ml-[60px]"
            src={logoStudio}
            alt="Img"
          />
        </div>
      </Container>

      <Footer />
    </>
  );
};
