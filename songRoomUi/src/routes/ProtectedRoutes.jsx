import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRoom } from "../context/RoomContext";

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

export function RoomProtectedRoutes({ children }) {
  const { isInRoom } = useRoom();
  if (isInRoom) {
    return <Navigate to="/room" />;
  }
  return children;
}
