import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Quote, Home, ChevronRight, Users, Star, Target, Lightbulb } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Placeholder images for new members - replace with actual images when available
import shubhamImage from "../assets/images/shubham.jpeg";
import avinashImage from "../assets/images/Avinash.jpg";
import vikrantImage from "../assets/images/Vikrant.jpeg";
import kirtiImage from "../assets/images/kirti.jpeg";

const advisors = [
  { 
    name: "Kirti Yadav", 
    title: "Mentor, Wellness & Entrepreneurship", 
    image: kirtiImage,
    description: "A wellness entrepreneur and certified holistic nutritionist, Kirti combines 10+ years of corporate experience at IBM, Target, and AIG with her entrepreneurial journey of building KuKClean—an IIM Bangalore and IIMR incubated startup that also received an RKVY Raftaar grant. Known for her authenticity and community-driven approach, she brings real-world lessons of resilience, creativity, and innovation to mentor aspiring founders at Incubenation.",
    expertise: ["Wellness", "Entrepreneurship", "Corporate Strategy"],
    experience: "10+ years"
  },
  { 
    name: "Shubham Mehta", 
    title: "Mentor, Fundraising & Strategy", 
    image: shubhamImage,
    description: "With 12+ years in the startup ecosystem, Shubham specializes in fundraising, growth, and strategy. Currently Fundraising & Strategy Lead at EMotorad, he has also worked with LoveLocal and Edelweiss, and actively mentors early-stage founders.",
    expertise: ["Fundraising", "Growth Strategy", "Startup Ecosystem"],
    experience: "12+ years"
  },
  { 
    name: "Avinash G Nair", 
    title: "Mentor, Marketing & Business Growth", 
    image: avinashImage,
    description: "CEO of eFoinix Solutions and Fractional CMO at ABM Innovations, brings 9+ years of expertise in marketing strategy, GTM planning, and business growth. He has mentored numerous startups across India and the Middle East, helping founders craft scalable models and achieve sustainable success.",
    expertise: ["Marketing", "GTM Strategy", "Business Growth"],
    experience: "9+ years"
  },
  { 
    name: "Vikrant Khanolkar", 
    title: "Business Development & E-commerce Expert", 
    image: vikrantImage,
    description: "With 17+ years of experience across global brands like Whirlpool, Black+Decker, RhinoShield, and PopSockets, Vikrant is a seasoned leader in business development, P&L management, and e-commerce growth. Currently leading GoLoud as Eksa Gaming's India partner, he brings deep expertise in scaling businesses, building distribution networks, and driving impactful growth.",
    expertise: ["Business Development", "E-commerce", "P&L Management"],
    experience: "17+ years"
  },
];

const AdvisorCard = ({ advisor, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative h-96 w-72 mx-auto perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front of Card */}
      <div className={`absolute inset-0 w-full h-full rounded-2xl bg-white shadow-xl transition-all duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180 opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center p-6 h-full">
          {/* Badge */}
          <div className="absolute -top-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full shadow-md">
            <span className="text-xs font-bold">ADVISOR</span>
          </div>
          
          {/* Profile Image */}
          <div className="relative mt-6 mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2A3F80] shadow-lg">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2 shadow-md">
              <Award size={16} className="text-white" />
            </div>
          </div>
          
          {/* Name and Title */}
          <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{advisor.name}</h3>
          <p className="text-blue-600 text-sm font-medium text-center mb-2">{advisor.title}</p>
          
          {/* Experience */}
          <div className="bg-blue-50 rounded-lg px-3 py-1 mb-3">
            <span className="text-blue-700 text-xs font-semibold">{advisor.experience} Experience</span>
          </div>
          
          {/* Short Description Preview */}
          <p className="text-gray-600 text-sm text-center line-clamp-3">
            {advisor.description.substring(0, 100)}...
          </p>
          
          {/* Hover Indicator */}
          <div className="mt-auto pt-4">
            <div className="flex justify-center items-center text-blue-500">
              <span className="text-xs mr-2">Hover to learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back of Card */}
      <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-6 shadow-xl transition-all duration-700 transform-style-preserve-3d ${isFlipped ? 'opacity-100' : 'rotate-y-180 opacity-0'}`}>
        <div className="flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote size={24} className="text-blue-200" />
          </div>
          
          {/* Full Description */}
          <p className="text-sm text-white/90 mb-4 flex-grow italic">
            "{advisor.description}"
          </p>
          
          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {advisor.expertise.map((skill, idx) => (
              <span 
                key={idx}
                className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AdvisorsPage = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "20+", label: "Startups Mentored" },
    { number: "2+", label: "Years Combined Experience" },
    { number: "8+", label: "Industries Covered" },
    { number: "₹10Cr+", label: "Funds Raised" }
  ];

  const values = [
    {
      icon: <Target className="text-blue-400" size={32} />,
      title: "Strategic Guidance",
      description: "Expert direction for business growth and market positioning"
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: "Innovation Focus",
      description: "Fostering creative solutions and disruptive thinking"
    },
    {
      icon: <Users className="text-green-400" size={32} />,
      title: "Network Access",
      description: "Connections to investors, partners, and industry leaders"
    },
    {
      icon: <Star className="text-purple-400" size={32} />,
      title: "Mentorship Excellence",
      description: "Personalized guidance from seasoned professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-sm text-white/70 mb-8"
          >
            <Link to="/" className="flex items-center hover:text-white transition-colors">
              <Home size={16} />
              <span className="ml-2">Home</span>
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">Advisors</span>
          </motion.nav>

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisors</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Industry pioneers and visionary leaders dedicated to nurturing the next generation of entrepreneurs
            </p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisory Board</span>
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Our advisors bring unparalleled expertise and commitment to every startup journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-blue-200 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Grid Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Expert Advisors</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Meet the brilliant minds shaping the future of entrepreneurship with their extensive experience and knowledge
            </p>
          </motion.div>

          {/* Advisors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <AdvisorCard key={index} advisor={advisor} index={index} />
            ))}
          </div>
        </div>
      </section>

      

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AdvisorsPage;