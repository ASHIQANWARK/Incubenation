import React from "react";
import { FaRocket, FaLightbulb, FaHandshake, FaChartLine, FaCogs, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const Business = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      <HeaderSection />
      <Breadcrumbs />
      <ComingSoonSection />
      <FeaturesPreview />
      <CTASection />
    </div>
  );
};

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
        <FaHandshake className="text-xl" />
        <span className="text-sm font-semibold tracking-wider">ENTERPRISE SOLUTIONS</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
        IncubeNation
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
          Business Solutions
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Transforming Enterprises Through Strategic Innovation and Growth Partnerships
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
    <div className="container mx-auto px-6">
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600 transition-colors duration-300">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Business Solutions
        </span>
      </div>
    </div>
  </nav>
);

const ComingSoonSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
            <FaRocket className="text-4xl text-white" />
          </div>
        </motion.div>

        <div className="inline-flex items-center space-x-2 text-green-600 mb-4">
          <FaLightbulb className="text-xl" />
          <span className="text-sm font-semibold tracking-wider">INNOVATION IN PROGRESS</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Coming
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            Soon
          </span>
        </h2>
        
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
        </div>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          We're crafting something extraordinary for enterprise innovation and business transformation. 
          Our team is working diligently to bring you comprehensive business solutions that drive growth and success.
        </p>

        {/* Countdown/Progress Indicator */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">Development Progress</span>
              <span className="text-sm font-bold text-green-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesPreview = () => {
  const features = [
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Enterprise Innovation",
      description: "Customized innovation frameworks for large-scale business transformation",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Growth Strategy",
      description: "Data-driven growth strategies and market expansion solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Team Empowerment",
      description: "Leadership development and team innovation programs",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-green-400 mb-4">
            <FaLightbulb className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">WHAT TO EXPECT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Business Solutions
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
          <div className="inline-flex items-center space-x-2 text-green-600 mb-4">
            <FaHandshake className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">GET NOTIFIED FIRST</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be the First to Know
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join our exclusive waiting list and be the first to access our revolutionary 
            business solutions when we launch.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Notify Me
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
              <FaHandshake className="text-2xl text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Inquiries</h3>
            <p className="text-gray-600">info@incubenation.com</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <FaRocket className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch Updates</h3>
            <p className="text-gray-600">Follow our progress and announcements</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Business;