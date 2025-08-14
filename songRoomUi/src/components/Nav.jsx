import { Link } from "react-router-dom";

export function Nav({ isInRoom, isLoggedIn }) {
  return (
    <nav>
      {/* If user in Room */}
      {isInRoom ? (
        <Link className="btn-exit" to="/">
          End Room
        </Link>
      ) : (
        <></>
      )}

      {/* If User Not logged in */}
      {!isLoggedIn ? (
        <Link className="btn-login" to="/login">
          Login
        </Link>
      ) : (
        <></>
      )}

      <h2>songBuddy</h2>
    </nav>
  );
}
