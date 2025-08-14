import { Nav } from "../components/Nav";
import { HomeActions } from "../components/HomeActions";

export function Home() {
  return (
    <>
      <Nav isLoggedIn={false} isInRoom={false} />
      <main>
        <h1 id="title">songBuddy</h1>
        <HomeActions />
      </main>
    </>
  );
}
