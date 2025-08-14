import { Nav } from "../components/Nav";
import { SongLibrary } from "../components/SongLibrary";

export function Library() {
  return (
    <>
      <Nav isLoggedIn={true} isInRoom={true} />
      <main>
        <h1 id="title">songBuddy Library</h1>
        <SongLibrary />
      </main>
    </>
  );
}
