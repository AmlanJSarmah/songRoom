import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function NotLoginProtectedRoutes({ children }) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export function LoginProtectedRoutes({ children }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
