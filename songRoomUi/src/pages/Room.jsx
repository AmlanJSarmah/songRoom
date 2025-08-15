import { Song } from "../components/Song";
import { Nav } from "../components/Nav";
import { Chat } from "../components/Chat";
import { Link } from "react-router-dom";

export function Room() {
  return (
    <>
      <Nav />
      <main>
        <Song />
        <Chat />
        <Link to="/library" className="btn">
          Browse Library
        </Link>
      </main>
    </>
  );
}
