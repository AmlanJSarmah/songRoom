import { Nav } from "../components/Nav";
import { SongLibrary } from "../components/SongLibrary";

export function Library() {
  return (
    <>
      <Nav />
      <main>
        <h1 id="title">songBuddy Library</h1>
        <SongLibrary />
      </main>
    </>
  );
}
