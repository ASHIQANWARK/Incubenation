import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Quote, Home, ChevronRight, Users, Star, Target, Lightbulb } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Placeholder images for new members - replace with actual images when available
import shubhamImage from "../assets/images/shubham.jpeg";
import avinashImage from "../assets/images/Avinash.jpg";
import vikrantImage from "../assets/images/Vikrant.jpeg";
import kirtiImage from "../assets/images/kirti.jpeg";
import DhanyaImage from "../assets/images/dhanya.jpg";
import GirishImage from "../assets/images/girish.jpg";
import chiranjeetImage from "../assets/images/chiranjeet.jpg";
import AnjaliImage from "../assets/images/anjali.jpg";
import PavitraImage from "../assets/images/pavitra.jpg";
import PreetiImage from "../assets/images/preethi.jpg";

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
    name: "Dhanya M", 
    title: "Digital Marketing & Ad Operations Expert", 
    image: DhanyaImage,
    description: "With over a decade of experience in marketing and ad operations, Dhanya has worked across global markets, leading digital campaign management, stakeholder collaboration, and team leadership. At Amazon Ads, she successfully led ad operations, optimized campaign performance, and built high-performing teams. Beyond her corporate journey, Dhanya has contributed as a HerKey Ambassador, conducting and monitoring skill development sessions to empower women professionals.",
    expertise: ["Digital Marketing", "Ad Operations", "Team Leadership"],
    experience: "10+ years"
  },
  { 
    name: "Girish Kashwani", 
    title: "Business Strategist & Startup Enabler", 
    image: GirishImage,
    description: "An accomplished business leader and author with over 20 years of proven success as part of our network. With a strong track record as a business strategist, growth advisor, and startup enabler, Girish has driven exceptional outcomes across IT, retail, manufacturing, education, and early-stage startups. As the Founder of PK Consulting, Strategic Partner at 3D Capital, and Co-founder & Managing Partner of a health-tech startup (in stealth mode), Girish is on a mission to democratize entrepreneurship education in India and beyond.",
    expertise: ["Business Strategy", "Startup Consulting", "Growth Advisory"],
    experience: "20+ years"
  },
  { 
    name: "Chiranjeeth I V", 
    title: "Learning & Development Specialist", 
    image: chiranjeetImage,
    description: "With a career spanning 8 years in the auto sector, 2 years in a startup, and 3 years in apparel retail, Chiranjeeth has designed impactful learning programs, coached teams to achieve excellence, and most importantly—helped people grow with a smile. His passion for empowering individuals and organizations makes him a perfect fit for our mission of nurturing the next generation of entrepreneurs. Beyond his professional journey, he is also an avid runner and traveler, bringing curiosity, discipline, and fresh perspectives into everything he does.",
    expertise: ["Learning & Development", "Team Coaching", "Organizational Growth"],
    experience: "13+ years"
  },
  { 
    name: "Anjali Kochar", 
    title: "Media Strategy & Personal Branding Expert", 
    image: AnjaliImage,
    description: "With over 8 years of experience across content and media, Anjali brings rich expertise in media strategy, personal branding, and marketing. Her deep understanding of industry dynamics and her passion for continuous learning make her an invaluable guide for young professionals and founders alike.",
    expertise: ["Media Strategy", "Personal Branding", "Content Marketing"],
    experience: "8+ years"
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
  { 
    name: "Pavithra Narra", 
    title: "Entrepreneur, Strategist & Psychologist", 
    image: PavitraImage,
    description: "A dynamic entrepreneur, strategist, and psychologist who blends business intelligence with human insight. As Founder & CEO of Prasha Sync and PowerNest, Pavithra has led global-scale initiatives in AI, HR-tech, and mental health innovation, mentoring founders and leadership teams to unlock their highest potential. With 11+ years of experience across fundraising, GTM, and organizational growth, she's passionate about helping early-stage founders navigate challenges with strategic clarity and emotional resilience. We're proud to have her join Incubenation as a Mentor & Advisor, guiding startups on their journey from idea to impact.",
    expertise: ["AI & HR-tech", "Fundraising", "Organizational Growth", "Mental Health Innovation"],
    experience: "11+ years"
  },
  { 
    name: "Preeti Kumari", 
    title: "Leadership & Executive Coach", 
    image: PreetiImage,
    description: "An ICF-credentialed PCC and ACTC Coach, to our growing circle of mentors at Incubenation! A true believer in the power of transitions, reflection, and growth, Preeti brings a unique blend of experience as a Leadership & Executive Coach, Team Coach, Corporate Trainer, and Facilitator. Having lived and worked across five countries, she brings a deep appreciation for diversity, systems thinking, and human connection. Preeti's work has been recognized with several honors, including Executive Coach of the Year, Promising Startup of the Year for KANVI, her startup, and Women Leader Award. Through KANVI, she helps leaders and teams transform uncertainty into opportunity and ideas into sustainable impact.",
    expertise: ["Leadership Coaching", "Executive Coaching", "Team Development", "Organizational Transformation"],
    experience: "Multiple years"
  }
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
      className="relative w-72 h-96 mx-auto perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Container */}
      <div className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl backface-hidden overflow-hidden">
          <div className="flex flex-col items-center p-4 h-full">
            {/* Badge */}
            <div className="absolute -top-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full shadow-md z-10">
              <span className="text-xs font-bold">ADVISOR</span>
            </div>
            
            {/* Profile Image */}
            <div className="relative mt-6 mb-3">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2A3F80] shadow-lg">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1 shadow-md">
                <Award size={14} className="text-white" />
              </div>
            </div>
            
            {/* Name and Title */}
            <h3 className="text-lg font-bold text-gray-900 text-center mb-1 leading-tight">
              {advisor.name}
            </h3>
            <p className="text-blue-600 text-xs font-medium text-center mb-2 leading-tight px-2">
              {advisor.title}
            </p>
            
            {/* Experience */}
            <div className="bg-blue-50 rounded-lg px-2 py-1 mb-2">
              <span className="text-blue-700 text-xs font-semibold">
                {advisor.experience} Experience
              </span>
            </div>
            
            {/* Short Description Preview */}
            <p className="text-gray-600 text-xs text-center flex-grow overflow-hidden px-2">
              {advisor.description.substring(0, 80)}...
            </p>
            
            {/* Hover Indicator */}
            <div className="mt-2 pt-2">
              <div className="flex justify-center items-center text-blue-500">
                <span className="text-xs mr-1">Hover to learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white rounded-2xl shadow-xl backface-hidden rotate-y-180 overflow-hidden">
          <div className="flex flex-col h-full p-4">
            {/* Quote Icon */}
            <div className="mb-2">
              <Quote size={20} className="text-blue-200" />
            </div>
            
            {/* Full Description */}
            <p className="text-xs text-white/90 mb-3 flex-grow overflow-y-auto custom-scrollbar italic">
              "{advisor.description}"
            </p>
            
            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-1">
              {advisor.expertise.map((skill, idx) => (
                <span 
                  key={idx}
                  className="bg-white/20 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
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
      <section className="relative py-16 px-4 overflow-hidden">
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
            className="flex items-center space-x-2 text-sm text-white/70 mb-6"
          >
            <Link to="/" className="flex items-center hover:text-white transition-colors">
              <Home size={14} />
              <span className="ml-1 text-sm">Home</span>
            </Link>
            <ChevronRight size={14} />
            <span className="text-white text-sm">Advisors</span>
          </motion.nav>

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisors</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-6 max-w-3xl mx-auto leading-relaxed">
              Industry pioneers and visionary leaders dedicated to nurturing the next generation of entrepreneurs
            </p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-300 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advisory Board</span>
            </h2>
            <p className="text-base text-blue-200 max-w-2xl mx-auto">
              Our advisors bring unparalleled expertise and commitment to every startup journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{value.title}</h3>
                  <p className="text-blue-200 text-xs">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Expert Advisors</span>
            </h2>
            <p className="text-base text-white max-w-2xl mx-auto">
              Meet the brilliant minds shaping the future of entrepreneurship with their extensive experience and knowledge
            </p>
          </motion.div>

          {/* Advisors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
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
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default AdvisorsPage;