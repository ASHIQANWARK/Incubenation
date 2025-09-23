import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/images/hero5 (3).png";

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
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
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
        className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:transform hover:scale-105"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Colored top border */}
        <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>
        
        <div className="relative h-full rounded-b-2xl p-6 flex flex-col items-center text-center z-20">
          {/* Icon */}
          <div className="mb-5 p-4 rounded-xl bg-slate-700/30 border border-slate-600/50">
            <img
              src={item.icon}
              alt={`Icon for ${item.title}`}
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
            {item.description}
          </p>

          {/* Tag */}
          {item.tag && (
            <span className="absolute top-4 right-4 bg-slate-700/80 text-slate-200 text-xs font-bold px-3 py-1 rounded-full border border-slate-600/50">
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
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/btn border border-blue-500/30"
            >
              Know More
              <svg
                className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
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
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Floating Animation */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10`}></div>
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
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>

      {/* Dynamic gradient that follows mouse */}
      <div className="absolute inset-0 opacity-40" style={backgroundStyle}></div>
      
      {/* Animated particles/glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Content - Reduced gap and centered alignment */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 z-8">
        {/* Left: Hero Text - Centered with image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-3/5 text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full lg:justify-start"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
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

          <p className="text-lg text-blue-200 font-light leading-relaxed mb-8 max-w-xl">
            Ignite your entrepreneurial journey with{" "}
            <span className="font-semibold text-green-300">IncubeNation</span>,
            where ideas transform into thriving businesses through expert
            mentorship, funding access, and strategic partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:from-green-600 hover:to-teal-600 border border-green-400/30"
              >
                Connect with us
                <svg
                  className="w-5 h-5 ml-2"
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

        {/* Right: Hero Image - Larger and closer to text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="lg:w-3/5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-2xl group">
            {/* Floating glow effect */}
            
            
            {/* Image container with glass morphism - Larger size */}
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src={HeroImage}
                alt="Incubation Hub - Startup Growth Platform"
                className="w-full h-auto max-h-[600px] object-contain object-center transform group-hover:scale-105 transition-transform duration-1000"
                loading="eager"
              />
              
              {/* Overlay gradient */}
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Focus Areas Section */}
      <div className="relative mt-24 w-full max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Programs</span>
          </h2>
          <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Discover our comprehensive incubation programs designed to support startups at every stage of their journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focuses.map((item, index) => (
            <FocusCard key={index} item={item} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Hero;