import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/images/hero4.png";

// Import separate icons for each program (replace with your actual imports)
import IncubationCenterIcon from "../assets/images/incubenation-DP-3.png";
import IncubationOnlineIcon from "../assets/images/incubenation-DP-3.png";
import IncubationCampusIcon from "../assets/images/incubenation-DP-3.png";
import BusinessSolutionsIcon from "../assets/images/incubenation-DP-3.png";

// Extracted data with separate icons
const focuses = [
  {
    title: "Incubation Center",
    description:
      "Encouraging and supporting individuals to become entrepreneurs through workshops, mentorship, and access to resources.",
    icon: IncubationCenterIcon,
    link: "/center",
    color: "border-t-blue-500",
    hue: 200
  },
  {
    title: "Incubation Online",
    description:
      "Providing resources, mentorship, and guidance to help startups grow, pivot, and scale in competitive markets.",
    icon: IncubationOnlineIcon,
    link: "/online",
    color: "border-t-purple-500",
    hue: 280
  },
  {
    title: "Incubation Campus",
    description:
      "Bringing investors and startups together for potential funding, partnerships, and collaboration opportunities.",
    icon: IncubationCampusIcon,
    link: "/campus",
    color: "border-t-amber-500",
    hue: 35
  },
  {
    title: "Business Solutions",
    description:
      "Fostering partnerships with government bodies and corporate entities to boost innovation and growth.",
    icon: BusinessSolutionsIcon,
    link: "/business",
    tag: "Coming Soon",
    color: "border-t-emerald-500",
    hue: 160
  },
];

const FocusCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

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

  const calculateTilt = () => {
    if (!cardRef.current) return { rotateX: 0, rotateY: 0 };
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = mousePosition.x - rect.width / 2;
    const y = mousePosition.y - rect.height / 2;
    
    return {
      rotateX: isHovered ? -y / 20 : 0,
      rotateY: isHovered ? x / 20 : 0,
    };
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={cardRef}
        animate={calculateTilt()}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="relative h-full overflow-hidden group rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Colored top border */}
        <div className={`h-3 w-full bg-green-800`}></div>
        
        <div className="relative h-full rounded-b-xl p-6 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-5 p-3 rounded-xl">
            <img
              src={item.icon}
              alt={`Icon for ${item.title}`}
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
            {item.description}
          </p>

          {/* Tag */}
          {item.tag && (
            <span className="absolute top-4 right-4 bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">
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
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2A3F80] text-white rounded-lg hover:bg-slate-900 transition-all duration-300 group/btn"
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
      </motion.div>
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
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.1) 0%, transparent 80%)`,
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 "></div>
      
      {/* Dynamic gradient that follows mouse */}
      <div className="absolute inset-0 opacity-60" style={backgroundStyle}></div>
      
      {/* Animated particles/glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 z-10">
        {/* Left: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Where Startups <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Hatch</span>, 
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400"
            >
              Grow & Soar!
            </motion.span>
          </h1>

          <p className="text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-lg">
            Ignite your entrepreneurial journey with{" "}
            <span className="font-semibold text-green-400">IncubeNation</span>,
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border text-center border-green-400/30"
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
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             
            </motion.div>
          </div>
        </motion.div>
{/* Right: Hero Image - Minimalist Luxury */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
  className="lg:w-1/2 flex justify-center relative"
>
  <div className="relative w-full max-w-2xl">
    {/* Main image with elegant frame */}
    <div className="relative group">
      {/* Elegant border effect */}
      <div className="absolute -inset-4  transform group-hover:scale-105 transition-transform duration-700"></div>
      
      {/* Image container */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={HeroImage}
          alt="Incubation Hub - Startup Growth Platform"
          className="w-full h-auto max-h-[650px] object-cover object-center rounded-2xl transform group-hover:scale-102 transition-transform duration-1000"
          loading="eager"
        />
      
      </div>
    </div>
    
    
  </div>
</motion.div>
</div>

      {/* Focus Areas Section */}
      <div className="relative mt-28 w-full max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Programs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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