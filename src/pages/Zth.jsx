import React, { useState, useEffect } from 'react';
import { Calendar, Target, TrendingUp, Users, Award, Clock, CheckCircle, ArrowRight, Play, Star, Zap, Shield, BookOpen, BarChart3, Rocket, Lightbulb, Sparkles, Globe, HeartHandshake, MessageCircle, ChevronRight } from 'lucide-react';
// Import mentor images - make sure these files exist in your assets/mentors folder
import vikrantImage from '../assets/images/Vikrant.jpeg';
import anjaliImage from '../assets/images/anjali.jpg';
import shubhamImage from '../assets/images/shubham.jpeg';
import girishImage from '../assets/images/girish.jpg';

const ZeroToHundredPage = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { week: 0, title: "Discovery & Mindset", icon: <Lightbulb className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { week: 4, title: "MVP Development", icon: <Rocket className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { week: 8, title: "Market Fit & Traction", icon: <Target className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { week: 12, title: "Scaling & Investment", icon: <TrendingUp className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { week: 16, title: "Demo Day & Launch", icon: <Award className="w-6 h-6" />, color: "from-yellow-500 to-amber-500" }
  ];

  const weeklyCurriculum = [
    { week: 1, title: "Idea Validation & Customer Discovery", topics: ["Problem-Solution Fit", "Customer Interviews", "Market Sizing", "Competitive Analysis"] },
    { week: 2, title: "Business Model Canvas", topics: ["Value Proposition", "Revenue Streams", "Key Metrics", "Cost Structure"] },
    { week: 3, title: "Lean Methodology", topics: ["Build-Measure-Learn", "Pivot or Persevere", "Minimum Viable Product", "Continuous Deployment"] },
    { week: 4, title: "Product Strategy", topics: ["User Stories", "Product Roadmap", "Feature Prioritization", "Prototyping"] },
    { week: 5, title: "UI/UX Fundamentals", topics: ["Design Thinking", "User Personas", "Wireframing", "Usability Testing"] },
    { week: 6, title: "Technical Architecture", topics: ["Tech Stack Selection", "Database Design", "APIs & Integration", "Security Basics"] },
    { week: 7, title: "Rapid Development", topics: ["Agile Methodologies", "Version Control", "Code Reviews", "Testing Strategies"] },
    { week: 8, title: "MVP Launch", topics: ["Deployment Pipeline", "Monitoring Tools", "User Onboarding", "Feedback Loops"] },
    { week: 9, title: "Marketing Fundamentals", topics: ["Digital Marketing", "Content Strategy", "SEO Basics", "Social Media Growth"] },
    { week: 10, title: "Growth Hacking", topics: ["A/B Testing", "Referral Programs", "Conversion Optimization", "Retention Tactics"] },
    { week: 11, title: "Sales & Partnerships", topics: ["B2B Sales Process", "Partnership Development", "Pricing Strategy", "Negotiation Skills"] },
    { week: 12, title: "Financial Modeling", topics: ["Unit Economics", "Cash Flow Management", "Fundraising Strategy", "Investor Pitch"] },
    { week: 13, title: "Team Building", topics: ["Hiring Strategy", "Company Culture", "Equity Distribution", "Leadership Skills"] },
    { week: 14, title: "Legal & Operations", topics: ["IP Protection", "Contract Templates", "Regulatory Compliance", "Operational Systems"] },
    { week: 15, title: "Investor Readiness", topics: ["Due Diligence Prep", "Term Sheets", "Valuation Methods", "Networking Strategy"] },
    { week: 16, title: "Demo Day Preparation", topics: ["Pitch Perfection", "Storytelling", "Live Demo Setup", "Investor Q&A"] }
  ];

  const mentors = [
    { 
      name: "Vikrant Khanolkar", 
      title: "Business Development & E-commerce Expert", 
      role: "Business Development & E-commerce Expert",
      image: vikrantImage,
      description: "With 17+ years of experience across global brands like Whirlpool, Black+Decker, RhinoShield, and PopSockets, Vikrant is a seasoned leader in business development, P&L management, and e-commerce growth.",
      expertise: ["Business Development", "E-commerce", "P&L Management"],
      experience: "17+ years"
    },
    { 
      name: "Anjali Kochar", 
      title: "Media Strategy & Personal Branding Expert", 
      role: "Media Strategy & Personal Branding Expert",
      image: anjaliImage,
      description: "With over 8 years of experience across content and media, Anjali brings rich expertise in media strategy, personal branding, and marketing.",
      expertise: ["Media Strategy", "Personal Branding", "Content Marketing"],
      experience: "8+ years"
    },
    { 
      name: "Shubham Mehta", 
      title: "Mentor, Fundraising & Strategy", 
      role: "Fundraising & Strategy Lead",
      image: shubhamImage,
      description: "With 12+ years in the startup ecosystem, Shubham specializes in fundraising, growth, and strategy. Currently Fundraising & Strategy Lead at EMotorad.",
      expertise: ["Fundraising", "Growth Strategy", "Startup Ecosystem"],
      experience: "12+ years"
    },
    { 
      name: "Girish Kashwani", 
      title: "Business Strategist & Startup Enabler", 
      role: "Business Strategist & Startup Enabler",
      image: girishImage,
      description: "An accomplished business leader and author with over 20 years of proven success. Founder of PK Consulting, Strategic Partner at 3D Capital.",
      expertise: ["Business Strategy", "Startup Consulting", "Growth Advisory"],
      experience: "20+ years"
    },
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "$100K Investment Ready", desc: "Pitch to 50+ angels & VCs" },
    { icon: <Users className="w-6 h-6" />, title: "Founder Community", desc: "Join 500+ successful alumni" },
    { icon: <Star className="w-6 h-6" />, title: "1-on-1 Mentorship", desc: "Weekly sessions with industry experts" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Network", desc: "Access to partner ecosystems" }
  ];

  const stats = [
    { value: "90%", label: "Alumni raise funding" },
    { value: "4.9", label: "Founder satisfaction rating" },
    { value: "8+", label: "Startups accelerated" },
    { value: "100+", label: "Investor Network" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-700">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Limited seats for Spring 2025 cohort</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              From Zero to $100M
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A 4-month intensive incubation program that transforms founders into CEOs. 
              Launch, scale, and raise capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
                Apply for Cohort <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <Play className="w-5 h-5" /> Watch Intro
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-on-scroll">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section id="program" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your 16-Week Journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From idea to investment-ready startup with weekly milestones and expert guidance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 hidden md:block"></div>
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-16 animate-on-scroll`}>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className={`bg-gradient-to-r ${milestone.color} p-6 rounded-2xl shadow-xl border border-gray-700 transform transition hover:scale-105`}>
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                      {milestone.icon}
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-200">
                      Week {milestone.week} - Focus on validating, building, and scaling your startup
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border-4 border-purple-500 rounded-full flex items-center justify-center hidden md:flex z-10">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section id="curriculum" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Curriculum</h2>
            <p className="text-gray-400 text-lg">Week-by-week mastery of startup fundamentals</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-6 py-2 rounded-lg transition ${activeTab === 'curriculum' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              Weekly Topics
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-6 py-2 rounded-lg transition ${activeTab === 'mentors' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              Expert Mentors
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-2 rounded-lg transition ${activeTab === 'benefits' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              Program Benefits
            </button>
          </div>

          <div className="animate-fadeIn">
            {activeTab === 'curriculum' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyCurriculum.map((week, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition group">
                    <div className="text-purple-400 text-sm mb-2">Week {week.week}</div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-purple-400 transition">{week.title}</h3>
                    <ul className="space-y-2">
                      {week.topics.map((topic, tidx) => (
                        <li key={tidx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'mentors' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mentors.map((mentor, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-purple-500 transition group">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-purple-500 group-hover:scale-105 transition duration-300" 
                    />
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-purple-400 text-sm mb-2">{mentor.title}</p>
                    <div className="flex flex-wrap gap-1 justify-center mt-2">
                      {mentor.expertise.slice(0, 2).map((exp, i) => (
                        <span key={i} className="inline-block px-2 py-1 bg-gray-700 rounded-full text-xs">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30 hover:scale-105 transition duration-300">
                    <div className="text-purple-400 mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-on-scroll">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">16 Intensive Weeks</h3>
              <p className="text-gray-400">Weekly sprints, workshops, and 1-on-1 mentorship sessions</p>
            </div>
            <div className="text-center p-6 animate-on-scroll">
              <div className="w-16 h-16 bg-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Peer Community</h3>
              <p className="text-gray-400">Join a cohort of ambitious founders building together</p>
            </div>
            <div className="text-center p-6 animate-on-scroll">
              <div className="w-16 h-16 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Demo Day</h3>
              <p className="text-gray-400">Present to 100+ investors, get feedback and potential term sheets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Empire?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the next cohort of founders building billion-dollar companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-xl transition transform hover:scale-105">
              Apply for Zero to 100
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500/20 transition">
              Download Brochure
            </button>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            * Rolling admissions. Only 30 spots available per cohort.
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ZeroToHundredPage;