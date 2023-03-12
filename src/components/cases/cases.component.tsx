import { Container, Typography } from "@mui/material";
import * as React from "react";
import { Layout } from "../../common/layout/layout.component";
import "./cases.style.scss";
import amb from "../../assets/ceses/amb_cases.png";
import astore from '../../assets/ceses/astore_cases.png';
import { Link } from "react-router-dom";
import { ItemCases } from "./itemCases.component";

const Cases: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2 }} variant="h4">
          Кейсы
        </Typography>
        <div className="gridCases mt-[25px]">
          <div className="amb">
            <img src={amb} alt="AmbImg" />
            <p>Амонатбонк</p>
            <Link to="/cases/amb">
              <div className="bgAmb hover:bg-[#16a34a]/50">
                <div className="flex flex-col">
                  <span className="text-[22px] mb-[8px] ">
                    Государственный сберегательный банк Республики Таджикистан{" "}
                  </span>
                  <span className="text-[18px] mb-[8px]">
                    Выстроили единый концепт подачи информации на сайте и
                    рассказали о ключевых достоинствах банка
                  </span>
                  <span>
                    UI/UX, Html, Css, JavaScript, 1CBitrix, PHP, MySQL
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </Container>
    </Layout>
  );
};

export default Cases;
