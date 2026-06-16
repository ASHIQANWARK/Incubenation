import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEye, FaBullseye, FaCheckCircle, FaRocket, FaUsers, FaGlobe } from "react-icons/fa";
import Image2 from "../assets/images/incubenation1.png";
import Image3 from "../assets/images/img21.png";
import img3 from "../assets/images/img22.png";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // About section animations
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Vision & Mission cards animation
      gsap.fromTo([visionRef.current, missionRef.current],
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(0.5)",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "Comprehensive incubation programs",
    "Expert mentorship network",
    "Resource optimization tools",
    "Market entry strategies",
  ];

  const visionPoints = [
    "Innovation-driven ecosystem",
    "Global entrepreneurial hub",
    "Sustainable growth models",
    "Collaborative community building",
  ];

  const missionPoints = [
    "Tailored mentorship programs",
    "Investment readiness preparation",
    "Global network access",
    "Sustainable growth strategies",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER - Enhanced */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm mb-4">
            <FaRocket className="text-cyan-400 text-sm" />
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">
              Who We Are
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-2">
              Entrepreneurship
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empowering visionaries, fueling innovation, and shaping the next
            generation of founders through a strong ecosystem.
          </p>
        </div>

        {/* ABOUT CARD - Enhanced Design */}
        <div ref={aboutRef} className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* IMAGE with 3D effect */}
          <div
            ref={imageRef}
            className="relative group perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              <img
                src={Image2}
                alt="About IncubeNation"
                className="w-full h-[350px] sm:h-[400px] object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            
          </div>

          {/* CONTENT */}
          <div ref={contentRef}>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl" />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transforming Vision into{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Value
                </span>
              </h2>

              <p className="text-base lg:text-lg text-slate-300 leading-relaxed mb-6">
                IncubeNation Bengaluru is a startup incubator created by Ique
                Ventures to support and develop early-stage startups. Our mission
                is to empower entrepreneurs with the right tools, mentorship, and
                ecosystem to build scalable businesses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-white/10"
                  >
                    <FaCheckCircle className="text-cyan-400 text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VISION + MISSION GRID - Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* VISION CARD */}
          <div
            ref={visionRef}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 transform rotate-45 translate-x-12 -translate-y-12" />
            </div>

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEye className="text-white text-2xl" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                To create a thriving startup ecosystem where innovation,
                entrepreneurship, and collaboration flourish across India and beyond.
              </p>

              <div className="space-y-3">
                {visionPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MISSION CARD */}
          <div
            ref={missionRef}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 transform rotate-45 translate-x-12 -translate-y-12" />
            </div>

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBullseye className="text-white text-2xl" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                To empower startups with tools, mentorship, and resources needed to
                transform ideas into impactful and scalable businesses.
              </p>

              <div className="space-y-3">
                {missionPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;