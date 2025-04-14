import { useAuth } from "../context/FirebaseContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  // Wait until Firebase confirms if a user is logged in or not
  if (loading) return null; // or a spinner

  return user ? children : <Navigate to="/control/login" replace />;
};

export default RequireAuth;
