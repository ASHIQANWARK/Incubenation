import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaQuoteLeft,
  FaArrowRight,
  FaTrophy,
  FaGem,
  FaStar,
  FaAward,
} from "react-icons/fa";
import Services from "./Services";
import VisionMission from "./VisionMission";
import Team from "../components/Team";
import ceo from "../assets/images/INDU MAAM.jpg";
import award1 from "../assets/images/art17.jpg";
import award2 from "../assets/images/art15.jpg";
import award3 from "../assets/images/art14.jpg";
import backgroundImage from "../assets/images/bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    image: award1,
    title: "Insight Kerala 2025",
    description: "Recognized for outstanding leadership in the industry.",
    year: "2025",
    category: "Leadership Excellence",
  },
  {
    image: award2,
    title: "Insight Kerala 2025",
    description: "Awarded for excellence in business strategy and growth.",
    year: "2025",
    category: "Business Strategy",
  },
  {
    image: award3,
    title: "Insight Kerala 2025",
    description: "Honored for pioneering innovation in technology.",
    year: "2025",
    category: "Innovation Award",
  },
];

const AwardCarousel = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-4 opacity-50 hover:opacity-100 transition-opacity" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Heading - Enhanced */}
        <div ref={headingRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm mb-4">
              <FaAward className="text-cyan-400 text-sm" />
              <p className="text-cyan-300 text-sm font-medium tracking-wide uppercase">
                Recognition
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Awards that reflect
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-2">
                our journey and impact
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Every milestone represents the trust, innovation, and ecosystem impact
            we continue to build with founders, mentors, and changemakers.
          </p>
        </div>

        <Slider {...sliderSettings} className="award-slider">
          {awards.map((award, index) => (
            <div key={index} className="px-3 py-2">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-violet-500/10 transition-all duration-700" />
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-medium backdrop-blur-sm">
                    {award.year}
                  </span>
                </div>

                <div className="h-64 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center overflow-hidden p-6">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaStar className="text-amber-400 text-sm" />
                    <span className="text-xs text-slate-400 uppercase tracking-wide">{award.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {award.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .award-slider .slick-dots li button:before {
          color: #22d3ee;
          font-size: 8px;
        }
        .award-slider .slick-dots li.slick-active button:before {
          color: #06b6d4;
        }
      `}</style>
    </section>
  );
};

const CoreValues = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(0.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation",
      desc: "Bold ideas and breakthrough solutions that challenge convention.",
      gradient: "from-amber-500 to-orange-500",
      color: "amber",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Collaboration",
      desc: "Building meaningful partnerships that create stronger ecosystems.",
      gradient: "from-cyan-500 to-blue-500",
      color: "cyan",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Integrity",
      desc: "Leading with trust, transparency, and ethical responsibility.",
      gradient: "from-emerald-500 to-teal-500",
      color: "emerald",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Empowerment",
      desc: "Equipping founders with the support they need to move forward.",
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-sm mb-4">
              <FaGem className="text-cyan-400 text-sm" />
              <p className="text-cyan-300 text-sm font-medium tracking-wide uppercase">
                Core Foundation
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Values that shape
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mt-2">
                every founder journey
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Our values are more than principles — they define how we nurture
            founders, build trust, and create long-term impact.
          </p>
        </div>

        {/* Bento-style layout - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Animated gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              {/* Icon */}
              <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>

              <h4 className="relative text-xl font-bold text-white mb-3">
                {value.title}
              </h4>
              <p className="relative text-sm text-slate-300 leading-relaxed">
                {value.desc}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CEOSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Image */}
          <div ref={imageRef} className="lg:col-span-5 perspective-1000">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                <img
                  src={ceo}
                  alt="CEO Indumathi Murthy"
                  className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={contentRef} className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 transform rotate-45 translate-x-12 -translate-y-12" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                <p className="text-sm font-medium tracking-wide uppercase text-cyan-300">
                  Leadership Note
                </p>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                A message from{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  our CEO
                </span>
              </h3>

              <div className="space-y-4">
                <p className="text-base lg:text-lg text-slate-200 leading-relaxed">
                  Every startup begins with a simple idea, but with the right
                  support, it can grow into something extraordinary. At IncubeNation
                  Bengaluru, we're more than just a co-working space; we're a
                  nurturing ground for startups to hatch, grow, and eventually take
                  flight.
                </p>

                <p className="text-base lg:text-lg text-slate-200 leading-relaxed">
                  Our goal is to provide the resources, mentorship, and network you
                  need to turn your vision into reality. We believe that every
                  entrepreneur has the potential to succeed, and we're here to make
                  that success possible.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-bold text-white text-lg">
                  Indumathi Murthy
                </p>
                <p className="text-cyan-300 text-base">
                  CEO, IncubeNation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WebsiteBackground = ({ children }) => {
  const bgRef = useRef(null);
  
  useEffect(() => {
    gsap.to(bgRef.current, {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-purple-900/95" />
      <div ref={bgRef} className="relative z-10 opacity-0">
        {children}
      </div>
    </div>
  );
};

const AboutPage = () => {
  useEffect(() => {
    // Smooth scroll restoration
    window.scrollTo(0, 0);
  }, []);

  return (
    <WebsiteBackground>
      <div className="overflow-hidden">
        {/* Animated section wrapper */}
        <div className="relative">
          <VisionMission />
          <CEOSection />
          <Services />
          <AwardCarousel />
          <CoreValues />
        
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e1b4b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </WebsiteBackground>
  );
};

export default AboutPage;