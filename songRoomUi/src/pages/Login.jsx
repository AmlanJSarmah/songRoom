import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
    navigate("/");
  };

  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form handleSubmit={handleLogin}></Form>
      </main>
    </>
  );
}
