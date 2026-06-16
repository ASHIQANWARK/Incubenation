import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "../assets/images/hero1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Globe,
  Rocket,
} from "lucide-react";

// Program icons
import IncubationCenterIcon from "../assets/images/incubenation-DP-3.png";
import IncubationOnlineIcon from "../assets/images/incubenation-DP-3.png";
import IncubationCampusIcon from "../assets/images/incubenation-DP-3.png";
import BusinessSolutionsIcon from "../assets/images/incubenation-DP-3.png";

gsap.registerPlugin(ScrollTrigger);

const focuses = [
  {
    title: "Incubation Center",
    description:
      "A physical ecosystem for founders to learn, collaborate, and build ventures with mentorship and startup support.",
    icon: IncubationCenterIcon,
    link: "/center",
    gradient: "from-cyan-500 to-blue-500",
    stats: "50+ Startups",
    feature: "Physical Space",
  },
  {
    title: "Incubation Online",
    description:
      "A digital growth platform with mentorship, startup education, resources, and virtual business support.",
    icon: IncubationOnlineIcon,
    link: "/online",
    gradient: "from-emerald-500 to-teal-500",
    stats: "100+ Members",
    feature: "Virtual Learning",
  },
  {
    title: "Incubation Campus",
    description:
      "A campus innovation initiative connecting students, founders, and institutions with entrepreneurial opportunities.",
    icon: IncubationCampusIcon,
    link: "/campus",
    gradient: "from-violet-500 to-purple-500",
    stats: "20+ Colleges",
    feature: "Student Focus",
  },
  {
    title: "Little Founders",
    description:
      "A future-ready entrepreneurship program for ages 10–18 to build creativity, confidence, and startup thinking.",
    icon: BusinessSolutionsIcon,
    link: "/young-founders",
    tag: "Coming Soon",
    gradient: "from-orange-500 to-amber-500",
    stats: "Ages 10-18",
    feature: "Youth Program",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61572794128072",
    label: "Facebook",
    hover: "hover:bg-blue-600",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/incubenation?igsh=MWRtbmxyZHNlYjhyMA==",
    label: "Instagram",
    hover: "hover:bg-pink-600",
  },
  {
    icon: FaX,
    href: "https://x.com/Incubenation",
    label: "X",
    hover: "hover:bg-black",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/incubenation",
    label: "LinkedIn",
    hover: "hover:bg-blue-700",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919035514812",
    label: "WhatsApp",
    hover: "hover:bg-green-600",
  },
];

