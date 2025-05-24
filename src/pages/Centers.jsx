import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaTrophy,
  FaTimes,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Bangalore from "../assets/images/banglore.webp";
import Kochi from "../assets/images/kochi.jpg";
import Dubai from "../assets/images/dubai.jpg";
import CAP from "../assets/images/CAP.jpg";
import careerCafe from "../assets/images/careercafe.jpg";
import flyrad from "../assets/images/Flyrad.jpg";
import franchisify from "../assets/images/Franchisify.in (1).png";
import sib from "../assets/images/SIB.jpg";
import ceosquare from "../assets/images/CEO Square.png";
import lyec from "../assets/images/lyec.jpg";
import akam from "../assets/images/akam-logo-green.png";
import img20 from "../assets/images/img20.jpg";
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
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeatureSection />
      <LocationCards />
      <Gallery />
      <AwardsCarousel />
      <Customers />
    </div>
  );
};

const HeaderSection = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
    <h1 className="text-5xl font-extrabold mb-4">IncubeNation-Center</h1>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-200 py-3">
    <div className="container mx-auto px-6">
      <nav className="text-[#061428] text-sm">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="hover:text-[#03346e]">
              Home
            </a>
          </li>
          <span>/</span>
          <li className="text-[#061428] font-semibold">IncubeNation Center</li>
        </ul>
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
    <img
      src={img20}
      alt="Incubenation Center"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
    />
    <div className="md:w-1/2">
      <h1 className="text-4xl font-extrabold text-[#061428] mb-4">
        Welcome to Incubenation Center
      </h1>
      <p className="text-lg text-gray-700">
        The Incubenation Center is a premier startup incubator dedicated to fostering innovation and entrepreneurship. We provide state-of-the-art coworking spaces, high-speed internet, modern facilities, and a thriving startup community. Our onsite mentoring program connects startups with industry experts, investors, and successful entrepreneurs for guidance and growth.
        <br />
        With structured accelerator programs, access to cutting-edge technology, and legal and financial advisory services, we empower startups to scale effectively. Recognized with multiple awards, Incubenation has helped numerous businesses secure funding and expand globally.
        <br />
        Join Incubenation Center and take your startup to the next level! 🚀
      </p>
    </div>
  </div>
);

const FeatureSection = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#061428]">
      Why Choose Incubenation Center?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard icon={<FaBuilding />} title="Coworking Spaces" description="Modern workspaces for startups." />
      <FeatureCard icon={<FaNetworkWired />} title="Modern Facilities" description="High-speed internet, conference rooms & more." />
      <FeatureCard icon={<FaChalkboardTeacher />} title="Onsite Mentoring" description="Guidance from industry experts & investors." />
      <FeatureCard icon={<FaUsers />} title="Startup Community" description="Collaborate with fellow entrepreneurs." />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
    <div className="text-4xl text-[#061428] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#061428]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const locations = [
  { city: "Bangalore", image: Bangalore, comingSoon: false },
  { city: "Kochi", image: Kochi, comingSoon: true },
  { city: "Dubai", image: Dubai, comingSoon: true },
];

const LocationCards = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#061428]">
      Our Locations
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {locations.map((loc, index) => (
        <LocationCard key={index} city={loc.city} image={loc.image} comingSoon={loc.comingSoon} />
      ))}
    </div>
  </div>
);

const LocationCard = ({ city, image, comingSoon }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
    <img src={image} alt={city} className="w-full h-48 object-cover" />
    {comingSoon && (
      <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        Coming Soon
      </span>
    )}
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold text-[#061428]">{city}</h3>
    </div>
  </div>
);

const images = [
  { src: art1, alt: "Art 1" },
  { src: art2, alt: "Art 2" },
  { src: art4, alt: "Art 4" },
  { src: art5, alt: "Art 5" },
  { src: art6, alt: "Art 6" },
  { src: art7, alt: "Art 7" },
  { src: art8, alt: "Art 8" },
  { src: art9, alt: "Art 9" },
  { src: art10, alt: "Art 10" },
  { src: art11, alt: "Art 11" },
  { src: art12, alt: "Art 12" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#061428] tracking-wide uppercase">
        Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            />
            
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const AwardsCarousel = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#061428]">Our Achievements</h2>
    <Carousel showThumbs={false} infiniteLoop autoPlay showArrows>
      {["Best Startup Incubator 2023", "Top 10 Co-working Spaces", "Innovation Excellence Award"].map((award, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaTrophy className="text-4xl text-[#03346e] mb-4" />
          <h3 className="text-xl font-bold text-[#03346e]">{award}</h3>
        </div>
      ))}
    </Carousel>
  </div>
);

const Customers = () => {
  const images = [sib, lyec, CAP, flyrad, akam, ceosquare, franchisify, careerCafe];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Projects
      </h2>

      {/* Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4 flex justify-center items-center transition-all transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img className="w-24 h-24 object-contain" src={image} alt="Customer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Center; // CENTER IS NOT EXPORTING
