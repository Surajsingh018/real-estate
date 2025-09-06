import React from "react";
import { Link } from "react-router-dom";
import { CogIcon } from "@heroicons/react/24/outline"; // optional icon

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left brand */}
        <Link to="/" className="text-xl font-bold">
          Propy Cons
        </Link>

        {/* Center nav */}
        <nav className="flex-1 flex justify-center space-x-6 text-sm font-medium">
          <Link className="text-gray-700 hover:text-black" to="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-black" to="/properties">
            Properties
          </Link>
          <Link className="text-gray-700 hover:text-black" to="/account/dashboard">
            Dashboard
          </Link>
          <Link className="text-gray-700 hover:text-black" to="/about">
            About
          </Link>
        </nav>

        {/* Right auth buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="text-sm font-medium border border-gray-400 text-gray-700 px-4 py-1.5 rounded hover:border-gray-600 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}