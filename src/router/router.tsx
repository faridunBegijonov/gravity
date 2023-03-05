import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import { Home } from "../pages/home/home.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
