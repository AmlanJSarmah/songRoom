import { Link } from "react-router-dom";

export function SongLibrary() {
  return (
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
  );
}
