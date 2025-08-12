import { Link } from "react-router-dom";

export function Landing() {
  return (
    <main>
      <h1 id="title">Song Buddy</h1>
      <div class="container">
        <Link class="btn btn-land" to="/room">
          Join Room
        </Link>
        <Link class="btn btn-land" to="/room">
          Create Room
        </Link>
        <Link class="btn btn-land" to="/library">
          Add Song to Library
        </Link>
      </div>
    </main>
  );
}
