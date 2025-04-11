import { ToastContainer, Slide } from "react-toastify";
import { useEffect, useState } from "react";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import "tailwindcss";
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { RouterProvider } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";

    const timer = setTimeout(() => setLoading(false), 300);
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
