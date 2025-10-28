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
    <section className="py-16 px-4 ">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-2xl border border-blue-500/30">
              <Users className="text-blue-400" size={36} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisory Board</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            We're building a network of industry experts and successful entrepreneurs 
            to guide our startups towards success.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Star className="text-yellow-400" size={24} />,
                title: "Expert Guidance",
                description: "Industry-specific insights and mentorship"
              },
              {
                icon: <Users className="text-green-400" size={24} />,
                title: "Network Access",
                description: "Connect with investors and partners"
              },
              {
                icon: <ArrowRight className="text-purple-400" size={24} />,
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Button to View Advisors */}
          <motion.button
            onClick={handleViewAdvisors}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-lg"
          >
            <Users size={20} />
            Meet Our Advisors
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorsSection;