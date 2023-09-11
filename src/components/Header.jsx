import React, { useState } from "react";
import { images } from "../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="font-roboto bg-white shadow-md">
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-16" src={images.Logo} alt="logo" />
          <span className="text-black font-semibold">Health and Wellness</span>
        </div>
        <nav className="hidden lg:flex space-x-4 font-semibold text-black">
          {/* Navigation links */}
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/" className="hover:underline">
            About
          </a>
          <a href="/" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
            Login
          </a>
          <a href="/" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
            Register
          </a>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-6 bg-white border rounded-lg shadow-md p-4">
              {/* Mobile app drawer content */}
              <ul className="space-y-2">
                <li>
                  <a href="/" className="block text-gray-600 hover:text-gray-900 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="block text-gray-600 hover:text-gray-900 transition duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
