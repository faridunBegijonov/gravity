import React from "react";
import "./serviceJob.style.scss";
import { Typography } from "@mui/material";
import "./serviceJob.style.scss";
import { useTranslation } from "react-i18next";

export const ServiceJob: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="contentStudioFlex flex items-center justify-between p-[35px] bg-[#F7F8FA]"
    >
      <div className="contentJobStudio flex items-center">
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          12
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 2 }}>
          {t("лет успешной работы")}
        </Typography>
      </div>
      <div className="contentJobStudio flex items-center">
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          11+
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 2 }}>
          {t("сотрудников в штате")}
        </Typography>
      </div>
      <div className="contentJobStudio flex items-center">
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          65+
        </Typography>
        <Typography sx={{ fontWeight: "bold", ml: 2 }}>
          {t("реализовынных проектов")}
        </Typography>
      </div>
    </div>
  );
};
