import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Control/Login";
import Index from "./pages/Control/Index";

// AUTHENTICATION
import RequireAuth from "./context/RequireAuth";
import AddProj from "./pages/Control/AddProj";
import Project from "./pages/Project";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
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
]);

export default router;
