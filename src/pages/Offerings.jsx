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
import coworking from "../assets/images/coworking.jpg";
import programs from "../assets/images/programs.jpg"
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
    icon: <FaUsers className="text-5xl text-white" />, 
    bgImage: coworking
  },
  { 
    title: "Incubation Programs", 
    description: "Mentorship and support for startups, including business model refinement, networking, and funding assistance.", 
    icon: <FaLightbulb className="text-5xl text-white" />,
    bgImage: programs
  },
  { 
    title: "Business Support Services", 
    description: "Legal, accounting, and marketing support for startups and entrepreneurs.", 
    icon: <FaCogs className="text-5xl text-white" /> ,
    bgImage: business
  },
  { 
    title: "Training & Workshops", 
    description: "Regular workshops and training sessions on various topics such as entrepreneurship, leadership, and technology.", 
    icon: <FaChartLine className="text-5xl text-white" />,
    bgImage: training
  },
  { 
    title: "Funding Assistance", 
    description: "Support in securing investments and grants for startups.", 
    icon: <FaHandshake className="text-5xl text-white" /> ,
    bgImage: fund
  },
  { 
    title: "Networking Opportunities", 
    description: "Access to a strong network of industry experts, investors, and fellow entrepreneurs.", 
    icon: <FaNetworkWired className="text-5xl text-white" /> ,
    bgImage: networking
  },
  { 
    title: "Tech & Innovation Support", 
    description: "Access to R&D facilities, prototyping labs, and expert guidance on technology adoption.", 
    icon: <FaLaptop className="text-5xl text-white" /> ,
    bgImage: it
  },
  { 
    title: "Customized Office Solutions", 
    description: "Flexible office spaces tailored to the needs of businesses.", 
    icon: <FaBuilding className="text-5xl text-white" /> ,
    bgImage: office
  },
];

const Offerings = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
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
              className="relative bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-6 pt-14 rounded-xl group text-center"
              style={{
                backgroundImage: offering.bgImage ? `url(${offering.bgImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Overlay to darken background */}
              {offering.bgImage && (
                <div className="absolute inset-0 bg-black/60 rounded-xl z-0"></div>
              )}

              {/* Icon Floating Box */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/20 border border-white/30 p-4 rounded-full shadow-md z-10">
                {offering.icon}
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">{offering.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{offering.description}</p>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4fc3dc] to-[#f9a826] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
