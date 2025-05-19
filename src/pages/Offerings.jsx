import React from "react";
import { 
  FaUsers, 
  FaLightbulb, 
  FaCogs, 
  FaChartLine, 
  FaHandshake, 
  FaNetworkWired, 
  FaLaptop, 
  FaBuilding 
} from "react-icons/fa";

const offeringsData = [
  { 
    title: "Co-Working Spaces", 
    description: "Fully furnished co-working spaces with high-speed internet, conference rooms, and breakout areas.", 
    icon: <FaUsers className="text-5xl text-white" /> 
  },
  { 
    title: "Incubation Programs", 
    description: "Mentorship and support for startups, including business model refinement, networking, and funding assistance.", 
    icon: <FaLightbulb className="text-5xl text-white" /> 
  },
  { 
    title: "Business Support Services", 
    description: "Legal, accounting, and marketing support for startups and entrepreneurs.", 
    icon: <FaCogs className="text-5xl text-white" /> 
  },
  { 
    title: "Training & Workshops", 
    description: "Regular workshops and training sessions on various topics such as entrepreneurship, leadership, and technology.", 
    icon: <FaChartLine className="text-5xl text-white" /> 
  },
  { 
    title: "Funding Assistance", 
    description: "Support in securing investments and grants for startups.", 
    icon: <FaHandshake className="text-5xl text-white" /> 
  },
  { 
    title: "Networking Opportunities", 
    description: "Access to a strong network of industry experts, investors, and fellow entrepreneurs.", 
    icon: <FaNetworkWired className="text-5xl text-white" /> 
  },
  { 
    title: "Tech & Innovation Support", 
    description: "Access to R&D facilities, prototyping labs, and expert guidance on technology adoption.", 
    icon: <FaLaptop className="text-5xl text-white" /> 
  },
  { 
    title: "Customized Office Solutions", 
    description: "Flexible office spaces tailored to the needs of businesses.", 
    icon: <FaBuilding className="text-5xl text-white" /> 
  },
];

const Offerings = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Our Comprehensive Offerings</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We provide tailored support for startups, ensuring you receive the guidance and resources necessary for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          {offeringsData.map((offering, index) => (
            <div 
              key={index} 
              className="hexagon-box flex flex-col items-center text-center bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-6 group relative overflow-hidden"
            >
              <div className="bg-white/20 backdrop-blur-xl p-4 rounded-full shadow-md mb-4">
                {offering.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white">{offering.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{offering.description}</p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4fc3dc] to-[#f9a826] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
