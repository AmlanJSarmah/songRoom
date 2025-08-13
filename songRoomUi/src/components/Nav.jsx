import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      {/* <!-- Appears only when we are in a room --> */}
      <Link className="btn-exit" to="/">
        End Room
      </Link>
      {/* <!-- Appears always --> */}
      <h2>songBuddy</h2>
    </nav>
  );
}
