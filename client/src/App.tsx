import { ToastContainer, Slide } from "react-toastify";
import { useEffect } from "react";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import "tailwindcss";
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { RouterProvider } from "react-router-dom";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
      // PRELOADER DELAY 300ms
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        theme="light"
        transition={Slide}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
