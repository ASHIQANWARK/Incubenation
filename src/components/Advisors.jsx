import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Star, Sparkles, Network, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdvisorsSection = () => {
  const navigate = useNavigate();

  const handleViewAdvisors = () => {
    navigate("/advisors");
  };

  const features = [
    {
      icon: <Star className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Expert Guidance",
      description: "Access industry-specific mentorship and practical founder advice.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Network className="text-cyan-600 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Network Access",
      description: "Connect with mentors, investors, partners, and ecosystem leaders.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <TrendingUp className="text-violet-600 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Growth Support",
      description: "Get strategic direction for startup growth, traction, and scale.",
      color: "from-violet-500 to-fuchsia-600",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-700 shadow-sm backdrop-blur-md">
            <Sparkles size={15} />
            Advisory Ecosystem
          </div>

          {/* Icon */}
          <div className="mt-6 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-white/80 border border-slate-200 shadow-sm backdrop-blur-xl">
              <Users className="text-cyan-600 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight px-2 sm:px-0">
            Meet Our
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Advisory Board
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-2 sm:px-0 leading-8">
            We are building a powerful network of industry experts, mentors, and successful entrepreneurs
            to help startups navigate challenges, unlock opportunities, and scale with confidence.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-12 mb-10 sm:mb-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500"
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10`}></div>

                {/* Top line */}
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color}`}></div>

                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-7">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleViewAdvisors}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Meet Our Advisors</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorsSection;