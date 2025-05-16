import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ categories }) {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title"> Categories </h5>
      <ul className="sidebar-links">
        {categories.map((category) => (
          <Link
            className="sidebar-link"
            key={category._id}
            to={`/posts/categories/${category.title}`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
