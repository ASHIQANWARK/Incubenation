import React from "react";
import Slider from "react-slick";
import {  Award } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Placeholder images for new members - replace with actual images when available
import shubhamImage from "../assets/images/shubham.jpeg";
import avinashImage from "../assets/images/Avinash.jpg";
import vikrantImage from "../assets/images/Vikrant.jpeg";
import kirtiImage from "../assets/images/kirti.jpeg"

const advisors = [
  { 
    name: "Kirti Yadav", 
    title: "Mentor, Wellness & Entrepreneurship", 
    image: kirtiImage,
    description: "A wellness entrepreneur and certified holistic nutritionist, Kirti combines 10+ years of corporate experience at IBM, Target, and AIG with her entrepreneurial journey of building KuKClean—an IIM Bangalore and IIMR incubated startup that also received an RKVY Raftaar grant. Known for her authenticity and community-driven approach, she brings real-world lessons of resilience, creativity, and innovation to mentor aspiring founders at Incubenation.",
  },
  { 
    name: "Shubham Mehta", 
    title: "Mentor, Fundraising & Strategy", 
    image: shubhamImage,
    description: "With 12+ years in the startup ecosystem, Shubham specializes in fundraising, growth, and strategy. Currently Fundraising & Strategy Lead at EMotorad, he has also worked with LoveLocal and Edelweiss, and actively mentors early-stage founders.",
  },
  { 
    name: "Avinash G Nair", 
    title: "Mentor, Marketing & Business Growth", 
    image: avinashImage,
    description: "CEO of eFoinix Solutions and Fractional CMO at ABM Innovations, brings 9+ years of expertise in marketing strategy, GTM planning, and business growth. He has mentored numerous startups across India and the Middle East, helping founders craft scalable models and achieve sustainable success.",
  },
  { 
    name: "Vikrant Khanolkar", 
    title: "Business Development & E-commerce Expert", 
    image: vikrantImage,
    description: "With 17+ years of experience across global brands like Whirlpool, Black+Decker, RhinoShield, and PopSockets, Vikrant is a seasoned leader in business development, P&L management, and e-commerce growth. Currently leading GoLoud as Eksa Gaming’s India partner, he brings deep expertise in scaling businesses, building distribution networks, and driving impactful growth.",
  },
  
];
  
  
  


const Advisors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { 
        breakpoint: 1280, 
        settings: { slidesToShow: 3 } 
      },
      { 
        breakpoint: 1024, 
        settings: { slidesToShow: 2 } 
      },
      { 
        breakpoint: 640, 
        settings: { slidesToShow: 1 } 
      }
    ]
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-3">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-blue-600">Advisors</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Industry experts guiding our vision with their extensive experience and knowledge
          </p>
        </div>

        {/* Advisors Carousel */}
        <Slider {...settings}>
          {advisors.map((advisor, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
                {/* Profile Image Container with Square Aspect Ratio */}
                <div className="relative w-full pt-[100%] overflow-hidden bg-gray-200">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
                      e.target.className = "absolute inset-0 w-full h-full object-cover object-center";
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 shadow-sm">
                    <Award size={12} className="text-white" />
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Advisor Details */}
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{advisor.name}</h3>
                    <p className="text-xs text-blue-600 font-medium mt-1">{advisor.title}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-4 relative flex-grow">
                    <p className="text-gray-600 text-xs italic text-center leading-tight">
                      "{advisor.description}"
                    </p>
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

export default Advisors;