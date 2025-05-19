import React, { useEffect, useState } from "react";
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
    <section className="relative py-20  overflow-hidden ">
      <div className="container mx-auto px-6 lg:px-16 space-y-20">
        {/* About Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6 animate__animated animate__fadeInUp animate__slow">
          <h2 className="text-4xl font-bold text-[#061428] ">
            About IncubeNation
          </h2>
          <p className="text-lg text-gray-700">
            IncubeNation Bengaluru is a startup incubator created by Ique
            Ventures to support and develop early-stage startups. Our mission is
            to empower entrepreneurs by providing them with the tools,
            resources, and mentorship needed to build scalable businesses. We
            offer a comprehensive range of services tailored to help startups
            through every stage of their growth journey, from ideation to
            successful market entry and expansion.
          </p>
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
