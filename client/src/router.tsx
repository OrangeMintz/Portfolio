import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Login from "./pages/Control/Login";
import Index from "./pages/Control/Index";

// AUTHENTICATION
import RequireAuth from "./context/RequireAuth";
import AddProj from "./pages/Control/AddProj";
import Project from "./pages/Project";
import AddCert from "./pages/Control/AddCert";

// 404 Page
import Error404 from "./components/404/Error404";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/certificates", element: <Certificates /> },
  { path: "/project/:id", element: <Project /> },
  { path: "/control/login", element: <Login /> },
  {
    path: "/control",
    element: (
      <RequireAuth>
        <Index />
      </RequireAuth>
    ),
  },
  {
    path: "/control/project",
    element: (
      <RequireAuth>
        <AddProj />
      </RequireAuth>
    ),
  },
  {
    path: "/control/certificate",
    element: (
      <RequireAuth>
        <AddCert />
      </RequireAuth>
    ),
  },

  { path: "*", element: <Error404 /> },
]);

export default router;
