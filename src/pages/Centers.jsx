import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaTrophy,
  FaTimes,
  FaMapMarkerAlt,
  FaRocket,
  FaAward,
  FaLightbulb,
  FaHandshake
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Bangalore from "../assets/images/banglore.webp";
import Kochi from "../assets/images/kochi.jpg";
import Dubai from "../assets/images/dubai.jpg";
import img20 from "../assets/images/incube.jpg";
import art1 from "../assets/images/art1.jpg";
import art2 from "../assets/images/art2.jpg";
import art4 from "../assets/images/art4.jpg";
import art5 from "../assets/images/art5.jpg";
import art6 from "../assets/images/art6.jpg";
import art7 from "../assets/images/art7.jpg.jpg";
import art8 from "../assets/images/art8.jpg";
import art9 from "../assets/images/art9.jpg";
import art10 from "../assets/images/art10.jpg";
import art11 from "../assets/images/art11.jpg";
import art12 from "../assets/images/art12.jpg";

const Center = () => {
  useEffect(() => {
    console.log("User visited the Incubenation Center page");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 font-sans antialiased">
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeatureSection />
      <LocationCards />
      <Gallery />
    
    </div>
  );
};

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
        <FaBuilding className="text-xl" />
        <span className="text-sm font-semibold tracking-wider">PREMIER INCUBATION CENTER</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
        IncubeNation
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Center
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Where Innovation Meets Infrastructure • Empowering Startups with World-Class Facilities
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
    <div className="container mx-auto px-6">
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600 transition-colors duration-300">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          IncubeNation Center
        </span>
      </div>
    </div>
  </nav>
);

const MainContent = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img20}
                alt="IncubeNation Center Innovation Hub"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3 text-blue-600">
            <FaRocket className="text-xl" />
            <span className="text-sm font-semibold tracking-wider uppercase">PREMIER INCUBATION FACILITY</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Transform Your Vision
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Into Reality
            </span>
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The IncubeNation Center is a premier startup incubator dedicated to fostering innovation 
              and entrepreneurship. We provide state-of-the-art coworking spaces, high-speed internet, 
              modern facilities, and a thriving startup community.
            </p>
            <p>
              Our onsite mentoring program connects startups with industry experts, investors, and 
              successful entrepreneurs for guidance and growth. With structured accelerator programs 
              and comprehensive support services, we empower startups to scale effectively.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: FaChalkboardTeacher, text: "Expert Mentorship" },
              { icon: FaNetworkWired, text: "Modern Infrastructure" },
              { icon: FaUsers, text: "Vibrant Community" },
              { icon: FaAward, text: "Proven Success" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <item.icon className="text-blue-600 text-lg" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
          <FaLightbulb className="text-xl" />
          <span className="text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Center Excellence
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Features & Benefits
          </span>
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FaBuilding className="text-3xl" />}
          title="Premium Coworking Spaces"
          description="Modern, flexible workspaces designed for productivity and collaboration."
          gradient="from-blue-500 to-cyan-500"
        />
        <FeatureCard
          icon={<FaNetworkWired className="text-3xl" />}
          title="Advanced Facilities"
          description="High-speed internet, conference rooms, and cutting-edge technology infrastructure."
          gradient="from-purple-500 to-pink-500"
        />
        <FeatureCard
          icon={<FaChalkboardTeacher className="text-3xl" />}
          title="Expert Mentorship"
          description="Personalized guidance from industry leaders, investors, and successful entrepreneurs."
          gradient="from-green-500 to-teal-500"
        />
        <FeatureCard
          icon={<FaUsers className="text-3xl" />}
          title="Vibrant Community"
          description="Connect with fellow innovators, collaborators, and potential partners."
          gradient="from-orange-500 to-red-500"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description, gradient }) => (
  <motion.div 
    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative z-10">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const locations = [
  { city: "Bangalore", image: Bangalore, comingSoon: false, description: "Our flagship center in India's startup capital" },
  { city: "Kochi", image: Kochi, comingSoon: true, description: "Coming soon to Kerala's emerging tech hub" },
  { city: "Dubai", image: Dubai, comingSoon: true, description: "Expanding to the Middle East's innovation center" },
];

const LocationCards = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
          <FaMapMarkerAlt className="text-xl" />
          <span className="text-sm font-semibold tracking-wider">OUR GLOBAL PRESENCE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Strategic
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Locations
          </span>
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc, index) => (
          <LocationCard key={index} {...loc} />
        ))}
      </div>
    </div>
  </section>
);

const LocationCard = ({ city, image, comingSoon, description }) => (
  <motion.div 
    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative overflow-hidden">
      <img src={image} alt={city} className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700" />
      {comingSoon && (
        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">
          Coming Soon
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-2">
        <FaMapMarkerAlt className="text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">{city}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const images = [
  { src: art1, alt: "Innovation Space" },
  { src: art2, alt: "Collaboration Area" },
  { src: art4, alt: "Meeting Room" },
  { src: art5, alt: "Workshop Session" },
  { src: art6, alt: "Networking Event" },
  { src: art7, alt: "Startup Pitch" },
  { src: art8, alt: "Mentorship Session" },
  { src: art9, alt: "Community Gathering" },
  { src: art10, alt: "Technology Lab" },
  { src: art11, alt: "Creative Space" },
  { src: art12, alt: "Success Celebration" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <FaLightbulb className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">BEHIND THE SCENES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Center Gallery
            
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage(image.src)}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute -top-16 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};



export default Center;