import React, { useEffect, useState } from "react";
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
      icon: <FaUsers className="text-lg" />,
      color: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
    {
      value: 25,
      text: "Startup support programmes",
      icon: <FaRocket className="text-lg" />,
      color: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      value: 12,
      text: "Projects to connect investors",
      icon: <FaHandHoldingUsd className="text-lg" />,
      color: "text-amber-600",
      iconBg: "bg-amber-50",
    },
    {
      value: 20,
      text: "Projects with government infrastructure",
      icon: <FaUniversity className="text-lg" />,
      color: "text-indigo-600",
      iconBg: "bg-indigo-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-cyan-200 bg-white/80 text-cyan-700 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md mb-4">
            Our Ecosystem
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
            100+ Projects &
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Companies Supported
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7 max-w-2xl mx-auto">
            We’ve helped startups and founders grow through strategic support,
            ecosystem partnerships, mentorship, and investor connections.
          </p>
        </motion.div>

        {/* Logos */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16">
          <div className="flex overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex animate-scroll gap-5 sm:gap-6 lg:gap-8 pr-5 sm:pr-6 lg:pr-8">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[110px] sm:min-w-[130px] lg:min-w-[150px]"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-9 lg:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[500px]">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={mainImage}
                  alt="Ecosystem"
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
                  >
                    <div className={stat.color}>{stat.icon}</div>
                  </div>

                  <div className="text-2xl sm:text-3xl font-semibold text-slate-900">
                    <CountUp
                      start={startCounters ? 0 : stat.value}
                      end={startCounters ? stat.value : 0}
                      duration={2.2}
                      delay={index * 0.15}
                      enableScrollSpy={false}
                    >
                      {({ countUpRef }) => <span ref={countUpRef}>{stat.value}</span>}
                    </CountUp>
                    +
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-7 text-slate-600">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 2rem));
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
};

export default EcosystemSection;