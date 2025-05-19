import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/incubenation1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle functions
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when a link is clicked
  const closeDropdown = () => setIsDropdownOpen(false);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#061428] fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Incubenation Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>

          {/* Programs Dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-gray-300 flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              Programs <FaChevronDown className={`ml-1 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                {["center", "online", "campus", "business"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
          <Link to="/career" className="text-white hover:text-gray-300">Career</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-2 p-4">
            <Link onClick={closeMobileMenu} to="/" className="text-black hover:text-gray-700">Home</Link>
            <Link onClick={closeMobileMenu} to="/about" className="text-black hover:text-gray-700">About</Link>

            {/* Mobile Dropdown for Programs */}
            <div className="relative">
              <button onClick={toggleDropdown} className="text-black hover:text-gray-700 flex justify-between w-full">
                Programs <FaChevronDown className={`ml-1 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {["center", "online", "campus", "business"].map((item) => (
                    <Link
                      key={item}
                      to={`/${item}`}
                      onClick={() => { closeDropdown(); closeMobileMenu(); }}
                      className="block text-black hover:text-gray-700 text-left"
                    >
                      Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link onClick={closeMobileMenu} to="/blog" className="text-black hover:text-gray-700">Blog</Link>
            <Link onClick={closeMobileMenu} to="/career" className="text-black hover:text-gray-700">Career</Link>
            <Link onClick={closeMobileMenu} to="/contact" className="text-black hover:text-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
