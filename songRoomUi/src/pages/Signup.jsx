import { Nav } from "../components/Nav";
import { Form } from "../components/LoginSignUpForm";

export function SignUp() {
  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy</h1>
        <Form
          handleSubmit={(e) => {
            e.preventDefault();
          }}
        ></Form>
      </main>
    </>
  );
}
