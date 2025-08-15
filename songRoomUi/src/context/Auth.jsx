import { createContext, useContext, useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  isInRoom: false,
};

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
