import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import logo from "../assets/images/incubenation1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const onlineLinkRef = useRef(null);

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isOpen) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const handleOnlineClick = (e) => {
    // If it's a double click, navigate to /online
    if (e.detail === 2) {
      closeAllMenus();
      // Navigation will be handled by the Link component
      return;
    }
    
    // If it's a single click, toggle the nested dropdown
    e.preventDefault();
    e.stopPropagation();
    setIsProgramsOpen(!isProgramsOpen);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsProgramsOpen(false);
    setIsMobileProgramsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#061428] py-3 shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Left side links - Desktop */}
        <div className="hidden lg:flex items-center space-x-9 pl-38">
          <Link 
            to="/" 
            className="text-white hover:text-cyan-300 font-medium transition-all duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-cyan-300 font-medium transition-all duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link 
            to="/career" 
            className="text-white hover:text-cyan-300 font-medium transition-all duration-300 transform hover:scale-105"
          >
            Career
          </Link>
        </div>

        {/* Centered Logo */}
        <div className="flex items-center z-50 absolute left-1/2 transform -translate-x-1/2  ">
          <Link to="/" aria-label="Go to homepage" className="transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Incubenation Logo" className="h-10 lg:h-12" />
          </Link>
        </div>

        {/* Right side links - Desktop */}
        <div className="hidden lg:flex items-left space-x-9 ml-auto pr-38">
          {/* Dropdown for Programs */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white hover:text-cyan-300 flex items-center font-medium transition-all duration-300 transform hover:scale-105"
              onClick={toggleDropdown}
            >
              Programs
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                size={14}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-4 w-64 bg-black/95 backdrop-blur-xl rounded-2xl py-4 z-20 border border-cyan-500/20 shadow-2xl animate-fadeIn">
                {/* Online Programs with nested dropdown - Double click functionality */}
                <div className="relative group">
                  <Link
                    ref={onlineLinkRef}
                    to="/online"
                    onClick={handleOnlineClick}
                    className="flex items-center justify-between px-5 py-3 text-white hover:bg-cyan-500/10 cursor-pointer transition-all duration-300 rounded-lg mx-2"
                    title="Double click to go to Online page"
                  >
                    <span className="font-medium">Incubenation Online</span>
                    <FaChevronRight
                      className={`transition-transform duration-300 ${
                        isProgramsOpen ? "rotate-90" : ""
                      }`}
                      size={12}
                    />
                  </Link>

                  {/* Nested Dropdown */}
                  {isProgramsOpen && (
                    <div
                      className="absolute right-full top-0 ml-2 w-72 bg-black/95 backdrop-blur-xl rounded-2xl py-4 z-30 border border-cyan-500/20 shadow-2xl animate-slideInRight"
                      onMouseEnter={() => setIsProgramsOpen(true)}
                      onMouseLeave={() => setIsProgramsOpen(false)}
                    >
                      <div className="px-5 py-3 text-cyan-300 text-sm font-semibold border-b border-cyan-500/20 mb-2">
                        Program Durations
                      </div>
                      <Link
                        to="/online#foundation"
                        onClick={closeAllMenus}
                        className="block w-full text-right px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2"
                      >
                        Founder's Foundation (3 months)
                      </Link>
                      <Link
                        to="/online#edge"
                        onClick={closeAllMenus}
                        className="block w-full text-left px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2"
                      >
                        Founder's Edge (6 months)
                      </Link>
                      <Link
                        to="/online#mastery"
                        onClick={closeAllMenus}
                        className="block w-full text-left px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2"
                      >
                        Founder's Mastery (12 months)
                      </Link>
                    </div>
                  )}
                </div>

                {/* Other program links */}
                {["center", "campus", "business"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={closeAllMenus}
                    className="block px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2 font-medium"
                  >
                    Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/blog" 
            className="text-white hover:text-cyan-300 font-medium transition-all duration-300 transform hover:scale-105"
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-cyan-300 font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50 ml-auto">
          <button
            onClick={toggleMenu}
            className={`text-white p-3 rounded-2xl transition-all duration-300 ${
              scrolled ? "bg-cyan-500/20 backdrop-blur-lg" : "bg-black/20 backdrop-blur-lg"
            } transform hover:scale-110`}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 pt-24 px-6 pb-10 transition-all duration-500 ease-in-out ${
          isOpen 
            ? "bg-[#061428] opacity-100 backdrop-blur-xl" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center h-full justify-start mt-8">
          <Link 
            onClick={closeAllMenus} 
            to="/" 
            className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
          >
            Home
          </Link>
          
          <Link 
            onClick={closeAllMenus} 
            to="/about" 
            className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
          >
            About
          </Link>

          {/* Mobile Programs Dropdown */}
          <div className="border-b border-cyan-500/20 pb-4">
            <button
              onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
              className="text-white text-2xl py-4 flex items-center justify-center w-full font-medium transition-all duration-300 hover:text-cyan-300"
            >
              Programs
              <FaChevronDown
                className={`ml-3 transition-transform duration-300 ${
                  isMobileProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${
              isMobileProgramsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="space-y-4 mt-4 bg-black/30 rounded-2xl py-6 px-4">
                <Link
                  to="/online"
                  onClick={closeAllMenus}
                  className="block py-3 text-white hover:text-cyan-300 text-xl font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Incubenation Online
                </Link>

                {["center", "campus", "business"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={closeAllMenus}
                    className="block py-3 text-white hover:text-cyan-300 text-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Incubenation {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            onClick={closeAllMenus} 
            to="/blog" 
            className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
          >
            Blog
          </Link>
          
          <Link 
            onClick={closeAllMenus} 
            to="/career" 
            className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
          >
            Career
          </Link>
          
          <Link 
            onClick={closeAllMenus} 
            to="/contact" 
            className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;