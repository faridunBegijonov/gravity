import React from 'react';
import { Box } from '@mui/system';
import OutlinedInput from '@mui/material/OutlinedInput';

const FormComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        mt: 3,
      }}
    >
      <OutlinedInput sx={{width: '400px'}} placeholder='Имя' />
      <OutlinedInput sx={{width: '400px'}} placeholder='Телефон' />
    </Box>
  );
};

export default FormComponent;
