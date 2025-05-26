import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image2 from "../assets/images/startup (2).jpg";
import Image3 from "../assets/images/startup.jpg";
import "animate.css";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 space-y-20">
        {/* About Section */}
        <div className="relative py-16 px-4 sm:px-8 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl overflow-hidden shadow-xl">
            {/* Left: Title */}
            <motion.div
              className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white flex justify-center items-center p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center leading-snug">
                About <span className="text-yellow-400">Incubenation</span>
              </h1>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              className="bg-[#061428]  p-8 md:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                <strong className="    text-[#00ffa6]">IncubeNation Bengaluru</strong> is a startup incubator created by <strong>Ique Ventures</strong> to support and develop early-stage startups. Our mission is to empower entrepreneurs by providing them with the tools, resources, and mentorship needed to build scalable businesses. We offer a comprehensive range of services tailored to help startups through every stage of their growth journey, from ideation to successful market entry and expansion.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div
            className={`lg:w-1/2 transition-opacity duration-700 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInLeft animate__slow"
                : "opacity-0"
            }`}
          >
            <div className="relative p-10 rounded-3xl bg-gradient-to-b from-[#061428] to-[#0b1c3a] shadow-xl space-y-6 backdrop-blur-md border border-white/20">
              <h2 className="text-4xl font-bold text-white font-serif">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-white">
                To create a thriving startup ecosystem where innovation,
                entrepreneurship, and collaboration flourish, driving
                sustainable growth and success for startups across India and
                beyond.
              </p>
            </div>
          </div>
          <div
            className={`lg:w-1/2 transition-opacity duration-1000 ${
              isVisible
                ? "opacity-100 animate__animated animate__zoomIn animate__delay-1s"
                : "opacity-0"
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={Image2}
                alt="Our Vision"
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110 rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div
            className={`lg:w-1/2 transition-opacity duration-700 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInRight animate__slow"
                : "opacity-0"
            }`}
          >
            <div className="relative p-10 rounded-3xl bg-[#061428] shadow-xl space-y-6 backdrop-blur-md border border-white/30">
              <h2 className="text-4xl font-bold text-white font-serif">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-white">
                Our mission is to empower startups by providing them with the
                tools, guidance, and resources needed to succeed. Through
                comprehensive incubation programs, expert mentorship, and a
                supportive community, we aim to turn entrepreneurial visions
                into impactful businesses that make a difference in the world.
              </p>
            </div>
          </div>
          <div
            className={`lg:w-1/2 transition-opacity duration-1000 ${
              isVisible
                ? "opacity-100 animate__animated animate__zoomIn animate__delay-1s"
                : "opacity-0"
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={Image3}
                alt="Our Mission"
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
