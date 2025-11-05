import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
} from "react-icons/fa";

const EcosystemSection = () => {
  const [startCounters, setStartCounters] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCounters(true);
      controls.start("visible");
    }
  }, [inView, controls]);

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
      icon: <FaUsers className="text-lg sm:text-xl lg:text-2xl" />,
      color: "text-emerald-600",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      gradient: "from-emerald-50 to-white",
    },
    {
      value: 25,
      text: "Startup support programmes",
      icon: <FaRocket className="text-lg sm:text-xl lg:text-2xl" />,
      color: "text-blue-600",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      gradient: "from-blue-50 to-white",
    },
    {
      value: 12,
      text: "Projects to create and connect investors",
      icon: <FaHandHoldingUsd className="text-lg sm:text-xl lg:text-2xl" />,
      color: "text-amber-600",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      gradient: "from-amber-50 to-white",
    },
    {
      value: 20,
      text: "Projects with government for infrastructure",
      icon: <FaUniversity className="text-lg sm:text-xl lg:text-2xl" />,
      color: "text-indigo-600",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
      gradient: "from-indigo-50 to-white",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+CiAgICAgIDxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjMiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==')]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-600/30 mb-4 sm:mb-6">
            <span className="text-blue-200 text-xs sm:text-sm font-medium">
              Our Impact
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              100+ Projects
            </span>{" "}
            & Companies Developed
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed sm:leading-loose px-2 sm:px-0">
            We've helped build and grow innovative startups through our
            comprehensive support system and extensive network of partners and
            investors.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          <div className="flex overflow-hidden py-4 sm:py-6 lg:py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex animate-scroll gap-8 sm:gap-12 lg:gap-16 pr-8 sm:pr-12 lg:pr-16">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px]"
                >
                  <div className="p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 hover:border-blue-400/30">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
                <img
                  src={mainImage}
                  alt="Ecosystem"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Counters */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col p-5 lg:p-6 rounded-2xl ${stat.bgColor} backdrop-blur-sm border ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 group bg-gradient-to-br ${stat.gradient}`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mr-4 border ${stat.borderColor}`}
                  >
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <span className="text-3xl font-bold text-slate-800 block">
                    <CountUp
                      start={startCounters ? 0 : stat.value}
                      end={startCounters ? stat.value : 0}
                      duration={2.5}
                      delay={index * 0.2}
                      enableScrollSpy={false}
                    >
                      {({ countUpRef }) => (
                        <span ref={countUpRef}>{stat.value}</span>
                      )}
                    </CountUp>
                    +
                  </span>
                </div>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed font-medium">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scrolling Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 3rem));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default EcosystemSection;
