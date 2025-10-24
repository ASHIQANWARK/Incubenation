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
  const [activeLink, setActiveLink] = useState("");
  
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
    if (e.detail === 2) {
      closeAllMenus();
      return;
    }
    
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

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    closeAllMenus();
  };

  // Navigation data
  const leftNavLinks = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
  ];

  const rightNavLinks = [
    { to: "/career", name: "Career" },
  ];

  const programLinks = [
    { to: "/center", name: "Center" },
    { to: "/campus", name: "Campus" },
    { to: "/business", name: "Business" },
  ];

  const onlineProgramLinks = [
    { to: "/online#foundation", text: "Founder's Foundation (3 months)" },
    { to: "/online#edge", text: "Founder's Edge (6 months)" },
    { to: "/online#mastery", text: "Founder's Mastery (12 months)" },
  ];

  const mobileNavLinks = [
    ...leftNavLinks,
    ...rightNavLinks,
    { to: "/contact", name: "Contact" },
  ];

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
        <div className="hidden lg:flex items-center space-x-9 pl-88">
          {leftNavLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.to} 
              className="relative text-white font-medium transition-all duration-300 group"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-500 group-hover:w-full group-hover:delay-100"></span>
            </Link>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex items-center z-50 absolute left-1/2 transform -translate-x-1/2">
          <Link 
            to="/" 
            aria-label="Go to homepage" 
            className="transition-transform duration-300 hover:scale-105"
            onClick={() => handleLinkClick("Home")}
          >
            <img src={logo} alt="Incubenation Logo" className="h-10 lg:h-12" />
          </Link>
        </div>

        {/* Right side links - Desktop */}
        <div className="hidden lg:flex items-center space-x-9 ml-auto pr-38">
          {/* Programs Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="relative text-white hover:text-cyan-300 flex items-center font-medium transition-all duration-300 group"
              onClick={toggleDropdown}
            >
              Programs
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                size={14}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-500 group-hover:w-full group-hover:delay-100"></span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-4 w-64 bg-black/95 backdrop-blur-xl rounded-2xl py-4 z-20 border border-cyan-500/20 shadow-2xl animate-fadeIn">
                {/* Online Programs with nested dropdown */}
                <div className="relative group">
                  <Link
                    ref={onlineLinkRef}
                    to="/online"
                    onClick={handleOnlineClick}
                    className="flex items-center justify-between px-5 py-3 text-white hover:bg-cyan-500/10 cursor-pointer transition-all duration-300 rounded-lg mx-2 relative group"
                    title="Double click to go to Online page"
                  >
                    <span className="font-medium">Incubenation Online</span>
                    <FaChevronRight
                      className={`transition-transform duration-300 ${
                        isProgramsOpen ? "rotate-90" : ""
                      }`}
                      size={12}
                    />
                    <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>

                  {/* Nested Dropdown */}
                  {isProgramsOpen && (
                    <div className="absolute right-full top-0 ml-2 w-72 bg-black/95 backdrop-blur-xl rounded-2xl py-4 z-30 border border-cyan-500/20 shadow-2xl animate-slideInRight">
                      <div className="px-5 py-3 text-cyan-300 text-sm font-semibold border-b border-cyan-500/20 mb-2">
                        Program Durations
                      </div>
                      {onlineProgramLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeAllMenus}
                          className="block w-full text-left px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2 relative group"
                        >
                          {item.text}
                          <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other program links */}
                {programLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeAllMenus}
                    className="block px-5 py-3 text-white hover:bg-cyan-500/10 transition-all duration-300 rounded-lg mx-2 font-medium relative group"
                  >
                    Incubenation {item.name}
                    <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right side navigation links */}
          {rightNavLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.to} 
              className="relative text-white font-medium transition-all duration-300 group"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-500 group-hover:w-full group-hover:delay-100"></span>
            </Link>
          ))}
          
          {/* Contact Link */}
          <Link 
            to="/contact" 
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-6 py-1 font-medium transition-all duration-300 transform hover:scale-105 hover:border-cyan-300 hover:text-cyan-300 rounded-lg"
            onClick={() => handleLinkClick("Contact")}
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
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 pt-24 px-6 pb-10 transition-all duration-500 ease-in-out overflow-y-auto ${
          isOpen 
            ? "bg-[#061428] opacity-100 backdrop-blur-xl" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center h-full justify-start mt-8">
          {/* Regular mobile links */}
          {mobileNavLinks.map((link) => (
            <Link 
              key={link.name}
              onClick={() => handleLinkClick(link.name)} 
              to={link.to} 
              className="text-white text-2xl py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-3 left-1/4 right-1/4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}

          {/* Mobile Programs Dropdown */}
          <div className="border-b border-cyan-500/20 pb-4">
            <button
              onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
              className="text-white text-2xl py-4 flex items-center justify-center w-full font-medium transition-all duration-300 hover:text-cyan-300 relative group"
            >
              Programs
              <FaChevronDown
                className={`ml-3 transition-transform duration-300 ${
                  isMobileProgramsOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-3 left-1/4 right-1/4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${
              isMobileProgramsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="space-y-4 mt-4 bg-black/30 rounded-2xl py-6 px-4">
                <Link
                  to="/online"
                  onClick={closeAllMenus}
                  className="block py-3 text-white hover:text-cyan-300 text-xl font-medium transition-all duration-300 transform hover:scale-105 relative group"
                >
                  Incubenation Online
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>

                {programLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeAllMenus}
                    className="block py-3 text-white hover:text-cyan-300 text-xl font-medium transition-all duration-300 transform hover:scale-105 relative group"
                  >
                    Incubenation {item.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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