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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const logoRef = useRef(null);
  const ctaRef = useRef(null);
  const logoContainerRef = useRef(null);
  const animationRef = useRef(null);

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

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setStartCounters(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only run animations when visible
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      // Header reveal animation - optimized
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );

      // Image reveal - optimized
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );

      // Stats cards staggered animation - optimized
      const statCards = statsRef.current?.children;
      if (statCards && statCards.length > 0) {
        gsap.fromTo(statCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(0.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Logo marquee animation with better performance
      if (logoRef.current && logoContainerRef.current) {
        const logoWidth = logoRef.current.scrollWidth / 2;
        
        // Use requestAnimationFrame for smoother animation
        let startTime = null;
        let paused = false;
        let progress = 0;
        
        const animateLogo = (timestamp) => {
          if (!startTime) startTime = timestamp;
          if (!paused) {
            const delta = (timestamp - startTime) / 1000;
            progress = (progress + delta * 30) % logoWidth;
            gsap.set(logoRef.current, { x: -progress });
          }
          startTime = timestamp;
          animationRef.current = requestAnimationFrame(animateLogo);
        };

        animationRef.current = requestAnimationFrame(animateLogo);

        // Pause on hover
        const handleMouseEnter = () => { paused = true; };
        const handleMouseLeave = () => { 
          paused = false; 
          startTime = null;
        };

        logoContainerRef.current.addEventListener("mouseenter", handleMouseEnter);
        logoContainerRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          if (logoContainerRef.current) {
            logoContainerRef.current.removeEventListener("mouseenter", handleMouseEnter);
            logoContainerRef.current.removeEventListener("mouseleave", handleMouseLeave);
          }
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isVisible]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950"
    >
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
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

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto px-4">
            We've helped startups and founders grow through strategic support,
            ecosystem partnerships, mentorship, and investor connections.
          </p>
        </div>

        {/* Logo Marquee - Optimized */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
          
          <div ref={logoContainerRef} className="overflow-hidden py-4">
            <div
              ref={logoRef}
              className="flex gap-6 sm:gap-8 lg:gap-10"
              style={{ width: "max-content" }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="group flex items-center justify-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]"
                >
                  <div className="relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:scale-105">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-9 lg:h-10 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src={mainImage}
                alt="Ecosystem Impact"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-white text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-semibold">+300% Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {stats.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${stat.gradient} transform rotate-45 translate-x-6 -translate-y-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                <div className="relative">
                  <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      <CountUp
                        start={startCounters ? 0 : stat.value}
                        end={startCounters ? stat.value : 0}
                        duration={2}
                        delay={index * 0.15}
                        enableScrollSpy={false}
                        useEasing={true}
                      >
                        {({ countUpRef }) => <span ref={countUpRef}>{stat.value}</span>}
                      </CountUp>
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-cyan-400">+</span>
                  </div>

                  <p className="text-base sm:text-lg font-semibold text-white mb-1">
                    {stat.text}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>

                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center mt-14 sm:mt-20">
          <button className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Explore Our Ecosystem</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;