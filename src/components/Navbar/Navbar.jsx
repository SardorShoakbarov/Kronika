import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Bosh Sahifa",
    link: "/#",
  },
  {
    id: 2,
    name: "Yangiliklar",
    link: "/#services",
  },
  {
    id: 3,
    name: "Loyihalar",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Biz haqimizda",
    link: "/#about",
  },
  {
    id: 5,
    name: "Aloqa",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-10" />
              <span className="hidden sm:inline">Shopsy</span>
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="sm:hidden text-gray-700 dark:text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          {/* Desktop search and buttons */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Qidiruv"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:opacity-90 transition-opacity duration-200"
            >
              <span className="hidden group-hover:inline-block transition-all duration-200">
                Kirish
              </span>
              <FaSignInAlt className="text-xl text-white drop-shadow-sm" />
            </button>

            <DarkMode />
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`sm:hidden bg-white dark:bg-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="py-3 px-4 flex flex-col space-y-3">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="px-4 py-2">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 dark:text-gray-300">Mavzu:</span>
              <DarkMode mobile />
            </div>
          </li>
        </ul>
      </div>

      {/* Desktop lower Navbar */}
      <div className="hidden sm:flex justify-center bg-white dark:bg-gray-900">
        <ul className="flex items-center gap-1">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-5 py-3 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;