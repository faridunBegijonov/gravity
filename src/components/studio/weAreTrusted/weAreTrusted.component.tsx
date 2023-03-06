import React from "react";
import "./weAreTrusted.style.scss";
import { Typography } from "@mui/material";
import bekhatar from "../../../assets/studio/bekhatar.png";
import fsvc from "../../../assets/studio/fsvc.png";
import wsp from "../../../assets/studio/wsp.png";
import amb from "../../../assets/studio/amb.png";
import eshata from "../../../assets/studio/eshata.png";
import humo from "../../../assets/studio/humo.png";
import bankArvand from "../../../assets/studio/BankArvand.png";
import talco from "../../../assets/studio/talco.png";
import mfrt from "../../../assets/studio/mfrt.png";
import caseE from "../../../assets/studio/case.png";
import tajset from "../../../assets/studio/tajset.png";
import { useTranslation } from "react-i18next";
export const WeAreTrusted: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="contentWeAreTrust mt-[68px]"
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {t("Нам доверяют")}
      </Typography>
      <div className="contentImglogo flex items-center mt-[18px] mx-auto px-[60px] py-[15px]">
        <img src={bekhatar} alt="Img" />
        <img src={fsvc} alt="Img" />
        <img src={amb} alt="Img" />
        <img src={wsp} alt="Img" />
        <img src={eshata} alt="Img" />
        <img src={humo} alt="Img" />
        <img src={bankArvand} alt="Img" />
        <img src={talco} alt="Img" />
        <img src={mfrt} alt="Img" />
        <img src={caseE} alt="Img" />
        <img src={tajset} alt="Img" />
      </div>
    </div>
  );
};
