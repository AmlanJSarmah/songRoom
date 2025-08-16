import { createContext, useContext, useReducer } from "react";

const initialState = {
  isInRoom: false,
  roomCreator: null,
};

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RoomContext.Provider value={{ ...state }}>{children}</RoomContext.Provider>
  );
}

export const useRoom = () => useContext(RoomContext);
