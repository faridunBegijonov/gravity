import React, { useState } from 'react';
import { Layout } from '../../common/layout/layout.component';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import Category from './category.startproject.component';
import FormComponent from './form.startproject.component';

const StartProject = () => {
  const [selected, setSelected] = useState(false);
  const [selectedWeb, setSelectedWeb] = useState(false);
  const [selectedMobile, setSelectedMobile] = useState(false);
  const [selectedDesing, setSelectedDesing] = useState(false);
  const [selectedCrm, setSelectedCrm] = useState(false);

  const mobileSelect = () => {
    setSelectedMobile(!selectedMobile);
  };
  const WebSelect = () => {
    setSelectedWeb(!selectedWeb);
  };
  const DesingSelect = () => {
    setSelectedDesing(!selectedDesing);
  };
  const crmSelect = () => {
    setSelectedCrm(!selectedCrm);
  };

  return (
    <Layout>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              pr: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "500", lineHeight: "44px" }}
            >
              Начать проект
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "85%",
                mt: 3,
              }}
            >
              <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                Проектирование
              </ToggleButton>
              <ToggleButton
                value="check"
                selected={selectedDesing}
                onChange={DesingSelect}
              >
                UX/UI дизайн
              </ToggleButton>
              <ToggleButton
                value="check"
                selected={selectedMobile}
                onChange={mobileSelect}
              >
                Мобильная разработка
              </ToggleButton>
              <ToggleButton
                value="check"
                selected={selectedWeb}
                onChange={WebSelect}
              >
                Web-разработка
              </ToggleButton>
              <ToggleButton
                value="check"
                selected={selectedCrm}
                onChange={crmSelect}
              >
                CRM системы
              </ToggleButton>
            </Box>
            <Category />
            <FormComponent />
          </Box>
          <Box
            sx={{ width: "350px", display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "500", lineHeight: "44px" }}
            >
              Офис
            </Typography>
            <Box sx={{ pt: 5 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "500", lineHeight: "36px" }}
              >
                Душанбе, пр. Рудаки 93/1
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "500", lineHeight: "36px" }}
              >
                (+992) 111-111-789
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "500", lineHeight: "36px" }}
              >
                info@gravity.tj
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default StartProject;
