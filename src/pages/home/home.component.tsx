import React, { useEffect } from "react";
import { Navbar } from "../../common/navbar/navbar.component";
import { Container, Typography } from "@mui/material";
import logoHome from "../../assets/home/homeLogo.svg";
import "./home.style.scss";
import { useTranslation } from "react-i18next";
import { Footer } from "../../common/footer/footer.component";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div className="h-[80vh] flex items-center justify-between relative contentHome ">
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            className="textHome"
            variant="h3"
            sx={{ width: "70%", fontWeight: "400" }}
          >
            {t("Создаем")}
          </Typography>
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={logoHome}
            alt="Img"
            className="logoHome  absolute right-[120px]"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};
