import { Link } from "react-router-dom";

export function SongLibrary() {
  return (
    <main>
      <h1 id="title">Song Buddy</h1>
      <div className="container">
        <Link className="lib" to="/room">
          Fleetwood Mac : The Chain
        </Link>
        <Link className="lib" to="/room">
          Pink Floyd: Comfortably Numb
        </Link>
        <Link className="lib" to="/room">
          Led Zepplin: Kashmir
        </Link>
      </div>
    </main>
  );
}
