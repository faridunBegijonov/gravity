import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home } from '../pages/home/home.component';
import { Studio } from '../pages/studio/studio.component';
import Service from '../components/services/service.component';
import { Servicepage } from '../pages/service/service.page';
import CasesPage from '../pages/cases/cases.page';
import StartProjectPage from '../pages/startproject/startproject.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/studio',
    element: <Studio />,
  },
  {
    path: '/services',
    element: <Servicepage />,
  },
  {
    path: '/cases',
    element: <CasesPage />,
  },
  {
    path: '/startproject',
    element: <StartProjectPage />,
  },
]);
