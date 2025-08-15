import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";

export function Login() {
  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form></Form>
      </main>
    </>
  );
}
