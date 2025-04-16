import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Control/Login";
import Index from "./pages/Control/Index";

// AUTHENTICATION
import RequireAuth from "./context/RequireAuth";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/control/login", element: <Login /> },
  {
    path: "/control",
    element: (
      <RequireAuth>
        <Index />
      </RequireAuth>
    ),
  },
]);

export default router;
