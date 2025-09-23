import React from "react";
import Image2 from "../assets/images/incubenation.png";
import Image3 from "../assets/images/img21.png";
import img3 from "../assets/images/img22.png";

const VisionMission = () => {
  return (
    <section className="relative font-sans py-20 px-6 md:px-12 lg:px-16 overflow-hidden ">
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Heading Section */}
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full">
              WHO WE ARE
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
          </h1>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Empowering Visionaries. Fueling Innovation. Building the Future.
          </p>
        </div>

        {/* About Section - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                <img
                  src={Image2}
                  alt="About IncubeNation"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
              <div className="w-8 h-0.5 bg-blue-400"></div>
              <span className="text-sm font-semibold tracking-wider">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Vision</span> into Value
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              IncubeNation Bengaluru is a startup incubator created by Ique Ventures to support and develop early-stage startups. Our mission is to empower entrepreneurs by providing them with the tools, resources, and mentorship needed to build scalable businesses.
            </p>
            <div className="pt-4">
              <ul className="space-y-3">
                {[
                  "Comprehensive incubation programs",
                  "Expert mentorship network",
                  "Resource optimization tools",
                  "Market entry strategies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Vision Section - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Container */}
          <div className="space-y-6 lg:order-1">
            <div className="inline-flex items-center space-x-2 text-purple-400 mb-4">
              <div className="w-8 h-0.5 bg-purple-400"></div>
              <span className="text-sm font-semibold tracking-wider">OUR VISION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Creating a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Thriving Ecosystem</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To create a thriving startup ecosystem where innovation, entrepreneurship, and collaboration flourish, driving sustainable growth and success for startups across India and beyond. We envision a future where every great idea has the opportunity to become a successful business.
            </p>
            <div className="pt-4">
              <ul className="space-y-3">
                {[
                  "Innovation-driven ecosystem",
                  "Global entrepreneurial hub",
                  "Sustainable growth models",
                  "Collaborative community building"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative group lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ">
              <div className="aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                <img
                  src={Image3}
                  alt="Our Vision"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>
        </div>

        {/* Mission Section - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl  ">
              <div className="aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                <img
                  src={img3}
                  alt="Our Mission"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
              <div className="w-8 h-0.5 bg-green-400"></div>
              <span className="text-sm font-semibold tracking-wider">OUR MISSION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Future</span> Leaders
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our mission is to empower startups by providing them with the tools, guidance, and resources needed to succeed. Through comprehensive incubation programs, expert mentorship, and a supportive community, we aim to turn entrepreneurial visions into impactful businesses.
            </p>
            <div className="pt-4">
              <ul className="space-y-3">
                {[
                  "Tailored mentorship programs",
                  "Investment readiness preparation",
                  "Global network access",
                  "Sustainable growth strategies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
  
      </div>
    </section>
  );
};

export default VisionMission;