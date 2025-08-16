import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRoom } from "../context/RoomContext";

export function Nav() {
  const { isLoggedIn } = useAuth();
  const { isInRoom, roomDispatch } = useRoom();

  const location = useLocation();
  const navigate = useNavigate();

  const handleRoomExit = () => {
    roomDispatch({ type: "EXIT" });
    navigate("/");
  };

  return (
    <nav>
      {/* If user in Room */}
      {isInRoom ? (
        <>
          <button className="btn-exit" onClick={handleRoomExit}>
            End Room
          </button>
          <h2>songBuddy</h2>
        </>
      ) : (
        <>
          <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            songBuddy
          </h2>
        </>
      )}

      {/* If User Not logged in, or not in /login */}
      {!isLoggedIn && !location.pathname.startsWith("/login") ? (
        <Link className="btn-login" to="/login">
          Login
        </Link>
      ) : (
        <></>
      )}

      {/* If in login page */}
      {!isLoggedIn && location.pathname.startsWith("/login") ? (
        <Link className="btn-login" to="/sign-up">
          Sign Up
        </Link>
      ) : (
        <></>
      )}
    </nav>
  );
}
