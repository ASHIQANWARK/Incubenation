import React from "react";
import {
  FaHandshake,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaUsersCog,
  FaRupeeSign,
  FaGlobe,
} from "react-icons/fa";

// Define services array with unique border colors
const servicesData = [
  { 
    icon: <FaMapMarkerAlt className="text-2xl" />, 
    title: "Strategic Location", 
    description: "Located in a prime business hub with easy accessibility.",
    borderColor: "from-blue-500 to-blue-700"
  },
  { 
    icon: <FaShieldAlt className="text-2xl" />, 
    title: "State-of-the-Art Infrastructure", 
    description: "Modern office spaces with advanced amenities.",
    borderColor: "from-emerald-500 to-emerald-700"
  },
  { 
    icon: <FaChalkboardTeacher className="text-2xl" />, 
    title: "Expert Mentorship", 
    description: "Guidance from experienced industry professionals and mentors.",
    borderColor: "from-amber-500 to-amber-700"
  },
  { 
    icon: <FaUsersCog className="text-2xl" />, 
    title: "Collaborative Ecosystem", 
    description: "A thriving community of entrepreneurs, investors, and business leaders.",
    borderColor: "from-violet-500 to-violet-700"
  },
  { 
    icon: <FaRupeeSign className="text-2xl" />,
    title: "Affordable & Flexible Plans",
    description: "Cost-effective solutions with customizable membership options.",
    borderColor: "from-green-500 to-green-700"
  },
  { 
    icon: <FaGlobe className="text-2xl" />, 
    title: "Innovation-Driven Environment", 
    description: "Encouraging a culture of creativity and technology-driven solutions.",
    borderColor: "from-cyan-500 to-cyan-700"
  },
  { 
    icon: <FaHandshake className="text-2xl" />, 
    title: "Strong Industry Connect", 
    description: "Partnerships with leading corporations, academic institutions, and government agencies.",
    borderColor: "from-orange-500 to-orange-700"
  },
  { 
    icon: <FaShieldAlt className="text-2xl" />, 
    title: "24/7 Access & Security", 
    description: "Round-the-clock access to facilities with high security.",
    borderColor: "from-red-500 to-red-700"
  },
];

const Services = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Discover the benefits of joining our community and why we stand out as the perfect place for startups and businesses.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Top colored border */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.borderColor}`}></div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f8f9fc] to-[#e9ecf5] flex items-center justify-center mb-5 group-hover:from-[#d4af37] group-hover:to-[#b8941f] group-hover:shadow-md transition-all duration-300">
                <div className="text-[#1a2b4d] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Services;