import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaBook,
  FaLaptop,
  FaUsers,
  FaGlobe,
  FaIndustry,
  FaCheckCircle,
} from "react-icons/fa";
import imgLeft from "../assets/images/incube.jpg"; // replace with your left image

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-[#061428] via-[#0A2342] to-[#152C5E] text-white py-20">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>

    {/* Animated background blobs */}
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            IncubeNation Online
          </span>
        </h3>
        <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
          Empowering Founders Anytime, Anywhere with World-Class Digital
          Incubation
        </p>

       
      </div>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 border-b border-gray-200">
    <div className="container mx-auto px-6">
      <nav className="text-[#061428] text-sm">
        <ul className="flex space-x-2 items-center">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <span className="text-gray-400">/</span>
          <li className="text-blue-600 font-semibold">IncubeNation Online</li>
        </ul>
      </nav>
    </div>
  </div>
);

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiMwMDc3ZmYiLz4KPC9zdmc+')]"></div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "-translate-x-10 opacity-0"
            }`}
          >
            <img
              src={imgLeft}
              alt="Left"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Center Text */}
          <div
            className={`text-center px-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              IncubeNation Online – Empowering Founders Anytime, Anywhere
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              IncubeNation Online is our digital-first program designed to make
              high-quality startup mentoring and entrepreneurship education
              accessible to founders across India and beyond.It bridges the gap between structured learning and real-world
              application by combining:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4 text-left inline-block">
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-cyan-500" />
                Curated curriculum crafted for early-stage founders.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-cyan-500" />
                Live mentoring sessions with seasoned entrepreneurs, investors, and domain experts.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-cyan-500" />
                On-demand resources including case studies, playbooks, and toolkits.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-cyan-500" />
                Certification collaborations with leading institutions for added credibility.
              </li>
            </ul>
            <p className="text-lg text-gray-600">
              Whether you’re an aspiring entrepreneur with an idea or a startup
              founder looking to scale, IncubeNation Online provides the
              flexibility of learning remotely while giving you access to the
              same networks, mentorship, and growth frameworks as our in-person
              programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Virtual One-on-One Mentorship",
      description:
        "Personalized guidance from industry experts and successful entrepreneurs tailored to your specific needs.",
    },
    {
      icon: <FaBook />,
      title: "Resource Library Access",
      description:
        "Comprehensive library of templates, playbooks, case studies, and tools for every stage of growth.",
    },
    {
      icon: <FaLaptop />,
      title: "Live Workshops & Webinars",
      description:
        "Interactive sessions with industry leaders covering the latest trends and practical strategies.",
    },
    {
      icon: <FaUsers />,
      title: "Global Networking",
      description:
        "Connect with founders, investors, and experts from around the world through our virtual community.",
    },
    {
      icon: <FaGlobe />,
      title: "Remote-First Experience",
      description:
        "Complete incubation experience accessible from anywhere, designed for the digital age.",
    },
    {
      icon: <FaIndustry />,
      title: "Industry Expert Access",
      description:
        "Direct access to professionals driving innovation across technology, business, and creative sectors.",
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Complete{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Digital Incubation
            </span>{" "}
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            Designed for the modern entrepreneur who demands flexibility without
            compromising on quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl text-blue-600">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProgramShowcase = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-[#061428] to-[#0A2342] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Talk to an Expert?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let us guide you through your startup journey — connect with one of
            our mentors now via WhatsApp.
          </p>

          <a
            href="https://wa.me/9035514809"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block"
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </div>
  );
};

const Online = () => {
  return (
    <div className="overflow-hidden">
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeaturesSection />
      <ProgramShowcase />
    </div>
  );
};

export default Online;
