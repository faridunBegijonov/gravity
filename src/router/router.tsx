import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import { Home } from "../pages/home/home.component";
import { Studio } from "../pages/studio/studio.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/studio",
    element: <Studio />,
  },
]);
