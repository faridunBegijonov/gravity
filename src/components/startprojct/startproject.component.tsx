<<<<<<< HEAD
import React, { useState } from "react";
import { Layout } from "../../common/layout/layout.component";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import Category from "./category.startproject.component";
import FormComponent from "./form.startproject.component";
=======
import React, { useState } from 'react';
import { Layout } from '../../common/layout/layout.component';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Category from './category.startproject.component';
import FormComponent from './form.startproject.component';
import './startproject.css';
>>>>>>> 7bb6ae4a18786930e1b99bd3b7a27fdf27791357

const StartProject = () => {
  return (
    <Layout>
      <Container maxWidth='xl'>
        <div className='w-full flex justify-between mobile'>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              pr: 3,
            }}
          >
            <Typography
              variant='h4'
              sx={{ fontWeight: '500', lineHeight: '44px' }}
            >
              Начать проект
            </Typography>
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Category />
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
<<<<<<< HEAD
              <Category />
            </Box>
            <FormComponent />
=======
              <FormComponent />
            </Box>
>>>>>>> 7bb6ae4a18786930e1b99bd3b7a27fdf27791357
          </Box>
          <Box
            sx={{ width: '470px', display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              variant='h4'
              sx={{ fontWeight: '500', lineHeight: '44px' }}
            >
              Офис
            </Typography>
            <Box sx={{ pt: 5 }}>
              <Typography
                variant='h5'
                sx={{ fontWeight: '500', lineHeight: '36px' }}
              >
                Душанбе, пр. Рудаки 93/1
              </Typography>
              <Typography
                variant='h5'
                sx={{ fontWeight: '500', lineHeight: '36px' }}
              >
                (+992) 111-111-789
              </Typography>
              <Typography
                variant='h5'
                sx={{ fontWeight: '500', lineHeight: '36px' }}
              >
                info@gravity.tj
              </Typography>
            </Box>
          </Box>
        </div>
      </Container>
    </Layout>
  );
};

export default StartProject;
