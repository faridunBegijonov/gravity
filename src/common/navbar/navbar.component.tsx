import React from "react";
import logo from "../../assets/navbar/logo-dark.svg";
import { Container, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./navbar.style.scss";
import { MobileMenu } from "./mobileMenu.component";

export const Navbar: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <nav className="flex items-center py-[25px] justify-between ">
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
            Студия
          </NavLink>
          <NavLink className="mr-4" to="/cases">
            Кейсы
          </NavLink>
          <NavLink className="mr-4" to="/services">
            Услуги
          </NavLink>
          <NavLink to="/startProject">+ Начать проект</NavLink>
        </div>
        <MobileMenu />
      </nav>
    </Container>
  );
};
