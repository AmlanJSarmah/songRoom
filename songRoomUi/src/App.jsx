import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { Library } from "./pages/Library";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { JoinRoom } from "./pages/JoinRoom";
import {
  NotLoginProtectedRoutes,
  LoginProtectedRoutes,
  RoomProtectedRoutes,
} from "./routes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoomProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/join-room"
              element={
                <NotLoginProtectedRoutes>
                  <RoomProtectedRoutes>
                    <JoinRoom />
                  </RoomProtectedRoutes>
                </NotLoginProtectedRoutes>
              }
            ></Route>
            <Route
              path="/room"
              element={
                <NotLoginProtectedRoutes>
                  <Room />
                </NotLoginProtectedRoutes>
              }
            ></Route>
            <Route
              path="/library"
              element={
                <NotLoginProtectedRoutes>
                  <Library />
                </NotLoginProtectedRoutes>
              }
            ></Route>
            <Route
              path="/sign-up"
              element={
                <LoginProtectedRoutes>
                  <SignUp />
                </LoginProtectedRoutes>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <LoginProtectedRoutes>
                  <Login />
                </LoginProtectedRoutes>
              }
            ></Route>
          </Routes>
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
