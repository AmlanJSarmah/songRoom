import { useState } from "react";
import { useRoom } from "../context/RoomContext";

export function JoinRoomForm() {
  const [formData, setFormData] = useState("");
  const { handleJoinRoom } = useRoom();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
  };

  return (
    <div className="container">
      <h1>Join Room</h1>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleJoinRoom(formData);
        }}
      >
        <input
          type="text"
          placeholder="Room ID"
          onChange={handleChange}
          value={formData}
          autoComplete="off"
          id="join"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
