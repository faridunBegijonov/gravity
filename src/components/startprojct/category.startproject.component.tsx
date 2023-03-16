import React, { useState } from 'react';
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
    <div className='w-full flex justify-center mt-10'>
      <div className='w-[80%] flex flex-wrap'>
        <ToggleButton
          sx={{ mr: 1, mb: 1 }}
          value='check'
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          Проектирование
        </ToggleButton>
        <ToggleButton
          sx={{ mr: 1, mb: 1 }}
          value='check'
          selected={selectedDesing}
          onChange={DesingSelect}
        >
          UX/UI дизайн
        </ToggleButton>
        <ToggleButton
          sx={{ mr: 1, mb: 1 }}
          value='check'
          selected={selectedMobile}
          onChange={mobileSelect}
        >
          Мобильная разработка
        </ToggleButton>
        <ToggleButton
          sx={{ mr: 1, mb: 1 }}
          value='check'
          selected={selectedWeb}
          onChange={WebSelect}
        >
          Web-разработка
        </ToggleButton>
        <ToggleButton
          sx={{ mr: 1, mb: 1 }}
          value='check'
          selected={selectedCrm}
          onChange={crmSelect}
        >
          CRM системы
        </ToggleButton>
      </div>
    </div>
  );
};

export default Category;
