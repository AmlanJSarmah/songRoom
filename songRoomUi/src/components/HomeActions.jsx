import { Link, useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomContext";
import { useAuth } from "../context/AuthContext";

export function HomeActions() {
  const { roomDispatch } = useRoom();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      roomDispatch({ type: "JOIN" });
      navigate("/room");
    } else navigate("/login");
  };

  return (
    <div className="container">
      <button className="btn btn-land" onClick={handleJoinRoom}>
        Join Room
      </button>
      <button className="btn btn-land" onClick={handleJoinRoom}>
        Create Room
      </button>
      <Link className="btn btn-land" to="/library">
        View Songs Library
      </Link>
    </div>
  );
}
