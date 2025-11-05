import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaNetworkWired,
  FaLaptop,
  FaBuilding,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images (replace with actual paths)
import coworking from "../assets/images/coworking.jpg";
import programs from "../assets/images/programs.jpg";
import business from "../assets/images/businesssupport.jpg";
import training from "../assets/images/workshops.jpg";
import fund from "../assets/images/funding.jpg";
import networking from "../assets/images/networking.jpg";
import it from "../assets/images/it.jpg";
import office from "../assets/images/office.jpg";

const offeringsData = [
  {
    title: "Co-Working Spaces",
    description: "Fully furnished co-working spaces with high-speed internet, conference rooms, and breakout areas.",
    icon: <FaUsers className="text-lg sm:text-xl" />,
    bgImage: coworking,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Incubation Programs",
    description: "Mentorship and support for startups, including business model refinement, networking, and funding assistance.",
    icon: <FaLightbulb className="text-lg sm:text-xl" />,
    bgImage: programs,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Business Support Services",
    description: "Legal, accounting, and marketing support for startups and entrepreneurs.",
    icon: <FaCogs className="text-lg sm:text-xl" />,
    bgImage: business,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Training & Workshops",
    description: "Regular workshops and training sessions on various topics such as entrepreneurship, leadership, and technology.",
    icon: <FaChartLine className="text-lg sm:text-xl" />,
    bgImage: training,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Funding Assistance",
    description: "Support in securing investments and grants for startups.",
    icon: <FaHandshake className="text-lg sm:text-xl" />,
    bgImage: fund,
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Networking Opportunities",
    description: "Access to a strong network of industry experts, investors, and fellow entrepreneurs.",
    icon: <FaNetworkWired className="text-lg sm:text-xl" />,
    bgImage: networking,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Tech & Innovation Support",
    description: "Access to R&D facilities, prototyping labs, and expert guidance on technology adoption.",
    icon: <FaLaptop className="text-lg sm:text-xl" />,
    bgImage: it,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Customized Office Solutions",
    description: "Flexible office spaces tailored to the needs of businesses.",
    icon: <FaBuilding className="text-lg sm:text-xl" />,
    bgImage: office,
    color: "from-slate-600 to-slate-800"
  },
];

// Preload images for faster loading
const preloadImages = () => {
  offeringsData.forEach(offering => {
    const img = new Image();
    img.src = offering.bgImage;
  });
};

const OfferingsCard = ({ offering, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05, // Lower threshold for mobile
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      className="relative bg-[#2A3F80] rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden group h-full cursor-pointer min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px]"
    >
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${offering.bgImage})` }}
        variants={imageVariants}
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>
        {/* Loading shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-pulse opacity-50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col h-full">
        {/* Icon */}
        <motion.div 
          className="mb-3 sm:mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${offering.color} flex items-center justify-center text-white shadow-lg`}>
            {offering.icon}
          </div>
        </motion.div>

        {/* Title & Description */}
        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          {offering.title}
        </h3>
        <p className="text-white/90 text-xs sm:text-sm md:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed sm:leading-relaxed">
          {offering.description}
        </p>

        
      </div>

      {/* Accent Bar */}
      <motion.div 
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${offering.color}`}
        whileHover={{ scaleX: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Offerings = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images on component mount
    preloadImages();
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-6 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-8xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-30px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offer</span>?
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-lg text-white/80 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We provide tailored support for startups, ensuring you receive the guidance and resources necessary for growth.
          </motion.p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {offeringsData.map((offering, index) => (
            <OfferingsCard 
              key={index} 
              offering={offering} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Additional spacing for very large screens */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20"></div>
      </div>
    </section>
  );
};

export default Offerings;