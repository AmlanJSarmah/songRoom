import { createContext, useContext, useReducer } from "react";

// Dummy user data
export const userData = [
  { username: "AJ", password: "ABC" },
  { username: "Parie", password: "XYZ" },
];

const initialState = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    default:
      return { ...state };
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
