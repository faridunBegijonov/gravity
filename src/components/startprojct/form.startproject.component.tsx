<<<<<<< HEAD
import React from "react";
import { Box } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";

const FormComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        mt: 3,
      }}
    >
      <OutlinedInput sx={{ width: "400px" }} placeholder="Имя" />
      <OutlinedInput sx={{ width: "400px" }} placeholder="Телефон" />
=======
import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

const FormComponent = () => {
  return (
    <Box sx={{ width: '80%' }}>
      <div className='w-full flex justify-between mobile mt-5 mb-5'>
        <div className='sm:w-[329px] md:w-[400px] lg:w-[420px] xlg:w-[420px] sm:mr-2 mt-5'>
          <OutlinedInput fullWidth placeholder='Имя' />
        </div>
        <div className='sm:w-[329px] md:w-[400px] lg:w-[420px] xlg:w-[420px] mt-5 '>
          <OutlinedInput fullWidth placeholder='Телефон' />
        </div>
      </div>
      <Button
        sx={{
          textTransform: 'capitalize',
          height: '50px',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
        fullWidth
        variant='contained'
      >
        Отпарить
      </Button>
>>>>>>> 7bb6ae4a18786930e1b99bd3b7a27fdf27791357
    </Box>
  );
};

export default FormComponent;
