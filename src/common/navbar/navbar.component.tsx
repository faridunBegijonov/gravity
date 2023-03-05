import React from "react";
import logo from "../../assets/navbar/logo-dark.svg";
import { Container, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./navbar.style.scss";
import { MobileMenu } from "./mobileMenu.component";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <nav className="flex items-center py-[25px] justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="mr-4" />
          </Link>
          <Typography
            className="logoNavText"
            sx={{ color: "rgba(38,38,38,.5)" }}
          >
            Digital Solutions
          </Typography>
        </div>
        <div className="flex items-center contentListNav ">
          <NavLink className="mr-4" to="/studio">
            {t("Студия")}
          </NavLink>
          <NavLink className="mr-4" to="/cases">
            {t("Кейсы")}
          </NavLink>
          <NavLink className="mr-4" to="/services">
            {t("Услуги")}
          </NavLink>
          <NavLink to="/startProject">{t("+Начать проект")}</NavLink>
        </div>
        <MobileMenu />
      </nav>
    </Container>
  );
};
