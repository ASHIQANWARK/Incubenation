import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero5 (3).png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { ArrowRight, Sparkles } from "lucide-react";

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

  },
  {
    title: "Incubation Online",
    description:
      "A digital growth platform with mentorship, startup education, resources, and virtual business support.",
    icon: IncubationOnlineIcon,
    link: "/online",

  },
  {
    title: "Incubation Campus",
    description:
      "A campus innovation initiative connecting students, founders, and institutions with entrepreneurial opportunities.",
    icon: IncubationCampusIcon,
    link: "/campus",

  },
  {
    title: "Little Founders",
    description:
      "A future-ready entrepreneurship program for ages 10–18 to build creativity, confidence, and startup thinking.",
    icon: BusinessSolutionsIcon,
    link: "/young-founders",
    tag: "Coming Soon",
  
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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 sm:p-5 md:p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-xl overflow-hidden">
        {/* Top Gradient Line */}
        <div
          className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${item.color}`}
        ></div>

        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-10`}
        ></div>

        {/* Tag */}
        {item.tag && (
          <span className="absolute top-3 right-3 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-300 font-medium z-10">
            {item.tag}
          </span>
        )}

        {/* Icon */}
        <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
          <img
            src={item.icon}
            alt={item.title}
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="relative mb-2 text-base sm:text-lg font-semibold leading-snug text-white min-h-[48px]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative mb-5 text-sm leading-6 text-slate-300 flex-grow">
          {item.description}
        </p>

        {/* Button */}
        <Link
          to={item.link}
          className="relative inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:text-white"
        >
          Explore
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
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
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.08) 0%, transparent 28%)`,
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-600 via-blue-900 to-gray-700 text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-40" style={backgroundStyle}></div>

      {/* Blur Shapes */}
      <div className="absolute -top-20 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-28 lg:pb-28">
        {/* HERO TOP */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-md">
              <Sparkles size={15} />
              Building the Future of Entrepreneurship
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight">
              Where
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}Ideas Begin,
              </span>
              <br />
              Startups
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {" "}Grow,
              </span>
              <br />
              and Founders
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                {" "}Rise.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-7 text-slate-300 lg:mx-0">
              IncubeNation is a next-generation startup ecosystem designed to
              empower entrepreneurs, students, young founders, and innovators
              through physical incubation, digital learning, and campus-driven
              opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Connect With Us
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore IncubeNation
              </Link>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Connect Socially
              </p>

              <div className="flex justify-center gap-3 lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px]">
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-white/10 to-white/5 p-2">
                  <img
                    src={HeroImage}
                    alt="IncubeNation Hero"
                    className="w-full rounded-[1.25rem] object-contain max-h-[360px] sm:max-h-[440px] lg:max-h-[500px]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-3 top-6 hidden rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl md:block">
                <p className="text-[10px] uppercase tracking-widest text-cyan-300">
                  Programs
                </p>
                <h4 className="text-sm font-semibold text-white">
                  4 Growth Tracks
                </h4>
              </div>

              <div className="absolute -right-3 bottom-6 hidden rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl md:block">
                <p className="text-[10px] uppercase tracking-widest text-emerald-300">
                  Ecosystem
                </p>
                <h4 className="text-sm font-semibold text-white">
                  Online + Offline
                </h4>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PROGRAMS SECTION */}
        <section className="relative mt-20 sm:mt-24 md:mt-28 lg:mt-32">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[320px] sm:h-[500px] md:h-[650px] bg-cyan-500/8 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] bg-violet-500/8 blur-3xl rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                 Our Programs
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Designed for Every
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Stage of Innovation
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-7 max-w-xl mx-auto">
                From young innovators to startup founders, our ecosystem is
                built to support ideas, growth, and real-world impact.
              </p>
            </motion.div>

            {/* Cards Container */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {focuses.map((item, index) => (
                  <FocusCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;