// Color-changing text component for headings
const ColorChangingText = ({ text, colors }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-letter-color"
          style={{
            animationDelay: `${index * 0.1}s`,
            color: char === " " ? "transparent" : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

const FocusCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.fromTo(card,
      { opacity: 0, y: 60, rotateX: 5 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    return () => {
      card.removeEventListener("mousemove", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, [index]);

  return (
    <div ref={cardRef} className="group h-full perspective-1000">
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
        
        <div className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-10 right-10 w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
        </div>

        {item.tag && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 font-medium backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              {item.tag}
            </span>
          </div>
        )}

        <div className="relative mb-5">
          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
          <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <img
              src={item.icon}
              alt={item.title}
              className="h-full w-full object-contain brightness-0 invert"
            />
          </div>
        </div>

        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {item.title}
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-400 w-fit">
          <Zap size={12} className="text-cyan-400" />
          {item.feature}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-400 flex-grow">
          {item.description}
        </p>

        <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Active Members</span>
            <span className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
              {item.stats}
            </span>
          </div>
        </div>

        <Link
          to={item.link}
          className="relative inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2 ">
            Explore Program
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </span>
          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`}></div>
        </Link>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const programsRef = useRef(null);

  useEffect(() => {
    // Hero Section Animations
    const heroCtx = gsap.context(() => {
      gsap.fromTo('.hero-title-word', 
        { y: 80, opacity: 0, rotationX: -90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
        }
      );

      gsap.fromTo('.hero-description',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.8,
          ease: "power2.out",
        }
      );

      gsap.fromTo('.hero-cta',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 1,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo('.hero-badge',
        { scale: 0, rotate: -180, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
        }
      );

      // Floating orbs with enhanced movement
      gsap.to('.floating-orb-hero-1', {
        y: -60,
        x: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      gsap.to('.floating-orb-hero-2', {
        y: 50,
        x: -35,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to('.floating-orb-hero-3', {
        y: -40,
        x: -25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Social icons stagger
      gsap.fromTo('.social-icon',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 1.2,
          ease: "back.out(1.7)",
        }
      );

      // Letter color animation
      gsap.fromTo('.animate-letter-color',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 1.5,
          ease: "back.out(1.7)",
        }
      );

    }, heroRef);

    // Programs Section Animations
    const programsCtx = gsap.context(() => {
      gsap.fromTo('.programs-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.programs-section',
            start: 'top 80%',
          },
        }
      );

      gsap.to('.bg-shape-1', {
        rotate: 360,
        scale: 1.2,
        duration: 20,
        repeat: -1,
        ease: "linear",
        scrollTrigger: {
          trigger: '.programs-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.bg-shape-2', {
        rotate: -360,
        scale: 0.8,
        duration: 25,
        repeat: -1,
        ease: "linear",
        scrollTrigger: {
          trigger: '.programs-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

    }, programsRef);

    return () => {
      heroCtx.revert();
      programsCtx.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes letter-color-shift {
          0%, 100% { color: #3b82f6; }
          25% { color: #f97316; }
          50% { color: #22c55e; }
          75% { color: #f97316; }
        }
        @keyframes letter-color-shift-delayed {
          0%, 100% { color: #f97316; }
          25% { color: #22c55e; }
          50% { color: #3b82f6; }
          75% { color: #22c55e; }
        }
        @keyframes letter-color-shift-slow {
          0%, 100% { color: #22c55e; }
          25% { color: #3b82f6; }
          50% { color: #f97316; }
          75% { color: #3b82f6; }
        }
        .animate-letter-color {
          animation: letter-color-shift 4s ease-in-out infinite;
          font-weight: 900;
        }
        .animate-letter-color:nth-child(3n) {
          animation-name: letter-color-shift-delayed;
        }
        .animate-letter-color:nth-child(3n+1) {
          animation-name: letter-color-shift;
        }
        .animate-letter-color:nth-child(3n+2) {
          animation-name: letter-color-shift-slow;
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(120deg) scale(1.1); }
          66% { transform: translateY(10px) rotate(240deg) scale(0.9); }
        }
        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
        .animate-float-particle-delayed {
          animation: float-particle 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-particle-slow {
          animation: float-particle 12s ease-in-out infinite;
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative overflow-hidden text-white min-h-[90vh] lg:min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/60" />

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-orb-hero-1 absolute -top-20 left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="floating-orb-hero-2 absolute top-1/3 right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="floating-orb-hero-3 absolute bottom-10 left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

       

        {/* DPIIT Certificate Badge */}
        <div ref={badgeRef} className="hero-badge absolute top-16 sm:top-20 md:top-24 right-4 sm:right-8 md:right-12 lg:right-16 z-20">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-md opacity-50" />
                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                      <SlBadge className="text-white" size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight">
                      DPIIT Registered
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm text-emerald-300 font-semibold mt-0.5">
                      Startup India Recognized
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">
                      DIPP259673
                    </span>
                  </div>

                  <div className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-full mt-3 w-64 sm:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none z-30">
              <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl">
                <p className="text-xs font-semibold text-white mb-2">Government Recognition</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Officially recognized by DPIIT, Ministry of Commerce & Industry, Government of India
                </p>
              </div>
              <div className="absolute -top-1 right-4 w-2 h-2 rotate-45 bg-slate-900/95 border-l border-t border-slate-700/50" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" />
              Building the Future of Entrepreneurship
            </div>

            {/* Heading with Color-Changing Letters */}
            <h1 className="mb-6 md:mb-8">
              <span className="hero-title-word block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                Where{" "}
                <ColorChangingText text="Ideas Begin," colors={['blue', 'orange', 'green']} />
              </span>
              <span className="hero-title-word block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mt-2">
                Startups{" "}
                <ColorChangingText text="Grow," colors={['orange', 'green', 'blue']} />
              </span>
              <span className="hero-title-word block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mt-2">
                and Founders{" "}
                <ColorChangingText text="Rise." colors={['green', 'blue', 'orange']} />
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description mx-auto mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300/90 px-2">
              IncubeNation is a next-generation startup ecosystem designed to
              empower entrepreneurs, students, young founders, and innovators
              through physical incubation, digital learning, and campus-driven
              opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 sm:px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
              >
                Connect With Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 sm:px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Explore IncubeNation
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 sm:mt-12">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Connect Socially
              </p>
              <div className="flex justify-center gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`social-icon flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${social.hover} hover:border-transparent hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="text-xs sm:text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section ref={programsRef} className="programs-section relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0A0A0F] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-shape-1 absolute -top-40 -right-40 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl" />
          <div className="bg-shape-2 absolute -bottom-40 -left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 blur-3xl" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-cyan-500/3 via-purple-500/3 to-pink-500/3 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="programs-header text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Star size={14} className="text-cyan-400" />
              Our Programs
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-6">
              Designed for Every{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Stage of Innovation
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
              From young innovators to startup founders, our ecosystem is built to support ideas, growth, and real-world impact.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {focuses.map((item, index) => (
                <FocusCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-500">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield size={16} className="text-emerald-400" />
              DPIIT Recognized
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Globe size={16} className="text-cyan-400" />
              Pan India Network
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Rocket size={16} className="text-purple-400" />
              50+ Startups Launched
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;