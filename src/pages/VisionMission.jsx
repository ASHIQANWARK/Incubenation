import React from "react";
import Image2 from "../assets/images/img12.jpg";
import Image3 from "../assets/images/img10.jpg";

const VisionMission = () => {
  return (
    <section className=" font-sans py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-700">Us</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering Visionaries. Fueling Innovation. Building the Future.
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ffffff]">
              Transforming Vision into Value
            </h2>
            
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
              <img
                src={Image2}
                alt="Office"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            
            <p className="text-white text-lg leading-relaxed">
              IncubeNation Bengaluru is a startup incubator created by Ique Ventures to support and develop early-stage startups. Our mission is to empower entrepreneurs by providing them with the tools, resources, and mentorship needed to build scalable businesses. We offer a comprehensive range of services tailored to help startups through every stage of their growth journey, from ideation to successful market entry and expansion.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-10">
            {/* Vision */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Our Vision
              </h3>
              <p className="text-white text-lg leading-relaxed">
                To create a thriving startup ecosystem where innovation, entrepreneurship, and collaboration flourish, driving sustainable growth and success for startups across India and beyond.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Our Mission
              </h3>
              <p className="text-white text-lg leading-relaxed mb-4">
                Our mission is to empower startups by providing them with the tools, guidance, and resources needed to succeed. Through comprehensive incubation programs, expert mentorship, and a supportive community, we aim to turn entrepreneurial visions into impactful businesses that make a difference in the world.
              </p>
              
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={Image3}
                  alt="Team Mission"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;