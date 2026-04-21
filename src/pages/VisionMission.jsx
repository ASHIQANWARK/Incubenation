import React from "react";
import Image2 from "../assets/images/incubenation.png";
import Image3 from "../assets/images/img21.png";
import img3 from "../assets/images/img22.png";

const VisionMission = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
            Who We Are
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Building the Future of
            <span className="block text-slate-300">Entrepreneurship</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-7">
            Empowering visionaries, fueling innovation, and shaping the next
            generation of founders through a strong ecosystem.
          </p>
        </div>

        {/* ABOUT CARD (FULL WIDTH FEATURE) */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <img
              src={Image2}
              alt="About IncubeNation"
              className="w-full h-[320px] sm:h-[380px] object-contain p-6"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Transforming Vision into Value
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-7 mb-6">
              IncubeNation Bengaluru is a startup incubator created by Ique
              Ventures to support and develop early-stage startups. Our mission
              is to empower entrepreneurs with the right tools, mentorship, and
              ecosystem to build scalable businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Comprehensive incubation programs",
                "Expert mentorship network",
                "Resource optimization tools",
                "Market entry strategies",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-sm text-slate-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISION + MISSION GRID (NEW LAYOUT) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {/* VISION CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-7">
            <img
              src={Image3}
              alt="Vision"
              className="w-full h-44 object-contain mb-5"
            />

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Our Vision
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-7 mb-5">
              To create a thriving startup ecosystem where innovation,
              entrepreneurship, and collaboration flourish across India and beyond.
            </p>

            <div className="space-y-2">
              {[
                "Innovation-driven ecosystem",
                "Global entrepreneurial hub",
                "Sustainable growth models",
                "Collaborative community building",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-sm text-slate-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-7">
            <img
              src={img3}
              alt="Mission"
              className="w-full h-44 object-contain mb-5"
            />

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Our Mission
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-7 mb-5">
              To empower startups with tools, mentorship, and resources needed to
              transform ideas into impactful and scalable businesses.
            </p>

            <div className="space-y-2">
              {[
                "Tailored mentorship programs",
                "Investment readiness preparation",
                "Global network access",
                "Sustainable growth strategies",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-sm text-slate-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;