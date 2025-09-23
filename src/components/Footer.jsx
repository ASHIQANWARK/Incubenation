import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Logo from "../assets/images/incubenation1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left Section - Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <img
                src={Logo}
                alt="IncubeNation Logo"
                className="w-36 h-auto object-contain mb-4"
              />
              <p className="text-gray-300 text-sm mb-6">
                Transforming ideas into successful ventures through innovative incubation solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#ffab00] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Koramangala, Bengaluru, Karnataka 560095
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#ffab00] flex-shrink-0" />
                  <a
                    href="mailto:contactus@incubenation.com"
                    className="text-[#ffab00] hover:underline text-sm"
                  >
                    contactus@incubenation.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Programs Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-[#ffab00]">Our Programs</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/online"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm p-2 rounded-lg hover:bg-white/5"
                >
                  Online Incubation
                </Link>
                <Link
                  to="/center"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm p-2 rounded-lg hover:bg-white/5"
                >
                  Center Incubation
                </Link>
                <Link
                  to="/business"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm p-2 rounded-lg hover:bg-white/5"
                >
                  Business Incubation
                </Link>
                <Link
                  to="/campus"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm p-2 rounded-lg hover:bg-white/5"
                >
                  Campus Incubation
                </Link>
              </div>
            </div>

            {/* Legal & Social Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-[#ffab00]">Connect With Us</h3>
              
              {/* Social Media */}
              <div className="flex space-x-3 mb-6">
                {[
                  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61572794128072", color: "bg-blue-600" },
                  { icon: FaInstagram, href: "https://www.instagram.com/incubenation", color: "bg-pink-600" },
                  { icon: FaX, href: "https://x.com/Incubenation", color: "bg-black" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/company/incubenation", color: "bg-blue-800" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} p-2 rounded-full transition duration-300 hover:scale-110`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="space-y-2">
                <Link
                  to="/privacypolicy"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/termsandconditions"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/refundpolicy"
                  className="text-gray-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="bg-black/50 py-4 text-center border-t border-white/10">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;