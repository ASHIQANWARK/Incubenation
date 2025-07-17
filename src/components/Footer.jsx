import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Logo from "../assets/images/incubenation1.png"; // Adjust the path as needed
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="IncubeNation Logo"
            className="w-32 h-auto object-contain"
          />
        </div>

        {/* Column 2: Address, Email, Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-gray-300">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala,
            Bengaluru, Karnataka 560095
          </p>
          <p className="text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:contactus@incubenation.com"
              className="text-[#ffab00] hover:underline"
            >
              contactus@incubenation.com
            </a>
          </p>
          <p className="text-gray-300 mt-2 space-x-2">
            <Link
              to="/privacypolicy"
              className="text-[#ffab00] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/termsandconditions"
              className="text-[#ffa600] hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link to="/refundpolicy" className="text-[#ffab00] hover:underline">
              Refund Policy
            </Link>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61572794128072"
              aria-label="Facebook"
              className="text-[#1358f9] transition duration-300 hover:scale-110 hover:opacity-80"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/incubenation?igsh=MWRtbmxyZHNlYjhyMA=="
              aria-label="Instagram"
              className="text-[#e82323] transition duration-300 hover:scale-110 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/Incubenation"
              aria-label="X"
              className="text-[#2bf00c] transition duration-300 hover:scale-110 hover:opacity-80"
            >
              <FaX size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/incubenation"
              aria-label="LinkedIn"
              className="text-[#1358f9] transition duration-300 hover:scale-110 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Location */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="IncubeNation Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.002589143043!2d77.61409347585729!3d12.932496587385235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151ec56f90a9%3A0xb9777b5aacf2cf0d!2sINCUBENATION%20By%20IQUE!5e0!3m2!1sen!2sin!4v1721206563000!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
