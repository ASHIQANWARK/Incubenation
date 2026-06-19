import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, ArrowRight, Star, Sparkles, Network, TrendingUp, Award, Briefcase, Target, Zap, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AdvisorsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsRef = useRef([]);

  const handleViewAdvisors = () => {
    navigate("/advisors");
  };

  const features = [
    {
      icon: <Star className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Expert Guidance",
      description: "Access industry-specific mentorship and practical founder advice from seasoned entrepreneurs and domain experts.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50/80",
      borderColor: "border-amber-200",
      hoverBg: "hover:bg-amber-50/90",
      stats: "150+ Experts",
      iconBg: "bg-amber-100",
    },
    {
      icon: <Network className="text-cyan-600 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Network Access",
      description: "Connect with mentors, investors, partners, and ecosystem leaders who can accelerate your startup's growth journey.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50/80",
      borderColor: "border-cyan-200",
      hoverBg: "hover:bg-cyan-50/90",
      stats: "500+ Connections",
      iconBg: "bg-cyan-100",
    },
    {
      icon: <TrendingUp className="text-violet-600 w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Growth Support",
      description: "Get strategic direction for startup growth, traction, and scale with data-driven insights and proven frameworks.",
      color: "from-violet-500 to-fuchsia-600",
      bgColor: "bg-violet-50/80",
      borderColor: "border-violet-200",
      hoverBg: "hover:bg-violet-50/90",
      stats: "2x Growth",
      iconBg: "bg-violet-100",
    },
  ];

  const additionalStats = [
    { label: "Industry Experts", value: "50+", icon: <Award className="w-4 h-4" /> },
    { label: "Startups Supported", value: "200+", icon: <Target className="w-4 h-4" /> },
    { label: "Funding Raised", value: "$100M+", icon: <Zap className="w-4 h-4" /> },
    { label: "Global Network", value: "25+", icon: <Globe className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([badgeRef.current, iconRef.current, titleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotateX: 15,
      });

      // Animate badge
      gsap.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate icon with bounce
      gsap.to(iconRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title with gradient reveal
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate description with stagger
      gsap.to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate feature cards with 3D rotation
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          delay: 0.6 + index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover animation for each card
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            });
          });
        }
      });

      // Animate CTA button
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate floating stats
      gsap.utils.toArray(".stat-item").forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 1 + index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax effect on background orbs
      gsap.utils.toArray(".bg-orb").forEach((orb) => {
        gsap.to(orb, {
          y: -30,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40"
    >
     

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          {/* Badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-700 shadow-sm backdrop-blur-md"
          >
            <Sparkles size={15} className="text-cyan-500" />
            Advisory Ecosystem
          </div>

          {/* Icon */}
          <div 
            ref={iconRef}
            className="mt-6 mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-200/30 shadow-lg backdrop-blur-xl">
              <Users className="text-cyan-600 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
            </div>
          </div>

          {/* Heading */}
          <div ref={titleRef}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight px-2 sm:px-0">
              Meet Our
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Advisory Board
              </span>
            </h2>
          </div>

          {/* Description */}
          <div ref={descRef}>
            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-2 sm:px-0 leading-8">
              We are building a powerful network of industry experts, mentors, and successful entrepreneurs
              to help startups navigate challenges, unlock opportunities, and scale with confidence.
            </p>
          </div>
        </div>

        

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mt-12 mb-10 sm:mb-12 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-sm transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
              
              {/* Top animated line */}
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>

              {/* Shimmer effect */}
              <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>

              <div className="relative flex flex-col items-center text-center">
                {/* Icon with pulse effect */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 ${feature.iconBg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} border ${feature.borderColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="mt-4 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button with enhanced animation */}
        <div 
          ref={ctaRef}
          className="text-center"
        >
          <motion.button
            onClick={handleViewAdvisors}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden"
          >
            {/* Button background shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Meet Our Advisors</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
              Trusted by 500+ founders
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              Industry recognized
            </span>
          </div>
        </div>
      </div>

      {/* Add shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default AdvisorsSection;