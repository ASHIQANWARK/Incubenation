import React from "react";
import {
  FaHandshake,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaUsersCog,
  FaDollarSign,
  FaGlobe,
} from "react-icons/fa";

// Define services array
const servicesData = [
  { icon: <FaMapMarkerAlt />, title: "Strategic Location", description: "Located in a prime business hub with easy accessibility." },
  { icon: <FaShieldAlt />, title: "State-of-the-Art Infrastructure", description: "Modern office spaces with advanced amenities." },
  { icon: <FaChalkboardTeacher />, title: "Expert Mentorship", description: "Guidance from experienced industry professionals and mentors." },
  { icon: <FaUsersCog />, title: "Collaborative Ecosystem", description: "A thriving community of entrepreneurs, investors, and business leaders." },
  { icon: <FaDollarSign />, title: "Affordable & Flexible Plans", description: "Cost-effective solutions with customizable membership options." },
  { icon: <FaGlobe />, title: "Innovation-Driven Environment", description: "Encouraging a culture of creativity and technology-driven solutions." },
  { icon: <FaHandshake />, title: "Strong Industry Connect", description: "Partnerships with leading corporations, academic institutions, and government agencies." },
  { icon: <FaShieldAlt />, title: "24/7 Access & Security", description: "Round-the-clock access to facilities with high security." },
];

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Why Choose Us Section */}
        <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us?</h2>
        <p className="text-lg text-white mb-12">
          Discover the benefits of joining our community and why we stand out as the perfect place for startups and businesses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center">
              <div className="text-4xl text-[#061428] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
