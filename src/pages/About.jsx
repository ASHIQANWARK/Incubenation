import React from "react";
import {
  FaTrophy,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaChevronRight,
  FaQuoteLeft
} from "react-icons/fa";
import Services from "./Services";
import VisionMission from "./VisionMission";
import Team from "../components/Team";
import ceo from "../assets/images/INDU MAAM.jpg";
import award1 from "../assets/images/art17.jpg";
import award2 from "../assets/images/art15.jpg";
import award3 from "../assets/images/art14.jpg";

const awards = [
  {
    image: award1,
    title: "Insight Kerala 2025",
    description: "Recognized for outstanding leadership in the industry.",
  },
  {
    image: award2,
    title: "Insight Kerala 2025",
    description: "Awarded for excellence in business strategy and growth.",
  },
  {
    image: award3,
    title: "Insight Kerala 2025",
    description: "Honored for pioneering innovation in technology.",
  },
];

import Slider from "react-slick";

const AwardCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
     
        
        <Slider {...sliderSettings} className="award-slider">
          {awards.map((award, index) => (
            <div key={index} className="px-4 focus:outline-none">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div className="overflow-hidden h-64 flex items-center justify-center bg-gray-50">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 p-4"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h4>
                  <p className="text-gray-600 flex-grow">{award.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 bg-[#341969]">
                    <span className="text-sm text-[#ffffff] font-medium">2025 Achievement</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const About = () => (
  <div className="relative py-28 bg-gradient-to-br from-[#0f1e3a] to-[#1a2b4d] text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
    </div>
    <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
      <h2 className="text-5xl font-light tracking-wide mb-8">About Us</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mb-10"></div>
      <p className="mt-6 text-xl leading-relaxed max-w-4xl mx-auto font-light">
        IncubeNation Bengaluru is a startup incubator created by Ique Ventures
        to support and develop early-stage startups. Our mission is to empower
        entrepreneurs by providing them with the tools, resources, and
        mentorship needed to build scalable businesses.
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-100 py-4 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-6">
      <nav className="text-gray-600 text-sm">
        <ul className="flex space-x-2 items-center">
          <li>
            <a href="/" className="hover:text-[#1a2b4d] transition-colors">
              Home
            </a>
          </li>
          <span className="text-gray-400">
            <FaChevronRight className="text-xs" />
          </span>
          <li>
            <a href="/" className="hover:text-[#1a2b4d] transition-colors">
              Program
            </a>
          </li>
          <span className="text-gray-400">
            <FaChevronRight className="text-xs" />
          </span>
          <li className="font-medium text-[#1a2b4d]">
            IncubeNation
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const CoreValues = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-4xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaLightbulb className="text-4xl mb-6 text-[#341969]" />,
            title: "Innovation",
            desc: "Bold ideas & breakthrough solutions.",
          },
          {
            icon: <FaHandshake className="text-4xl mb-6 text-[#341969]" />,
            title: "Collaboration",
            desc: "Strong networks & partnerships.",
          },
          {
            icon: <FaShieldAlt className="text-4xl mb-6 text-[#341969]" />,
            title: "Integrity",
            desc: "Transparency & ethical business.",
          },
          {
            icon: <FaUsers className="text-4xl mb-6 text-[#341969]" />,
            title: "Empowerment",
            desc: "Resources & support for startups.",
          },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-[#d4af37]/20 relative overflow-hidden"
          >
            {/* Top border with gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#341969]"></div>
            
            <div className="flex justify-center">{value.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
            <p className="text-gray-600">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CEOSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/3 p-10 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <FaQuoteLeft className="text-3xl text-[#d4af37] mr-3" />
            <h3 className="text-3xl font-semibold text-gray-900">Message from Our CEO</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every startup begins with a simple idea, but with the right
            support, it can grow into something extraordinary. At IncubeNation
            Bengaluru, we're more than just a co-working space; we're a
            nurturing ground for startups to hatch, grow, and eventually take
            flight.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our goal is to provide the resources, mentorship, and
            network you need to turn your vision into reality. We believe that
            every entrepreneur has the potential to succeed, and we're here to
            make that success possible.
          </p>
          <div>
            <p className="font-semibold text-gray-900">Indumathi Murthy</p>
            <p className="text-gray-600">CEO, IncubeNation</p>
          </div>
        </div>
        <div className="md:w-1/3 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1e3a] opacity-10 z-10"></div>
          <img
            src={ceo}
            alt="CEO Indumathi Murthy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f]"></div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <About />
      <Breadcrumbs />
      <VisionMission />
      <CEOSection />
      <Services />
      <AwardCarousel />
      <CoreValues />
      <Team />
    </div>
  );
};

export default AboutPage;