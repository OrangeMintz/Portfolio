import { ToastContainer, Slide } from "react-toastify";
import { useEffect } from "react";
import router from "./router";
import "./toast.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/FirebaseContext";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
    });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Slide}
      />
      {/* <RouterProvider router={router} /> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
