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
  FaArrowRight
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
    icon: <FaUsers className="text-2xl" />,
    bgImage: coworking,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Incubation Programs",
    description: "Mentorship and support for startups, including business model refinement, networking, and funding assistance.",
    icon: <FaLightbulb className="text-2xl" />,
    bgImage: programs,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Business Support Services",
    description: "Legal, accounting, and marketing support for startups and entrepreneurs.",
    icon: <FaCogs className="text-2xl" />,
    bgImage: business,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Training & Workshops",
    description: "Regular workshops and training sessions on various topics such as entrepreneurship, leadership, and technology.",
    icon: <FaChartLine className="text-2xl" />,
    bgImage: training,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Funding Assistance",
    description: "Support in securing investments and grants for startups.",
    icon: <FaHandshake className="text-2xl" />,
    bgImage: fund,
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Networking Opportunities",
    description: "Access to a strong network of industry experts, investors, and fellow entrepreneurs.",
    icon: <FaNetworkWired className="text-2xl" />,
    bgImage: networking,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Tech & Innovation Support",
    description: "Access to R&D facilities, prototyping labs, and expert guidance on technology adoption.",
    icon: <FaLaptop className="text-2xl" />,
    bgImage: it,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Customized Office Solutions",
    description: "Flexible office spaces tailored to the needs of businesses.",
    icon: <FaBuilding className="text-2xl" />,
    bgImage: office,
    color: "from-slate-600 to-slate-800"
  },
];

const OfferingsCard = ({ offering, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-[#2A3F80] rounded-xl shadow-lg overflow-hidden group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${offering.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${offering.color} flex items-center justify-center text-white shadow-lg`}>
            {offering.icon}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
        <p className="text-white text-sm mb-6 flex-grow">{offering.description}</p>

        
      </div>

      {/* Accent Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${offering.color}`}></div>
    </motion.div>
  );
};

const Offerings = () => {
  return (
    <section className="py-16  px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Offer</span>?
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We provide tailored support for startups, ensuring you receive the guidance and resources necessary for growth.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offeringsData.map((offering, index) => (
            <OfferingsCard key={index} offering={offering} index={index} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Offerings; 