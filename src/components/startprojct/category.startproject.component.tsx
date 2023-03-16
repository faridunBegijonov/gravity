import React, { useState } from 'react';
import { Layout } from '../../common/layout/layout.component';
import { Box } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';

const Category: React.FC = () => {
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        mt: 3,
      }}
    >
      <ToggleButton
        value='check'
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        Проектирование
      </ToggleButton>
      <ToggleButton
        value='check'
        selected={selectedDesing}
        onChange={DesingSelect}
      >
        UX/UI дизайн
      </ToggleButton>
      <ToggleButton
        value='check'
        selected={selectedMobile}
        onChange={mobileSelect}
      >
        Мобильная разработка
      </ToggleButton>
      <ToggleButton value='check' selected={selectedWeb} onChange={WebSelect}>
        Web-разработка
      </ToggleButton>
      <ToggleButton value='check' selected={selectedCrm} onChange={crmSelect}>
        CRM системы
      </ToggleButton>
    </Box>
  );
};

export default Category;
