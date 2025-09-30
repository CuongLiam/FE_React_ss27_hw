import React from "react";
import { NavLink } from "react-router";

const Header: React.FC = () => {
  const base = "font-semibold text-lg";
  const active = "underline underline-offset-4 decoration-white decoration-2";

  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between h-14">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
