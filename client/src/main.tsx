import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import App from "./App.tsx";

// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";

import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    <RouterProvider router={router} />
  </StrictMode>
);
