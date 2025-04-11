import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  // { path: "/", element: <App /> },
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
]);

export default router;
