import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRoom } from "../context/RoomContext";

export function JoinRoomForm() {
  const [formData, setFormData] = useState("");
  const { roomDispatch } = useRoom();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    roomDispatch({ type: "JOIN" });
    navigate("/room");
  };

  return (
    <div className="container">
      <h1>Join Room</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room ID"
          onChange={handleChange}
          value={formData}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
