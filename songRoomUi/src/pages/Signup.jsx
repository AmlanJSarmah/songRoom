import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";

export function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form handleSubmit={handleSignUp}></Form>
      </main>
    </>
  );
}
