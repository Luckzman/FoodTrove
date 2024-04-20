import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Signup from "../pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
