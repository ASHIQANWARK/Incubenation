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
    { to: "/zerotohundered", name: "Founders Program" },
  ];

  const rightNavLinks = [
    { to: "/career", name: "Career" },
  ];

  const programLinks = [
    { to: "/center", name: "Center" },
    { to: "/online", name: "Online" },
    { to: "/campus", name: "Campus" },
    { to: "/littlefounders", name: "Little Founders" },
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
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {leftNavLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.to} 
              className="relative text-white font-medium transition-all duration-300 group whitespace-nowrap"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Centered Logo - Perfectly centered using flex */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link 
            to="/" 
            aria-label="Go to homepage" 
            className="transition-transform duration-300 hover:scale-105 flex items-center justify-center"
            onClick={() => handleLinkClick("Home")}
          >
            <img src={logo} alt="Incubenation Logo" className="h-10 lg:h-12 w-auto" />
          </Link>
        </div>

        {/* Right side links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 ml-auto">
          {/* Programs Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="relative text-white hover:text-cyan-300 flex items-center font-medium transition-all duration-300 group whitespace-nowrap"
              onClick={toggleDropdown}
            >
              Programs
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                size={12}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-4 w-64 bg-black/95 backdrop-blur-xl rounded-2xl py-3 z-20 border border-cyan-500/20 shadow-2xl animate-fadeIn">
                {programLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeAllMenus}
                    className="block px-5 py-2.5 text-white hover:bg-cyan-500/10 transition-all duration-300 mx-2 rounded-lg font-medium relative group"
                  >
                    <span className="relative z-10">Incubenation {item.name}</span>
                    <span className="absolute inset-0 bg-cyan-500/0 rounded-lg transition-all duration-300 group-hover:bg-cyan-500/10"></span>
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
              className="relative text-white font-medium transition-all duration-300 group whitespace-nowrap"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Contact Link - Button style */}
          <Link 
            to="/contact" 
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-5 py-1.5 font-medium transition-all duration-300 transform hover:scale-105 hover:border-cyan-300 hover:text-cyan-300 rounded-lg whitespace-nowrap"
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className={`text-white p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? "bg-cyan-500/20 backdrop-blur-lg" : "bg-black/20 backdrop-blur-lg"
            } transform hover:scale-110`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 pt-24 px-6 pb-10 transition-all duration-500 ease-in-out overflow-y-auto ${
          isOpen 
            ? "bg-[#061428] opacity-100 visible" 
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          {/* Regular mobile links */}
          {mobileNavLinks.map((link) => (
            <Link 
              key={link.name}
              onClick={() => handleLinkClick(link.name)} 
              to={link.to} 
              className="text-white text-xl py-3 font-medium transition-all duration-300 transform hover:scale-105 hover:text-cyan-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-2 left-1/4 right-1/4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}

          {/* Mobile Programs Dropdown */}
          <div className="border-t border-cyan-500/20 pt-4">
            <button
              onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
              className="text-white text-xl py-3 flex items-center justify-center w-full font-medium transition-all duration-300 hover:text-cyan-300 relative group"
            >
              Programs
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  isMobileProgramsOpen ? "rotate-180" : ""
                }`}
                size={14}
              />
              <span className="absolute bottom-2 left-1/4 right-1/4 h-0.5 bg-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${
              isMobileProgramsOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}>
              <div className="space-y-2 bg-black/30 rounded-xl py-4 px-4">
                {programLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeAllMenus}
                    className="block py-2.5 text-white hover:text-cyan-300 text-base font-medium transition-all duration-300"
                  >
                    Incubenation {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact in mobile */}
          <Link 
            to="/contact" 
            onClick={() => handleLinkClick("Contact")}
            className="border-2 border-cyan-500 text-white bg-transparent hover:bg-cyan-500/20 px-6 py-2.5 font-medium transition-all duration-300 rounded-lg inline-block mx-auto mt-4"
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;