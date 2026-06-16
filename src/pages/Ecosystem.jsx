import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CAP from "../assets/images/CAP.jpg";
import careerCafe from "../assets/images/careercafe.jpg";
import flyrad from "../assets/images/Flyrad.jpg";
import franchisify from "../assets/images/Franchisify.in (1).png";
import sib from "../assets/images/SIB.jpg";
import ceosquare from "../assets/images/CEO Square.png";
import wawu from "../assets/images/WAWU.png";
import mainImage from "../assets/images/img12.jpg";
import Karumitra from "../assets/images/km.jpg";
import owlytics from "../assets/images/LOGO_Owlytics by Ique Blue.jpg";
import legalquotient from "../assets/images/Legal Quotient Logo V.2.png";
import studyinindia from "../assets/images/siilogo-1.png";
import careercounsellor from "../assets/images/cc.png";
import launchecom from "../assets/images/lyec.jpg";

import {
  FaRocket,
  FaUsers,
  FaHandHoldingUsd,
  FaUniversity,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const EcosystemSection = () => {
  const [startCounters, setStartCounters] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const logoRef = useRef(null);
  const counterElements = useRef([]);

  const logos = [
    { src: CAP, alt: "IQUE CAP" },
    { src: wawu, alt: "WAWU FOUNDATION" },
    { src: legalquotient, alt: "LegalQuotient" },
    { src: Karumitra, alt: "Karumitra" },
    { src: ceosquare, alt: "Ceosquare" },
    { src: owlytics, alt: "Owlytics" },
    { src: studyinindia, alt: "StudyInIndia" },
    { src: careercounsellor, alt: "CareerCounsellor Consortium" },
    { src: launchecom, alt: "Launch Your Ecommerce" },
    { src: careerCafe, alt: "Career Cafe" },
    { src: flyrad, alt: "Flyrad" },
    { src: franchisify, alt: "Franchisify" },
    { src: sib, alt: "SIB" },
  ];

  const stats = [
    {
      value: 10,
      text: "Projects for entrepreneurs",
      icon: <FaUsers className="text-xl" />,
      gradient: "from-emerald-500 to-teal-500",
      description: "Empowering visionary founders",
    },
    {
      value: 25,
      text: "Startup support programmes",
      icon: <FaRocket className="text-xl" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Mentorship & resources",
    },
    {
      value: 12,
      text: "Projects to connect investors",
      icon: <FaHandHoldingUsd className="text-xl" />,
      gradient: "from-amber-500 to-orange-500",
      description: "Bridging capital & ideas",
    },
    {
      value: 20,
      text: "Projects with government infrastructure",
      icon: <FaUniversity className="text-xl" />,
      gradient: "from-indigo-500 to-purple-500",
      description: "Public-private partnerships",
    },
  ];

  useEffect(() => {
    // Main context for all animations
    const ctx = gsap.context(() => {
      // Header reveal animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image reveal with scale and rotate
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8, rotationX: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats cards staggered animation
      const statCards = statsRef.current?.children;
      if (statCards) {
        gsap.fromTo(statCards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              onEnter: () => setStartCounters(true),
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Logo marquee animation with smooth infinite scroll
      if (logoRef.current) {
        const logoWidth = logoRef.current.scrollWidth / 2;
        
        const logoAnimation = gsap.to(logoRef.current, {
          x: -logoWidth,
          duration: 40,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => parseFloat(x) % logoWidth + "px"
          }
        });

        // Pause on hover
        const logoContainer = logoRef.current.parentElement;
        logoContainer.addEventListener("mouseenter", () => logoAnimation.pause());
        logoContainer.addEventListener("mouseleave", () => logoAnimation.resume());

        return () => {
          logoContainer.removeEventListener("mouseenter", () => {});
          logoContainer.removeEventListener("mouseleave", () => {});
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section - Redesigned */}
        <div ref={headerRef} className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
            <FaChartLine className="text-cyan-400 text-sm" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              Our Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="block">100+ Projects &</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-2">
              Companies Supported
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We've helped startups and founders grow through strategic support,
            ecosystem partnerships, mentorship, and investor connections.
          </p>
        </div>

        {/* Logo Marquee - Enhanced */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-4">
            <div
              ref={logoRef}
              className="flex gap-6 sm:gap-8 lg:gap-10"
              style={{ width: "max-content" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center min-w-[130px] sm:min-w-[150px] lg:min-w-[170px]"
                >
                  <div className="relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-4 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:scale-105">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-9 sm:h-10 lg:h-11 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with 3D hover effect */}
          <div
            ref={imageRef}
            className="relative group perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
              <img
                src={mainImage}
                alt="Ecosystem Impact"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-white text-sm" />
                  <span className="text-white text-sm font-semibold">+300% Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid - Redesigned Cards */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${stat.gradient} transform rotate-45 translate-x-6 -translate-y-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      <CountUp
                        start={startCounters ? 0 : stat.value}
                        end={startCounters ? stat.value : 0}
                        duration={2.5}
                        delay={index * 0.2}
                        enableScrollSpy={false}
                        useEasing={true}
                      >
                        {({ countUpRef }) => <span ref={countUpRef}>{stat.value}</span>}
                      </CountUp>
                    </span>
                    <span className="text-3xl font-bold text-cyan-400">+</span>
                  </div>

                  {/* Text */}
                  <p className="text-lg font-semibold text-white mb-2">
                    {stat.text}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Explore Our Ecosystem</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EcosystemSection;