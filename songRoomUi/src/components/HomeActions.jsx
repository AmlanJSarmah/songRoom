import { Link, useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomContext";
import { useAuth } from "../context/AuthContext";

export function HomeActions() {
  const { handleCreateRoom } = useRoom();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <button
        className="btn btn-land"
        onClick={() => {
          navigate("/join-room");
        }}
      >
        Join Room
      </button>
      <button
        className="btn btn-land"
        onClick={() => {
          if (isLoggedIn) handleCreateRoom();
          else navigate("/login");
        }}
      >
        Create Room
      </button>
      <Link className="btn btn-land" to="/library">
        View Songs Library
      </Link>
    </div>
  );
}
