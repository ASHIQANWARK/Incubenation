import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero1.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

// Program icons
import IncubationCenterIcon from "../assets/images/incubenation-DP-3.png";
import IncubationOnlineIcon from "../assets/images/incubenation-DP-3.png";
import IncubationCampusIcon from "../assets/images/incubenation-DP-3.png";
import BusinessSolutionsIcon from "../assets/images/incubenation-DP-3.png";

const focuses = [
  {
    title: "Incubation Center",
    description:
      "A physical ecosystem for founders to learn, collaborate, and build ventures with mentorship and startup support.",
    icon: IncubationCenterIcon,
    link: "/center",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Incubation Online",
    description:
      "A digital growth platform with mentorship, startup education, resources, and virtual business support.",
    icon: IncubationOnlineIcon,
    link: "/online",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Incubation Campus",
    description:
      "A campus innovation initiative connecting students, founders, and institutions with entrepreneurial opportunities.",
    icon: IncubationCampusIcon,
    link: "/campus",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Little Founders",
    description:
      "A future-ready entrepreneurship program for ages 10–18 to build creativity, confidence, and startup thinking.",
    icon: BusinessSolutionsIcon,
    link: "/young-founders",
    tag: "Coming Soon",
    gradient: "from-orange-500 to-amber-500",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61572794128072",
    label: "Facebook",
    hover: "hover:bg-blue-600",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/incubenation?igsh=MWRtbmxyZHNlYjhyMA==",
    label: "Instagram",
    hover: "hover:bg-pink-600",
  },
  {
    icon: FaX,
    href: "https://x.com/Incubenation",
    label: "X",
    hover: "hover:bg-black",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/incubenation",
    label: "LinkedIn",
    hover: "hover:bg-blue-700",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919035514812",
    label: "WhatsApp",
    hover: "hover:bg-green-600",
  },
];

const FocusCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl overflow-hidden">
        {/* Top Gradient Line */}
        <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.gradient}`}></div>

        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-10`}></div>

        {/* Tag */}
        {item.tag && (
          <span className="absolute top-4 right-4 text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium z-10 backdrop-blur-sm">
            {item.tag}
          </span>
        )}

        {/* Icon */}
        <div className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} p-2.5 shadow-lg`}>
          <img
            src={item.icon}
            alt={item.title}
            className="h-full w-full object-contain brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h3 className="relative mb-3 text-lg font-semibold leading-snug text-white">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative mb-6 text-sm leading-relaxed text-slate-300 flex-grow">
          {item.description}
        </p>

        {/* Button */}
        <Link
          to={item.link}
          className="relative inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:text-white group/btn"
        >
          Explore
          <ChevronRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.12) 0%, transparent 50%)`,
  };

  return (
    <>
      {/* HERO SECTION */}
      <section 
        className="relative overflow-hidden text-white min-h-[90vh] lg:min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-white/30" />
        
        {/* Mouse-following light effect */}
        <div className="absolute inset-0" style={backgroundStyle}></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.06),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.06),_transparent_50%)]" />

        {/* Animated Blur Shapes */}
        <div className="absolute -top-20 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse delay-700" />

        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                <Sparkles size={14} />
                Building the Future of Entrepreneurship
              </div>
            </motion.div>

            {/* Heading - Made Smaller */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] sm:leading-[1.15] tracking-tight mb-6"
            >
              Where
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}Ideas Begin,
              </span>
              <br className="hidden sm:block" />
              Startups
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {" "}Grow,
              </span>
              <br className="hidden sm:block" />
              and Founders
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                {" "}Rise.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-200/90"
            >
              IncubeNation is a next-generation startup ecosystem designed to
              empower entrepreneurs, students, young founders, and innovators
              through physical incubation, digital learning, and campus-driven
              opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Connect With Us
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 sm:px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Explore IncubeNation
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 sm:mt-12"
            >
              <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Connect Socially
              </p>

              <div className="flex justify-center gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${social.hover} hover:border-transparent`}
                  >
                    <social.icon className="text-xs sm:text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-500/8 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-violet-500/8 blur-3xl rounded-full" />
          <div className="absolute top-1/3 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/8 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              Our Programs
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white mb-4">
              Designed for Every
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Stage of Innovation
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              From young innovators to startup founders, our ecosystem is
              built to support ideas, growth, and real-world impact.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {focuses.map((item, index) => (
                <FocusCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-xs sm:text-sm text-slate-400 mt-6 sm:mt-8"
          >
            All programs include mentorship, resources, and community support
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Hero;