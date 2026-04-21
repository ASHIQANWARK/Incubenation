import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Logo from "../assets/images/incubenation1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61572794128072",
      bg: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/incubenation",
      bg: "hover:bg-pink-600",
    },
    {
      icon: FaX,
      href: "https://x.com/Incubenation",
      bg: "hover:bg-black",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/incubenation",
      bg: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6 h-full">
              <img
                src={Logo}
                alt="IncubeNation Logo"
                className="w-32 sm:w-36 h-auto object-contain mb-4"
              />

              <p className="text-slate-300 text-sm sm:text-base leading-7 max-w-md mb-6">
                Transforming ideas into successful ventures through innovative incubation solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#ffab00] mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-sm leading-6">
                    Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560068
                  </span>
                </div>

                <div className="flex items-center gap-3">
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

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Programs */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">
                Our Programs
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link
                  to="/online"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm py-2"
                >
                  Online Incubation
                </Link>
                <Link
                  to="/center"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm py-2"
                >
                  Center Incubation
                </Link>
                <Link
                  to="/business"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm py-2"
                >
                  Business Incubation
                </Link>
                <Link
                  to="/campus"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm py-2"
                >
                  Campus Incubation
                </Link>
              </div>
            </div>

            {/* Connect / Legal */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-white">
                Connect With Us
              </h3>

              {/* Social */}
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:scale-105 ${social.bg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>

              {/* Legal */}
              <div className="space-y-2.5">
                <Link
                  to="/privacypolicy"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/termsandconditions"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/refundpolicy"
                  className="text-slate-300 hover:text-[#ffab00] transition duration-300 text-sm block"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-slate-400 text-xs sm:text-sm">
            © 2025 Ique Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;