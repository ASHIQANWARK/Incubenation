import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/images/hero5 (3).png";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
// Import separate icons for each program
import IncubationCenterIcon from "../assets/images/incubenation-DP-3.png";
import IncubationOnlineIcon from "../assets/images/incubenation-DP-3.png";
import IncubationCampusIcon from "../assets/images/incubenation-DP-3.png";
import BusinessSolutionsIcon from "../assets/images/incubenation-DP-3.png";

const focuses = [
  {
    title: "Incubation Center",
    description: "Encouraging and supporting individuals to become entrepreneurs through workshops, mentorship, and access to resources.",
    icon: IncubationCenterIcon,
    link: "/center",
    color: "from-blue-600 to-purple-600",
    hue: 200
  },
  {
    title: "Incubation Online",
    description: "Providing resources, mentorship, and guidance to help startups grow, pivot, and scale in competitive markets.",
    icon: IncubationOnlineIcon,
    link: "/online",
    color: "from-purple-600 to-pink-600",
    hue: 280
  },
  {
    title: "Incubation Campus",
    description: "Bringing investors and startups together for potential funding, partnerships, and collaboration opportunities.",
    icon: IncubationCampusIcon,
    link: "/campus",
    color: "from-amber-600 to-orange-600",
    hue: 35
  },
  {
    title: "Business Solutions",
    description: "Fostering partnerships with government bodies and corporate entities to boost innovation and growth.",
    icon: BusinessSolutionsIcon,
    link: "/business",
    tag: "Coming Soon",
    color: "from-emerald-600 to-teal-600",
    hue: 160
  },
];

const FocusCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="h-full group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={cardRef}
        className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:transform hover:scale-105"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Colored top border */}
        <div className={`h-1 sm:h-2 w-full bg-gradient-to-r ${item.color}`}></div>
        
        <div className="relative h-full rounded-b-xl sm:rounded-b-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center z-20">
          {/* Icon */}
          <div className="mb-3 sm:mb-4 md:mb-5 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-slate-700/30 border border-slate-600/50">
            <img
              src={item.icon}
              alt={`Icon for ${item.title}`}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-100 transition-colors duration-300">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow">
            {item.description}
          </p>

          {/* Tag */}
          {item.tag && (
            <span className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-slate-700/80 text-slate-200 text-xs font-bold px-2 sm:px-3 py-1 rounded-full border border-slate-600/50">
              {item.tag}
            </span>
          )}

          {/* Centered Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto w-full flex justify-center"
          >
            <Link
              to={item.link}
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/btn border border-blue-500/30 text-xs sm:text-sm md:text-base"
            >
              Know More
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-blue-400/50 rounded-tr-xl sm:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-xl sm:rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Floating Animation */}
      <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10`}></div>
    </motion.div>
  );
};

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61572794128072",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600",
      label: "Facebook"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/incubenation?igsh=MWRtbmxyZHNlYjhyMA==",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-600",
      label: "Instagram"
    },
    {
      icon: FaX,
      href: "https://x.com/Incubenation",
      color: "hover:text-white",
      bgColor: "hover:bg-black",
      label: "X"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/incubenation",
      color: "hover:text-blue-300",
      bgColor: "hover:bg-blue-800",
      label: "LinkedIn"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/919035514812",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-600",
      label: "WhatsApp"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 mt-6 sm:mt-8 lg:mt-12"
    >
      <p className="text-blue-200 font-semibold text-base sm:text-lg md:text-lg">Follow Us</p>
      <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${social.color} ${social.bgColor} hover:shadow-lg hover:border-transparent`}
          >
            <social.icon className="text-xs sm:text-sm md:text-base lg:text-lg" />
          </motion.a>
        ))}
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
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)`,
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 md:-top-40 md:-right-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 md:-bottom-40 md:-left-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>

      {/* Dynamic gradient that follows mouse */}
      <div className="absolute inset-0 opacity-30 sm:opacity-40" style={backgroundStyle}></div>
      
      {/* Animated particles/glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-1/3 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Content */}
      <div className="relative w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 z-10">
        {/* Left: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 xl:w-3/5 text-center lg:text-left px-2 sm:px-4"
        >
          <div className="inline-flex items-center justify-center w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 sm:mb-6 rounded-full lg:justify-start"></div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-6">
            <span className="text-white">Where Startups </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Hatch</span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300"
            >
              Grow & Soar!
            </motion.span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-blue-200 font-light leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Ignite your entrepreneurial journey with{" "}
            <span className="font-semibold text-green-300">IncubeNation</span>,
            where ideas transform into thriving businesses through expert
            mentorship, funding access, and strategic partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:from-green-600 hover:to-teal-600 border border-green-400/30 text-sm sm:text-base"
              >
                Connect with us
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

         
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-end relative mt-4 sm:mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl group">
            {/* Floating glow effect */}
            
            {/* Image container with glass morphism */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src={HeroImage}
                alt="Incubation Hub - Startup Growth Platform"
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] 2xl:max-h-[700px] object-contain object-center transform group-hover:scale-105 transition-transform duration-1000"
                loading="eager"
              />
            </div>

            {/* Floating Social Media Links on Image - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-2 sm:space-y-3 md:space-y-4"
            >
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61572794128072", color: "bg-blue-600" },
                { icon: FaInstagram, href: "https://www.instagram.com/incubenation", color: "bg-pink-600" },
                { icon: FaX, href: "https://x.com/Incubenation", color: "bg-black" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/incubenation", color: "bg-blue-800" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, x: -3 }}
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${social.color} text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl text-xs sm:text-sm`}
                >
                  <social.icon className="text-xs sm:text-sm" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media Links - Mobile only */}
        <div className="block lg:hidden w-full mt-6 sm:mt-8">
          <SocialMediaLinks />
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="relative mt-16 sm:mt-20 md:mt-24 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3 sm:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Programs</span>
          </h2>
          <div className="inline-flex items-center justify-center w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg text-blue-200 max-w-2xl mx-auto px-2">
            Discover our comprehensive incubation programs designed to support startups at every stage of their journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
          {focuses.map((item, index) => (
            <FocusCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;