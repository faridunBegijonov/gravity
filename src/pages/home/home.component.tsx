import React from "react";
import { Navbar } from "../../common/navbar/navbar.component";
import { Container, Typography } from "@mui/material";
import logoHome from "../../assets/home/homeLogo.svg";
import "./home.style.scss";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div className="h-[70vh] flex items-center justify-between relative contentHome ">
          <Typography
            className="textHome"
            variant="h3"
            sx={{ width: "70%", fontWeight: "400" }}
          >
            {t("Создаем")}
          </Typography>
          <img
            src={logoHome}
            alt="Img"
            className="logoHome  absolute right-[120px]"
          />
        </div>
      </Container>
    </>
  );
};
