import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRoom } from "../context/RoomContext";

export function Nav() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const { isInRoom } = useRoom();
  return (
    <nav>
      {/* If user in Room */}
      {isInRoom ? (
        <Link className="btn-exit" to="/">
          End Room
        </Link>
      ) : (
        <></>
      )}

      {/* If User Not logged in, or not in /login */}
      {!isLoggedIn && !location.pathname.startsWith("/login") ? (
        <Link className="btn-login" to="/login">
          Login
        </Link>
      ) : (
        <></>
      )}

      <h2>songBuddy</h2>
    </nav>
  );
}
