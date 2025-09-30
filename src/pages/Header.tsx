import React from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const base = "font-semibold text-lg";
  const active = "underline underline-offset-4 decoration-white decoration-2";

  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between h-14">
          <li>
            {/* <Link
              to="/"
              className="font-semibold text-lg underline underline-offset-4 decoration-white decoration-2"
            >
              Home
            </Link> */}

            <NavLink
              to="/"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/about" className="font-semibold text-lg">
              About
            </Link> */}

            <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              About
            </NavLink>
          </li>
          <li>
            {/* <Link to="/contact" className="font-semibold text-lg">
              Contact
            </Link> */}

            <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
