import { Link } from "react-router-dom";

export function SongLibrary() {
  return (
    <main>
      <h1 id="title">Song Buddy</h1>
      <div class="container">
        <Link class="lib" to="/room">
          Fleetwood Mac : The Chain
        </Link>
        <Link class="lib" to="/room">
          Pink Floyd: Comfortably Numb
        </Link>
        <Link class="lib" to="/room">
          Led Zepplin: Kashmir
        </Link>
      </div>
    </main>
  );
}
