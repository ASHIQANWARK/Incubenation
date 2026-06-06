import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaNetworkWired,
  FaLaptop,
  FaBuilding,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const offeringsData = [
  {
    title: "Co-Working Spaces",
    description:
      "Fully furnished collaborative workspaces with high-speed internet, meeting rooms, and breakout zones.",
    icon: <FaUsers className="text-base" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    bgGradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    title: "Incubation Programs",
    description:
      "Structured support for startups through mentorship, validation, networking, and growth acceleration.",
    icon: <FaLightbulb className="text-base" />,
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-500/20 to-orange-500/20",
    bgGradient: "from-amber-500/5 to-orange-500/5",
  },
  {
    title: "Business Support",
    description:
      "Access to legal, accounting, branding, marketing, and operational guidance for scaling ventures.",
    icon: <FaCogs className="text-base" />,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 to-pink-500/20",
    bgGradient: "from-purple-500/5 to-pink-500/5",
  },
  {
    title: "Training & Workshops",
    description:
      "Regular expert-led sessions on entrepreneurship, innovation, leadership, and startup execution.",
    icon: <FaChartLine className="text-base" />,
    color: "from-green-500 to-teal-500",
    gradient: "from-green-500/20 to-teal-500/20",
    bgGradient: "from-green-500/5 to-teal-500/5",
  },
  {
    title: "Funding Assistance",
    description:
      "Support in preparing for investors, grants, partnerships, and fundraising opportunities.",
    icon: <FaHandshake className="text-base" />,
    color: "from-rose-500 to-red-500",
    gradient: "from-rose-500/20 to-red-500/20",
    bgGradient: "from-rose-500/5 to-red-500/5",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with founders, investors, industry leaders, mentors, and ecosystem enablers.",
    icon: <FaNetworkWired className="text-base" />,
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-500/20 to-blue-500/20",
    bgGradient: "from-indigo-500/5 to-blue-500/5",
  },
  {
    title: "Tech & Innovation Support",
    description:
      "Enable innovation with access to technology guidance, prototyping, and digital transformation support.",
    icon: <FaLaptop className="text-base" />,
    color: "from-cyan-500 to-sky-500",
    gradient: "from-cyan-500/20 to-sky-500/20",
    bgGradient: "from-cyan-500/5 to-sky-500/5",
  },
  {
    title: "Office Solutions",
    description:
      "Flexible office solutions tailored for startups, teams, and growing businesses.",
    icon: <FaBuilding className="text-base" />,
    color: "from-slate-500 to-slate-700",
    gradient: "from-slate-500/20 to-slate-700/20",
    bgGradient: "from-slate-500/5 to-slate-700/5",
  },
];

const OfferingsCard = ({ offering, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;

    // Initial card animation
    gsap.fromTo(card,
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animations
    card.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.1,
        rotate: 15,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
      
      gsap.to(card, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, [index]);

  return (
    <div ref={cardRef} className="group h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
        
        {/* Subtle background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${offering.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>

        {/* Top accent line */}
        <div className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${offering.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

        {/* Icon Container */}
        <div className="relative mb-4">
          <div
            ref={iconRef}
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${offering.color} text-white shadow-md transition-all duration-300`}
          >
            {offering.icon}
          </div>
        </div>

        {/* Title - Smaller Size */}
        <h3 className="relative mb-2 text-base sm:text-lg font-semibold text-slate-800 leading-snug">
          {offering.title}
        </h3>

        {/* Description - Smaller Size */}
        <p className="relative mb-4 text-xs sm:text-sm leading-6 text-slate-500 flex-grow">
          {offering.description}
        </p>

        {/* CTA Button */}
        <div className="relative mt-auto">
          <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 transition-all duration-300 group/btn hover:text-cyan-600">
            <span>Learn More</span>
            <FaArrowRight className="text-[10px] transition-all duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Offerings = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Header animations
    const headerCtx = gsap.context(() => {
      gsap.fromTo('.section-badge',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.section-header',
            start: "top 85%",
          },
        }
      );

      gsap.fromTo('.section-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.section-header',
            start: "top 85%",
          },
        }
      );

      gsap.fromTo('.section-description',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.section-header',
            start: "top 85%",
          },
        }
      );
    }, headerRef);

    return () => {
      headerCtx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <style>{`
        @keyframes subtle-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10px, -10px) scale(1.02); }
          50% { transform: translate(-5px, 5px) scale(0.98); }
          75% { transform: translate(-10px, -5px) scale(1.01); }
        }
        .animate-subtle-shift {
          animation: subtle-shift 15s ease-in-out infinite;
        }
        .animate-subtle-shift-delayed {
          animation: subtle-shift 18s ease-in-out infinite;
          animation-delay: 5s;
        }
      `}</style>

      {/* Simple Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-100/40 rounded-full blur-3xl animate-subtle-shift"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-cyan-100/40 rounded-full blur-3xl animate-subtle-shift-delayed"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="section-header mx-auto mb-10 sm:mb-12 md:mb-14 max-w-2xl text-center">
          <div className="section-badge inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm">
         
            What We Offer
          </div>

          <h2 className="section-title mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Empowering Founders with
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              the Right Ecosystem
            </span>
          </h2>

          <p className="section-description mt-3 text-sm sm:text-base leading-7 text-slate-500 max-w-xl mx-auto">
            From workspaces and incubation to mentorship, training, and funding
            support — designed to help ideas grow into impactful ventures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {offeringsData.map((offering, index) => (
            <OfferingsCard key={index} offering={offering} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        
      </div>
    </section>
  );
};

export default Offerings;