import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./Pages/404Page.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Hompage from "./Pages/Homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hompage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/node_modules",
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
