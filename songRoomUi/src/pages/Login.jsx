import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { handleLogin } = useAuth();

  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form
          handleSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        ></Form>
      </main>
    </>
  );
}
