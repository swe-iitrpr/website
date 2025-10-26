import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-purple-700 text-white px-3 py-1 rounded-md text-lg font-bold">SWE</div>
          <span className="font-semibold text-gray-800 text-lg">
            Society of Women Engineers
          </span>
        </div>

        <div className="flex space-x-8 text-gray-700 font-medium">
          <a href="#who" className="hover:text-purple-700 transition">About</a>
          <a href="#mission" className="hover:text-purple-700 transition">Mission</a>
          <a href="#events" className="hover:text-purple-700 transition">Events</a>
          <a href="#contact" className="hover:text-purple-700 transition">Contact</a>
          <a
            href="#core-team"
            className="ml-4 px-4 py-1 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Core Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
