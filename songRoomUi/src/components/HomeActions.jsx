import { Link } from "react-router-dom";

export function HomeActions() {
  return (
    <div className="container">
      <Link className="btn btn-land" to="/room">
        Join Room
      </Link>
      <Link className="btn btn-land" to="/room">
        Create Room
      </Link>
      <Link className="btn btn-land" to="/library">
        View Songs Library
      </Link>
    </div>
  );
}
