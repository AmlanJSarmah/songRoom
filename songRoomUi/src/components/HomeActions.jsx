import { Link, useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomContext";
import { useAuth } from "../context/AuthContext";

export function HomeActions() {
  const { isLoggedIn } = useAuth();
  const { isInRoom, roomDispatch } = useRoom();
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (isInRoom) {
      return;
    }
    if (isLoggedIn) {
      navigate("/join-room");
    } else navigate("/login");
  };

  const handleRoomCreation = (e) => {
    e.preventDefault();
    if (isInRoom) {
      return;
    }
    if (isLoggedIn) {
      navigate("/room");
      roomDispatch({ type: "JOIN" });
    } else navigate("/login");
  };

  return (
    <div className="container">
      <button className="btn btn-land" onClick={handleJoinRoom}>
        Join Room
      </button>
      <button className="btn btn-land" onClick={handleRoomCreation}>
        Create Room
      </button>
      <Link className="btn btn-land" to="/library">
        View Songs Library
      </Link>
    </div>
  );
}
