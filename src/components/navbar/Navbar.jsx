import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col md:flex-row md:items-center p-4 bg-blue-500 text-white shadow-md z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
          <span className="text-2xl font-bold text-white">Profile Map</span>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0 md:flex-row md:ml-auto md:space-x-4`}>
        <Link to="/" className="block md:inline text-lg font-bold text-white hover:text-gray-300 mb-2 md:mb-0">
          Home
        </Link>
        <Link to="/profiles" className="block md:inline text-lg font-bold text-white hover:text-gray-300 mb-2 md:mb-0">
          Profiles
        </Link>
        <Link to="/admin" className="block md:inline text-lg font-bold text-white hover:text-gray-300">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
