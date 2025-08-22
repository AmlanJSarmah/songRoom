import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

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
      return { ...state, isLoggedIn: true, user: userData[0] };
    default:
      return { ...state };
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ ...state, handleLogin: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
