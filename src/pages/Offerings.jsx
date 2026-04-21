import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaNetworkWired,
  FaLaptop,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const offeringsData = [
  {
    title: "Co-Working Spaces",
    description:
      "Fully furnished collaborative workspaces with high-speed internet, meeting rooms, and breakout zones.",
    icon: <FaUsers className="text-lg" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Incubation Programs",
    description:
      "Structured support for startups through mentorship, validation, networking, and growth acceleration.",
    icon: <FaLightbulb className="text-lg" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Business Support",
    description:
      "Access to legal, accounting, branding, marketing, and operational guidance for scaling ventures.",
    icon: <FaCogs className="text-lg" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Training & Workshops",
    description:
      "Regular expert-led sessions on entrepreneurship, innovation, leadership, and startup execution.",
    icon: <FaChartLine className="text-lg" />,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Funding Assistance",
    description:
      "Support in preparing for investors, grants, partnerships, and fundraising opportunities.",
    icon: <FaHandshake className="text-lg" />,
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with founders, investors, industry leaders, mentors, and ecosystem enablers.",
    icon: <FaNetworkWired className="text-lg" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Tech & Innovation Support",
    description:
      "Enable innovation with access to technology guidance, prototyping, and digital transformation support.",
    icon: <FaLaptop className="text-lg" />,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Office Solutions",
    description:
      "Flexible office solutions tailored for startups, teams, and growing businesses.",
    icon: <FaBuilding className="text-lg" />,
    color: "from-slate-500 to-slate-700",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const OfferingsCard = ({ offering, index }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-slate-300">
        {/* Top Gradient Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10`}
        ></div>

        {/* Top line */}
        <div
          className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${offering.color}`}
        ></div>

        {/* Icon */}
        <div
          className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${offering.color} text-white shadow-md`}
        >
          {offering.icon}
        </div>

        {/* Title */}
        <h3 className="relative mb-3 text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
          {offering.title}
        </h3>

        {/* Description */}
        <p className="relative mb-6 text-sm leading-7 text-slate-600 flex-grow">
          {offering.description}
        </p>

        {/* CTA */}
        <div className="relative inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-all duration-300 group-hover:text-cyan-600">
          Learn More
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

const Offerings = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background decorative glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 sm:mb-14 md:mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-700 shadow-sm backdrop-blur-md">
            ✨ What We Offer
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Empowering Founders with
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              the Right Ecosystem
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            From workspaces and incubation to mentorship, training, and funding
            support — IncubeNation is designed to help ideas grow into
            impactful ventures.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {offeringsData.map((offering, index) => (
            <OfferingsCard key={index} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;