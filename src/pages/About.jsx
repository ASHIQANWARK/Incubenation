import React from "react";
import {
  FaTrophy,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import Services from "./Services";

import ceo from "../assets/images/INDU MAAM.jpg";
import award1 from "../assets/images/art17.jpg";
import award2 from "../assets/images/art15.jpg";
import award3 from "../assets/images/art14.jpg";

const awards = [
  {
    image: award1,
    title: "Insight kerala-2025",
    description: "Recognized for outstanding leadership in the industry.",
  },
  {
    image: award2,
    title: "Insight kerala-2025",
    description: "Awarded for excellence in business strategy and growth.",
  },
  {
    image: award3,
    title: "Insight kerala-2025",
    description: "Honored for pioneering innovation in technology.",
  },
];

const AwardCarousel = () => {
  return (
    <div className="mt-16 max-w-6xl mx-auto px-6 text-center ">
      <h3 className="text-4xl font-semibold mb-6">
        Awards Earned by Our Company
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={award.image}
              alt={award.title}
              className="rounded-2xl shadow-lg w-48 h-48 object-cover mb-4"
            />
            <h4 className="text-xl font-semibold mt-4">{award.title}</h4>
            <p className="text-lg text-white mt-2">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="py-20 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
    <div className="max-w-6xl mx-auto px-8 text-center">
      <h2 className="text-5xl font-bold uppercase tracking-wide">About Us</h2>
      <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
        IncubeNation Bengaluru is a startup incubator created by Ique Ventures
        to support and develop early-stage startups. Our mission is to empower
        entrepreneurs by providing them with the tools, resources, and
        mentorship needed to build scalable businesses. We offer a comprehensive
        range of services tailored to help startups through every stage of their
        growth journey, from ideation to successful market entry and expansion.
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-200 py-3">
    <div className="container mx-auto px-6">
      <nav className="text-gray-600 text-sm">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="hover:text-[#03346e]">
              Home
            </a>
          </li>
          <span>/</span>
          <li>
            <a href="/" className="hover:text-[#03346e]">
              Program
            </a>
          </li>
          <span>/</span>
          <li className="font-semibold bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text">
            IncubeNation-Campus
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div>
      <About />
      <Breadcrumbs />
      <div className="mt-16 flex justify-center">
        <div className="bg-white text-gray-800 shadow-lg rounded-xl overflow-hidden max-w-5xl flex flex-col md:flex-row items-center">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-semibold text-gray-900">
              Meet Our CEO
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              Every startup begins with a simple idea, but with the right
              support, it can grow into something extraordinary. At IncubeNation
              Bengaluru, we’re more than just a co-working space; we’re a
              nurturing ground for startups to hatch, grow, and eventually take
              flight. Our goal is to provide the resources, mentorship, and
              network you need to turn your vision into reality. We believe that
              every entrepreneur has the potential to succeed, and we’re here to
              make that success possible.
            </p>
            <p>-INDUMATHI MURTHY -ceo, incubenation</p>
          </div>
          <img
            src={ceo}
            alt="CEO Indumathy Moorthy"
            className="w-80 h-80 object-cover rounded-r-xl"
          />
        </div>
      </div>
      <br></br>
      <Services />
      <AwardCarousel />

      

      <div className="mt-16 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Core Values</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {[
            {
              icon: <FaLightbulb className="text-[#061428] text-4xl" />,
              title: "Innovation",
              desc: "Bold ideas & breakthrough solutions.",
            },
            {
              icon: <FaHandshake className="text-[#061428] text-4xl" />,
              title: "Collaboration",
              desc: "Strong networks & partnerships.",
            },
            {
              icon: <FaShieldAlt className="text-[#061428] text-4xl" />,
              title: "Integrity",
              desc: "Transparency & ethical business.",
            },
            {
              icon: <FaUsers className="text-[#061428] text-4xl" />,
              title: "Empowerment",
              desc: "Resources & support for startups.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white text-gray-800 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/4 max-w-[250px]"
            >
              {value.icon}
              <h4 className="text-lg font-semibold mt-3">{value.title}</h4>
              <p className="text-sm mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;