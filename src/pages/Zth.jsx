import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Users, Award, CheckCircle, ArrowRight, Star, Globe, Timer, Mic, Video } from 'lucide-react';
// Import mentor images - make sure these files exist in your assets/mentors folder
import vikrantImage from '../assets/images/Vikrant.jpeg';
import anjaliImage from '../assets/images/anjali.jpg';
import shubhamImage from '../assets/images/shubham.jpeg';
import girishImage from '../assets/images/girish.jpg';

gsap.registerPlugin(ScrollTrigger);

// Replace with your actual Google Form link
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfo84Pz9SuT4jalRnNFFoxlJxsere-Rp7CurAA-HV6wdPEe1g/viewform?usp=sharing&ouid=103863545385166536972";

// Custom icon components to avoid naming conflicts
const ZapIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const RocketIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const LightbulbIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const ZeroToHundredPage = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const countdownRef = useRef(null);

  // Fixed launch date: June 27, 2026 at 18:30:00
  const launchDate = new Date(2026, 5, 27, 18, 30, 0);

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Hero animations
    const heroCtx = gsap.context(() => {
      gsap.fromTo('.hero-title', 
        { y: 80, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
      gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo('.hero-cta', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );
      
      gsap.to('.floating-orb-1', {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to('.floating-orb-2', {
        y: 30,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    }, heroRef);

    // Timeline animations
    const timelineCtx = gsap.context(() => {
      if (!isMobile) {
        gsap.fromTo('.timeline-line', {
          scaleY: 0,
          transformOrigin: 'top center'
        }, {
          scaleY: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.5
          }
        });
      }

      gsap.utils.toArray('.milestone-card').forEach((card, i) => {
        const xOffset = isMobile ? 0 : (i % 2 === 0 ? -100 : 100);
        
        gsap.fromTo(card, {
          opacity: 0,
          x: xOffset,
        }, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, timelineRef);

    // Curriculum cards animation
    gsap.fromTo('.curriculum-card', {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.curriculum-grid',
        start: 'top 80%',
      }
    });

    // Mentors cards animation
    gsap.fromTo('.mentor-card', {
      opacity: 0,
      y: 50,
      scale: 0.9,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.mentors-grid',
        start: 'top 80%',
      }
    });

    // Countdown timer animation
    const countdownCtx = gsap.context(() => {
      gsap.fromTo('.countdown-number', {
        scale: 1,
        opacity: 0.5
      }, {
        scale: 1.05,
        opacity: 1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });
    }, countdownRef);

    return () => {
      heroCtx.revert();
      timelineCtx.revert();
      countdownCtx.revert();
    };
  }, [isMobile]);

  const milestones = [
    { week: 0, title: "Discovery & Mindset", icon: <LightbulbIcon className="w-5 h-5 md:w-6 md:h-6" />, color: "from-purple-500 to-pink-500", desc: "Ideation, problem validation, and founder mindset development" },
    { week: 4, title: "MVP Development", icon: <RocketIcon className="w-5 h-5 md:w-6 md:h-6" />, color: "from-blue-500 to-cyan-500", desc: "Rapid prototyping, user testing, and product iteration" },
    { week: 8, title: "Market Fit & Traction", icon: <Target className="w-5 h-5 md:w-6 md:h-6" />, color: "from-green-500 to-emerald-500", desc: "Customer acquisition, growth experiments, and metrics optimization" },
    { week: 12, title: "Scaling & Investment", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, color: "from-orange-500 to-red-500", desc: "Fundraising preparation, financial modeling, and pitch refinement" },
    { week: 16, title: "Online Pitch Session", icon: <Mic className="w-5 h-5 md:w-6 md:h-6" />, color: "from-yellow-500 to-amber-500", desc: "Present to investors virtually, secure funding, and go-to-market strategy" }
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
    { week: 16, title: "Online Pitch Session Prep", topics: ["Virtual Pitch Mastery", "Digital Storytelling", "Live Demo Setup", "Virtual Investor Q&A"] }
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
    { icon: <ZapIcon className="w-5 h-5 md:w-6 md:h-6" />, title: "Investment Readiness", desc: "Pitch preparation, financial modeling, and direct access to our investor network" },
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, title: "Founder Community", desc: "Join a curated cohort of ambitious founders and build your support network" },
    { icon: <Star className="w-5 h-5 md:w-6 md:h-6" />, title: "1-on-1 Mentorship", desc: "Weekly deep-dive sessions with industry veterans and domain experts" },
    { icon: <Video className="w-5 h-5 md:w-6 md:h-6" />, title: "Virtual Pitch Access", desc: "Pitch to investors via our online platform and connect with global stakeholders" }
  ];

  const padNumber = (num) => String(num).padStart(2, '0');

  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      <style>{`
        @keyframes hue-shift {
          0%, 100% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(15deg); }
          50% { filter: hue-rotate(30deg); }
          75% { filter: hue-rotate(15deg); }
        }
        @keyframes text-color-shift {
          0%, 100% { color: #c084fc; }
          20% { color: #f472b6; }
          40% { color: #fb923c; }
          50% { color: #facc15; }
          80% { color: #f472b6; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes countdown-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-hue-shift {
          animation: hue-shift 6s ease-in-out infinite;
        }
        .animate-text-color {
          animation: text-color-shift 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        .gradient-text-shift {
          background: linear-gradient(270deg, #c084fc, #f472b6, #fb923c, #facc15, #f472b6, #c084fc);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 6s ease infinite;
        }
        .countdown-pulse {
          animation: countdown-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] floating-orb-1 animate-hue-shift"></div>
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-pink-600/20 rounded-full blur-[60px] md:blur-[100px] floating-orb-2 animate-hue-shift"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[150px]"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 md:mb-6 leading-none tracking-tighter px-2">
            <span className="gradient-text-shift">
              Zero to 100
            </span>
          </h1>
          <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-3 md:mb-4 max-w-xl md:max-w-3xl mx-auto font-light px-4">
            The Ultimate Founder Incubation Program
          </p>
          <p className="hero-subtitle text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-10 max-w-md md:max-w-2xl mx-auto px-4">
            A 16-week intensive journey to transform your startup idea into an investment-ready venture, culminating in a live online pitch session
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <button 
              onClick={openGoogleForm}
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-base md:text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-hue-shift"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>
            <button 
              onClick={() => {
                const programSection = document.getElementById('program');
                programSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/10 rounded-full font-semibold text-base md:text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Explore Program
            </button>
          </div>

          <div className="hero-cta flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-16 px-4">
            {['16-Week Intensive', 'Expert Mentorship', 'Investor Access', 'Online Pitch Session'].map((feature, i) => (
              <div key={i} className="px-3 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs md:text-sm text-gray-300 hover:border-purple-500/50 transition-all duration-300">
                <span className="animate-text-color">{feature.split(' ')[0]}</span> {feature.split(' ').slice(1).join(' ')}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Pitch Session Countdown Section */}
      <section className="py-12 md:py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 mb-3 md:mb-4">
            <Mic className="w-4 h-4 md:w-5 md:h-5 animate-text-color" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest animate-text-color">Online Pitch Session</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 gradient-text-shift">June 27th, 2026</h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto px-2">
            Present your startup to a panel of investors and industry experts in our flagship virtual pitch event.
            Applications are now open for our founding cohort.
          </p>
          
          {/* Responsive Countdown Timer */}
          <div ref={countdownRef} className="inline-flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 md:mb-8">
            <div className="text-center">
              <div className="countdown-number countdown-pulse text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black gradient-text-shift mb-1 md:mb-2">
                {padNumber(timeLeft.days)}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 uppercase tracking-wider md:tracking-widest font-medium">Days</div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-700 self-start mt-1 md:mt-2">:</div>
            <div className="text-center">
              <div className="countdown-number countdown-pulse text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black gradient-text-shift mb-1 md:mb-2" style={{ animationDelay: '0.2s' }}>
                {padNumber(timeLeft.hours)}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 uppercase tracking-wider md:tracking-widest font-medium">Hours</div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-700 self-start mt-1 md:mt-2">:</div>
            <div className="text-center">
              <div className="countdown-number countdown-pulse text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black gradient-text-shift mb-1 md:mb-2" style={{ animationDelay: '0.4s' }}>
                {padNumber(timeLeft.minutes)}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 uppercase tracking-wider md:tracking-widest font-medium">Minutes</div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-gray-700 self-start mt-1 md:mt-2">:</div>
            <div className="text-center">
              <div className="countdown-number countdown-pulse text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black gradient-text-shift mb-1 md:mb-2" style={{ animationDelay: '0.6s' }}>
                {padNumber(timeLeft.seconds)}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500 uppercase tracking-wider md:tracking-widest font-medium">Seconds</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold animate-text-color">Limited</div>
              <div className="text-xs md:text-sm text-gray-500">Pitch Slots</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold animate-text-color">16</div>
              <div className="text-xs md:text-sm text-gray-500">Prep Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold animate-text-color">4</div>
              <div className="text-xs md:text-sm text-gray-500">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Journey / Timeline */}
      <section ref={timelineRef} id="program" className="py-16 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight">The Journey</h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-2">A structured path from concept to online pitch session</p>
          </div>

          <div className="timeline-container relative">
            {/* Timeline line - hidden on mobile */}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500 via-pink-500 to-amber-500 hidden md:block animate-hue-shift"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-4 md:hidden w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-amber-500 animate-hue-shift"></div>
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className="milestone-card relative flex items-start mb-12 md:mb-24 last:mb-0 pl-10 md:pl-0">
                {/* Mobile timeline dot */}
                <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center z-10 animate-hue-shift mt-6 md:mt-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full"></div>
                </div>

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 lg:pr-16 md:text-right' : 'md:pl-8 lg:pl-16 md:ml-auto'}`}>
                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-white/[0.06] transition-all duration-500 group">
                    <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold mb-2 md:mb-3">
                      <span className="animate-text-color">WEEK {milestone.week}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 md:justify-start justify-start">
                      <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-r ${milestone.color} bg-opacity-10 animate-hue-shift`}>
                        {milestone.icon}
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight">The Curriculum</h2>
            <p className="text-base md:text-xl text-gray-400">Master every aspect of building a successful startup</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {['curriculum', 'mentors', 'benefits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white text-black shadow-lg shadow-purple-500/20' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab === 'curriculum' ? 'Weekly Modules' : tab === 'mentors' ? 'Our Mentors' : 'Program Benefits'}
              </button>
            ))}
          </div>

          <div className="transition-all duration-500">
            {activeTab === 'curriculum' && (
              <div className="curriculum-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {weeklyCurriculum.map((week, idx) => (
                  <div key={idx} className="curriculum-card bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="text-purple-400 text-xs md:text-sm font-semibold mb-2 md:mb-3 animate-text-color">Week {week.week}</div>
                    <h3 className="font-bold text-sm md:text-lg mb-3 md:mb-4 group-hover:text-purple-300 transition-colors">{week.title}</h3>
                    <ul className="space-y-1.5 md:space-y-2">
                      {week.topics.map((topic, tidx) => (
                        <li key={tidx} className="flex items-start gap-1.5 md:gap-2 text-gray-400 text-xs md:text-sm">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-text-color" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'mentors' && (
              <div className="mentors-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {mentors.map((mentor, idx) => (
                  <div key={idx} className="mentor-card bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="relative inline-block mb-3 md:mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-hue-shift"></div>
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-white/20" 
                      />
                    </div>
                    <h3 className="font-bold text-sm md:text-lg mb-1">{mentor.name}</h3>
                    <p className="text-purple-400 text-xs md:text-sm mb-2 md:mb-3 animate-text-color">{mentor.role}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {mentor.expertise.slice(0, 3).map((exp, i) => (
                        <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/5 rounded-full text-[10px] md:text-xs text-gray-300">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform animate-hue-shift">
                      <div className="animate-text-color">{benefit.icon}</div>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 animate-hue-shift"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[150px] animate-hue-shift"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tighter px-2">
            Ready to Pitch to<br/>
            <span className="gradient-text-shift">
              Top Investors?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 mb-6 md:mb-10 max-w-lg md:max-w-2xl mx-auto px-2">
            Join our online pitch session on June 27th. 
            Secure your slot and present to a curated panel of investors and industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button 
              onClick={openGoogleForm}
              className="group relative w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-base md:text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-hue-shift"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply to Pitch <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>
            <button 
              onClick={() => {
                // Create a dummy link to download info pack
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'ZeroTo100_InfoPack.pdf';
                link.click();
              }}
              className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 border border-white/10 rounded-full font-bold text-base md:text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Download Info Pack
            </button>
          </div>
          <p className="text-gray-500 mt-6 md:mt-8 text-xs md:text-sm px-2">
            Limited pitch slots available · Online pitch session on June 27, 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default ZeroToHundredPage;