import { Song } from "../components/Song";
import { Nav } from "../components/Nav";
import { Chat } from "../components/Chat";

export function Room() {
  return (
    <main>
      <Nav />
      <Song />
      <Chat />
      <button className="btn">Browse Library</button>
    </main>
  );
}
