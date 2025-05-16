import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar({ toggle, setToggle }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className={`navbar ${toggle ? "show" : ""}`}>
      <ul className="navlinks">
        <Link to="/" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-house"></i>Home
        </Link>

        <Link to="/posts" onClick={() => setToggle(false)} className="nav-link">
          <i className="bi bi-stickies"></i>Posts
        </Link>

        {user && (
          <Link
            to="/posts/create-post"
            onClick={() => setToggle(false)}
            className="nav-link"
          >
            <i className="bi bi-journal-plus"></i>Create
          </Link>
        )}

        {user?.isAdmin && (
          <Link
            to="/admin-dashoard"
            onClick={() => setToggle(false)}
            className="nav-link"
          >
            <i className="bi bi-person-gear"></i>Admin Dashboard
          </Link>
        )}
      </ul>
    </nav>
  );
}
