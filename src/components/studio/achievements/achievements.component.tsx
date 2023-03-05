import React from "react";
import "./achievements.style.scss";
import { Typography } from "@mui/material";
import img from "../../../assets/studio/arch.png";
import { useTranslation } from "react-i18next";

export const Achievements: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contentFlexStudio flex items-center justify-between mt-[85px] bg-[#F7F8FA] p-[25px] h-[350px] ">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="w-[50%] contentTestStudio "
      >
        <Typography
          className="headingStudio"
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {t("Достижения")}
        </Typography>
        <Typography sx={{ mb: 2, fontSize: "21px" }}>
          {t("Бизнес и сертифицированный")}
        </Typography>
        <Typography sx={{ fontSize: "21px" }}>{t("Лидер продаж")}</Typography>
      </div>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        className="imgStudio  w-[50%] h-[330px] mt-[85px] "
        src={img}
        alt="Img"
      />
    </div>
  );
};
