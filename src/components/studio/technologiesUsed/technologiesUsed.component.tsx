import React from "react";
import "./technologiesUsed.style.scss";
import { Typography } from "@mui/material";
import bitrix from "../../../assets/studio/bitrix.png";
import laravel from "../../../assets/studio/laravel.png";
import go from "../../../assets/studio/go.png";
import node from "../../../assets/studio/node.png";
import mysql from "../../../assets/studio/mysql.png";
import psql from "../../../assets/studio/psql.png";
import react from "../../../assets/studio/react.png";
import vue from "../../../assets/studio/vue.png";
import angular from "../../../assets/studio/angular.png";
import flutter from "../../../assets/studio/flutter.png";
import monodb from "../../../assets/studio/monodb.png";
import oracle from "../../../assets/studio/oracle.png";
import { useTranslation } from "react-i18next";

export const TechnologiesUsed: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="contentTex mt-[50px] mb-[35px] "
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {t("Используемые технологии")}
      </Typography>
      <div className="gridTex px-[90px] mx-auto ">
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={bitrix}
          alt="Img"
        />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={laravel}
          alt="Img"
        />
        <img data-aos="flip-up" data-aos-duration="1000" src={go} alt="Img" />
        <img data-aos="flip-up" data-aos-duration="1000" src={node} alt="Img" />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={mysql}
          alt="Img"
        />
        <img data-aos="flip-up" data-aos-duration="1000" src={psql} alt="Img" />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={react}
          alt="Img"
        />
        <img data-aos="flip-up" data-aos-duration="1000" src={vue} alt="Img" />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={angular}
          alt="Img"
        />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={flutter}
          alt="Img"
        />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={monodb}
          alt="Img"
        />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={oracle}
          alt="Img"
        />
      </div>
    </div>
  );
};
