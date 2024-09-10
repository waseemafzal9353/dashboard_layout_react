import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Journals from "./pages/Journals";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/journals", element: <Journals /> },
    ],
  },
]);

export default router;
