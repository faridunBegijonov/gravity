import React from "react";
import { Container, Typography } from "@mui/material";
import "./footer.style.scss";
import i18n from "../../i18n";

export const Footer: React.FC = () => {
  const changeLanguage = (l: string) => {
    i18n.changeLanguage(l);
  };
  return (
    <Container maxWidth="xl">
      <footer className="flex items-center justify-between footerContent py-[20px] ">
        <div className="flex items-center flex-wrap ">
          <a
            className="linkFooter mr-[15px]"
            href="https://www.facebook.com/gravity.tj"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="linkFooter mr-[15px]"
            href="https://www.instagram.com/gravity.tj/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="linkFooter mr-[15px]"
            href="https://t.me/gravity_tj"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className="linkFooter"
            href="https://www.linkedin.com/company/gravity-studio-tj/about/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>

        <div className="flex items-center contentLFooter ">
          <Typography
            onClick={() => changeLanguage("ru")}
            sx={{ mr: 2, color: "rgba(38, 38, 38, 0.5)", cursor: "pointer" }}
          >
            Ru
          </Typography>
          <Typography
            onClick={() => changeLanguage("en")}
            sx={{ mr: 2, color: "rgba(38, 38, 38, 0.5)", cursor: "pointer" }}
          >
            En
          </Typography>
          <Typography
            onClick={() => changeLanguage("uzb")}
            sx={{ color: "rgba(38, 38, 38, 0.5)", cursor: "pointer" }}
          >
            Uzb
          </Typography>
        </div>
      </footer>
    </Container>
  );
};
