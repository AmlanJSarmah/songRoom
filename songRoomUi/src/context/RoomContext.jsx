import { createContext, useContext, useReducer } from "react";

const initialState = {
  isInRoom: false,
  roomCreator: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "JOIN":
      return { ...state, isInRoom: true };
    case "EXIT":
      return { ...state, isInRoom: false };
    default:
      return { ...state };
  }
};

const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RoomContext.Provider value={{ ...state, roomDispatch: dispatch }}>
      {children}
    </RoomContext.Provider>
  );
}

export const useRoom = () => useContext(RoomContext);
