import * as React from 'react';
import { Container } from '@mui/material';
import { Layout } from '../../common/layout/layout.component';
import { Navbar } from '../../common/navbar/navbar.component';
import amb_bg from '../../assets/ceses/amb/amb_bg.png';

export const ItemCasesComponent: React.FC = () => {
  return (
    <div className='bg-[#08AB68] h-screen w-full amb_bg'>
      <Navbar />
    </div>
  );
};
