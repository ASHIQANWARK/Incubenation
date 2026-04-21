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

const servicesData = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Strategic Location",
    description: "Located in a prime business hub with easy accessibility.",
  },
  {
    icon: <FaShieldAlt />,
    title: "State-of-the-Art Infrastructure",
    description: "Modern office spaces with advanced amenities.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Mentorship",
    description: "Guidance from experienced industry professionals and mentors.",
  },
  {
    icon: <FaUsersCog />,
    title: "Collaborative Ecosystem",
    description: "A thriving community of entrepreneurs, investors, and leaders.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Affordable & Flexible Plans",
    description: "Cost-effective solutions with customizable options.",
  },
  {
    icon: <FaGlobe />,
    title: "Innovation-Driven Environment",
    description: "Encouraging creativity and technology-driven solutions.",
  },
  {
    icon: <FaHandshake />,
    title: "Strong Industry Connect",
    description: "Partnerships with corporates, academia, and government.",
  },
  {
    icon: <FaShieldAlt />,
    title: "24/7 Access & Security",
    description: "Round-the-clock access with high-level security systems.",
  },
];

const Services = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Why Choose Us
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-7">
            Everything you need to build, grow, and scale your startup in one
            powerful ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {servicesData.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-cyan-400 text-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-6">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;