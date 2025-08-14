import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";

export function SignUp() {
  return (
    <>
      <Nav isInRoom={false} isLoggedIn={false} />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form></Form>
      </main>
    </>
  );
}
