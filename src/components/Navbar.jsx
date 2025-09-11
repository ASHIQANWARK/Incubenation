import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import logo from "../assets/images/incubenation1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle handlers
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    setIsProgramsOpen(false);
  };
  
  const toggleProgramsDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProgramsOpen(!isProgramsOpen);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsProgramsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#061428]/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left side links - positioned near center */}
        <div className="hidden md:flex items-center space-x-9 absolute left-1/5 ">
          <Link to="/" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
            About
          </Link>
          <Link to="/career" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
            Career
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="flex items-center z-50 mx-auto">
          <a href="/" aria-label="Go to homepage">
            <img src={logo} alt="Incubenation Logo" className="h-12" />
          </a>
        </div>

        {/* Right side links - positioned near center */}
        <div className="hidden md:flex items-center space-x-9 absolute right-1/5">
          {/* Dropdown for Programs */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white hover:text-cyan-300 flex items-center transition-colors duration-200 font-medium"
              onClick={toggleDropdown}
            >
              Programs{" "}
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-md shadow-xl rounded-xl py-3 z-20 border border-white/10">
                {/* Online Programs with nested dropdown */}
                <div className="relative">
                  <Link
                    to="/online"
                    onClick={closeAllMenus}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setIsProgramsOpen(true);
                    }}
                  >
                    <span>Incubenation Online</span>
                    <FaChevronRight 
                      className={`transition-transform duration-200 ${isProgramsOpen ? "rotate-90" : ""}`} 
                      size={12} 
                    />
                  </Link>
                  
                  {isProgramsOpen && (
                    <div 
                      className="absolute left-full top-0 ml-1 w-60 bg-black/90 backdrop-blur-md shadow-xl rounded-xl py-3 z-30 border border-white/10"
                      onMouseEnter={() => setIsProgramsOpen(true)}
                      onMouseLeave={() => setIsProgramsOpen(false)}
                    >
                      <div className="px-4 py-2 text-white/70 text-sm border-b border-white/10">
                        Program Durations
                      </div>
                      <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                        Founder's Foundation (3 months)
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                        Founder's Edge (6 months)
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">
                        Founder's Mastery (12 months)
                      </button>
                    </div>
                  )}
                </div>

                {/* Other program links */}
                {["center", "campus", "business"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={closeAllMenus}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
            Blog
          </Link>
          
          <Link to="/contact" className="text-white hover:text-cyan-300 transition-colors duration-200 font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2 rounded-full bg-black/20 backdrop-blur-lg">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#061428]/95 backdrop-blur-lg z-40 pt-20 px-6 pb-10">
          <div className="flex flex-col space-y-4 text-center h-full justify-center">
            <Link onClick={closeAllMenus} to="/" className="text-white hover:text-cyan-300 text-xl font-medium py-2 transition-colors duration-200">
              Home
            </Link>
            <Link onClick={closeAllMenus} to="/about" className="text-white hover:text-cyan-300 text-xl font-medium py-2 transition-colors duration-200">
              About
            </Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="text-white hover:text-cyan-300 text-xl font-medium py-2 flex items-center justify-center w-full transition-colors duration-200"
              >
                Programs{" "}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {isProgramsOpen && (
                <div className="space-y-3 mt-2 bg-black/30 rounded-2xl py-4 mx-6">
                  {/* Online Programs - now a link that redirects */}
                  <Link
                    to="/online"
                    onClick={closeAllMenus}
                    className="block py-2 text-white hover:text-cyan-300 text-lg transition-colors duration-200"
                  >
                    Incubenation Online
                  </Link>

                  {/* Other program links */}
                  {["center", "campus", "business"].map((item) => (
                    <Link
                      key={item}
                      to={`/${item}`}
                      onClick={closeAllMenus}
                      className="block py-2 text-white hover:text-cyan-300 text-lg transition-colors duration-200"
                    >
                      Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link onClick={closeAllMenus} to="/blog" className="text-white hover:text-cyan-300 text-xl font-medium py-2 transition-colors duration-200">
              Blog
            </Link>
            <Link onClick={closeAllMenus} to="/career" className="text-white hover:text-cyan-300 text-xl font-medium py-2 transition-colors duration-200">
              Career
            </Link>
            <Link onClick={closeAllMenus} to="/contact" className="text-white hover:text-cyan-300 text-xl font-medium py-2 transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;