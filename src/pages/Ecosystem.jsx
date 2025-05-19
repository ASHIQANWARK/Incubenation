import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import CAP from "../assets/images/CAP.jpg";
import careerCafe from "../assets/images/careercafe.jpg";
import flyrad from "../assets/images/Flyrad.jpg";
import franchisify from "../assets/images/Franchisify.in (1).png";
import sib from "../assets/images/SIB.jpg";
import ceosquare from "../assets/images/CEO Square.png";

import akam from "../assets/images/akam-logo-green.png";
import mainImage from "../assets/images/2image-removebg-preview.png"; 
import { FaRocket, FaUsers, FaHandHoldingUsd, FaUniversity } from "react-icons/fa";

const EcosystemSection = () => {
  const logos = [
    { src: CAP, alt: "IQUE CAP" },
    { src: careerCafe, alt: "Career Cafe" },
    { src: flyrad, alt: "Flyrad" },
    { src: franchisify, alt: "Franchisify" },
    { src: sib, alt: "SIB" },
    { src: ceosquare, alt: "Ceosquare" },
    { src: akam, alt: "akam" },
  ];

  return (
    <section className="py-16  px-10 flex flex-col items-center ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          100+ Projects and Companies Developed with Our Ecosystem
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center mb-6">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 lg:h-24 transition-transform transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>

      {/* Content Section: Image on Left, Counters on Right */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={mainImage} alt="Ecosystem" className="w-96 rounded-lg" />
        </motion.div>

        {/* Right Side - Animated Counters */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              value: 10,
              text: "Projects for entrepreneurs",
              icon: <FaUsers className="text-green-600 text-4xl" />,
            },
            {
              value: 25,
              text: "Startup support programmes",
              icon: <FaRocket className="text-blue-600 text-4xl" />,
            },
            {
              value: 12,
              text: "Projects to create and connect investors",
              icon: <FaHandHoldingUsd className="text-yellow-600 text-4xl" />,
            },
            {
              value: 20,
              text: "Projects with government for infrastructure",
              icon: <FaUniversity className="text-purple-600 text-4xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 rounded-xl w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.icon}
              <div>
                <span className="text-4xl font-bold text-gray-900">
                  <CountUp start={0} end={item.value} duration={2} delay={0.5} />
                </span>
                <p className="mt-1 text-lg text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
