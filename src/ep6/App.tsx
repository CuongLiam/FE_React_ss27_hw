import React from "react";
import RouterSetup from "./RouterSetup";
import { NavLink } from "react-router";

export default function App() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
      isActive
        ? "bg-sky-500 text-white shadow-md"
        : "text-gray-600 hover:bg-sky-100 hover:text-sky-600"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex space-x-6 mt-10 mb-8 bg-white shadow-lg rounded-xl px-8 py-4 border border-sky-100">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/detail" className={navLinkClass}>
          Detail    
        </NavLink>
        <NavLink to="/product" className={navLinkClass}>
          Product
        </NavLink>
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <RouterSetup />
      </div>
    </div>
  );
}
