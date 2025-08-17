import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

//Dummy Room Data
const roomData = {
  creator: "AJ",
  code: "AXBYCZ",
  active: false,
};

const initialState = {
  isInRoom: false,
  room: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      roomData.active = true;
      return { ...state, isInRoom: true, room: roomData };
    case "JOIN":
      return { ...state, isInRoom: true, room: roomData };
    case "EXIT":
      roomData.active = false;
      return { ...state, isInRoom: false, room: null };
    default:
      return { ...state };
  }
};

const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    dispatch({ type: "CREATE" });
    navigate("/room");
  };

  const handleJoinRoom = (code) => {
    if (roomData.active && code === roomData.code) {
      dispatch({ type: "JOIN" });
      navigate("/room");
    }
  };

  const handleExitRoom = () => {
    dispatch({ type: "EXIT" });
    navigate("/");
  };

  return (
    <RoomContext.Provider
      value={{
        ...state,
        handleJoinRoom: handleJoinRoom,
        handleCreateRoom: handleCreateRoom,
        handleExitRoom: handleExitRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export const useRoom = () => useContext(RoomContext);
