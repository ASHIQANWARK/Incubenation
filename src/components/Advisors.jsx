import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdvisorsSection = () => {
  const navigate = useNavigate();

  const handleViewAdvisors = () => {
    navigate("/advisors");
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500/20 rounded-2xl border border-blue-500/30">
              <Users className="text-blue-400 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisory Board</span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-200 mb-6 sm:mb-8 lg:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            We're building a network of industry experts and successful entrepreneurs 
            to guide our startups towards success.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Expert Guidance",
                description: "Industry-specific insights and mentorship"
              },
              {
                icon: <Users className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Network Access",
                description: "Connect with investors and partners"
              },
              {
                icon: <ArrowRight className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />,
                title: "Growth Support",
                description: "Strategic advice for scaling businesses"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 sm:mb-3 lg:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleViewAdvisors}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center max-w-xs sm:max-w-none mx-auto"
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