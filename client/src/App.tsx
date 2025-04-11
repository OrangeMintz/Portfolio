import { ToastContainer, Slide } from "react-toastify";
import { useEffect, useState } from "react";
import router from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import "tailwindcss";
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { RouterProvider } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  // TESTING PRELOADER
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 1500);
  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    setLoading(false);
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
      {loading ? <Preloader /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
