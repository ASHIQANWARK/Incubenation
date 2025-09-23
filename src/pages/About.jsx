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

// Import your background image
import backgroundImage from "../assets/images/bg.jpg"; // Replace with your actual image path

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
    <div className="py-20  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold text-white mb-4">Awards & Recognition</h3>
         <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
        <Slider {...sliderSettings} className="award-slider">
          {awards.map((award, index) => (
            <div key={index} className="px-4 focus:outline-none">
              <div className=" backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border border-white/20">
                <div className="overflow-hidden h-64 flex items-center justify-center bg-white">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 p-4"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col bg-white">
                  <h4 className="text-xl font-semibold text-black` mb-2">{award.title}</h4>
                  <p className="text-gray-700 flex-grow">{award.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200/50 bg-gradient-to-r from-[#341969] to-[#4a2a8c]">
                    <span className="text-sm text-white font-medium">2025 Achievement</span>
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



const CoreValues = () => (
  <div 
    className="py-20"
    style={{
      backgroundImage: ` url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-4xl font-semibold text-white mb-4">Our Core Values</h3>
        <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
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
            className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top border with gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#341969] to-[#d4af37]"></div>
            
            <div className="flex justify-center">{value.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
            <p className="text-gray-700">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CEOSection = () => (
  <div 
    className="py-20"
    style={{
      backgroundImage: ` url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/30">
        <div className="md:w-2/3 p-10 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <FaQuoteLeft className="text-3xl text-[#d4af37] mr-3" />
            <h3 className="text-3xl font-semibold text-gray-900">Message from Our CEO</h3>
            
          </div>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Every startup begins with a simple idea, but with the right
            support, it can grow into something extraordinary. At IncubeNation
            Bengaluru, we're more than just a co-working space; we're a
            nurturing ground for startups to hatch, grow, and eventually take
            flight.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
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

// Main container with background image
const WebsiteBackground = ({ children }) => (
  <div 
    className="min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {children}
  </div>
);

const AboutPage = () => {
  return (
    <WebsiteBackground>
      <div className="overflow-hidden">
        
        <VisionMission />
        <CEOSection />
        <Services />
        <AwardCarousel />
        <CoreValues />
        <Team />
      </div>
    </WebsiteBackground>
  );
};

export default AboutPage;