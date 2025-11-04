import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaBook,
  FaLaptop,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaClock,
  FaMobileAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import imgLeft from "../assets/images/incube.jpg";

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
        <FaRocket className="text-xl" />
        <span className="text-sm font-semibold tracking-wider">DIGITAL INCUBATION PROGRAM</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        IncubeNation
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Online
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Empowering Founders Anytime, Anywhere with World-Class Digital Incubation
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
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          IncubeNation Online
        </span>
      </div>
    </div>
  </nav>
);

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imgLeft}
                  alt="IncubeNation Online Digital Platform"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-3 text-blue-600">
              <FaGraduationCap className="text-xl" />
              <span className="text-sm font-semibold tracking-wider uppercase">DIGITAL-FIRST INCUBATION</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Empowering Founders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Anytime, Anywhere
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                IncubeNation Online is our digital-first program designed to make high-quality startup 
                mentoring and entrepreneurship education accessible to founders across India and beyond.
              </p>
              <p>
                It bridges the gap between structured learning and real-world application by combining 
                curated curriculum with live mentoring sessions and on-demand resources.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Curated curriculum crafted for early-stage founders",
                "Live mentoring sessions with seasoned entrepreneurs",
                "On-demand resources including case studies and playbooks",
                "Certification collaborations with leading institutions"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're an aspiring entrepreneur with an idea or a startup founder looking to scale, 
              IncubeNation Online provides the flexibility of learning remotely while giving you access 
              to the same networks, mentorship, and growth frameworks as our in-person programs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Virtual One-on-One Mentorship",
      description: "Personalized guidance from industry experts and successful entrepreneurs tailored to your specific needs.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Resource Library Access",
      description: "Comprehensive library of templates, playbooks, case studies, and tools for every stage of growth.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Live Workshops & Webinars",
      description: "Interactive sessions with industry leaders covering the latest trends and practical strategies.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Global Networking",
      description: "Connect with founders, investors, and experts from around the world through our virtual community.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Remote-First Experience",
      description: "Complete incubation experience accessible from anywhere, designed for the digital age.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Industry Expert Access",
      description: "Direct access to professionals driving innovation across technology, business, and creative sectors.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
            <FaLightbulb className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Digital Incubation Experience
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for the modern entrepreneur who demands flexibility without compromising on quality
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, gradient, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative z-10">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const ProgramShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <FaHandshake className="text-xl" />
            <span className="text-sm font-semibold tracking-wider">READY TO START YOUR JOURNEY?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Talk to an Expert?
            </span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let us guide you through your startup journey — connect with one of our mentors now via WhatsApp 
            and take the first step towards turning your vision into reality.
          </p>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FaClock, text: "Flexible Scheduling", color: "from-blue-500 to-cyan-500" },
              { icon: FaMobileAlt, text: "Any Device Access", color: "from-purple-500 to-pink-500" },
              { icon: FaChartLine, text: "Proven Results", color: "from-green-500 to-teal-500" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4`}>
                  <item.icon className="text-xl" />
                </div>
                <p className="font-semibold text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="https://wa.me/9035514809"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:shadow-2xl inline-block"
          >
            Talk to Expert on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Online = () => {
  return (
    <div className="font-sans antialiased overflow-hidden">
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeaturesSection />
      <ProgramShowcase />
    </div>
  );
};

export default Online;