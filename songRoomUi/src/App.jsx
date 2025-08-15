import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { Library } from "./pages/Library";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/room" element={<Room />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
