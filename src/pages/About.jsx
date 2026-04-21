import React from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaQuoteLeft,
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

const AwardCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Heading */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
          <div>
            <p className="text-cyan-300 text-sm font-medium tracking-wide uppercase mb-3">
              Recognition
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Awards that reflect
              <span className="block text-slate-200">our journey and impact</span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-7 max-w-xl">
            Every milestone represents the trust, innovation, and ecosystem impact
            we continue to build with founders, mentors, and changemakers.
          </p>
        </div>

        <Slider {...sliderSettings} className="award-slider">
          {awards.map((award, index) => (
            <div key={index} className="px-3 py-2">
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="h-60 sm:h-64 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-7">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-xl text-[#341969]" />,
      title: "Innovation",
      desc: "Bold ideas and breakthrough solutions that challenge convention.",
    },
    {
      icon: <FaHandshake className="text-xl text-[#341969]" />,
      title: "Collaboration",
      desc: "Building meaningful partnerships that create stronger ecosystems.",
    },
    {
      icon: <FaShieldAlt className="text-xl text-[#341969]" />,
      title: "Integrity",
      desc: "Leading with trust, transparency, and ethical responsibility.",
    },
    {
      icon: <FaUsers className="text-xl text-[#341969]" />,
      title: "Empowerment",
      desc: "Equipping founders with the support they need to move forward.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
          <div>
            <p className="text-cyan-300 text-sm font-medium tracking-wide uppercase mb-3">
              Core Foundation
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Values that shape
              <span className="block text-slate-200">every founder journey</span>
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-7 max-w-xl">
            Our values are more than principles — they define how we nurture
            founders, build trust, and create long-term impact.
          </p>
        </div>

        {/* Bento-style layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/15 bg-white/90 backdrop-blur-md p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                {value.icon}
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                {value.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-7">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CEOSection = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-2xl">
            <img
              src={ceo}
              alt="CEO Indumathi Murthy"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/15 bg-white/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                <FaQuoteLeft className="text-amber-600 text-base" />
              </div>
              <p className="text-sm font-medium tracking-wide uppercase text-cyan-700">
                Leadership Note
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight mb-6">
              A message from our CEO
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-8 mb-5">
              Every startup begins with a simple idea, but with the right
              support, it can grow into something extraordinary. At IncubeNation
              Bengaluru, we're more than just a co-working space; we're a
              nurturing ground for startups to hatch, grow, and eventually take
              flight.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-8 mb-8">
              Our goal is to provide the resources, mentorship, and network you
              need to turn your vision into reality. We believe that every
              entrepreneur has the potential to succeed, and we're here to make
              that success possible.
            </p>

            <div>
              <p className="font-semibold text-slate-900 text-base sm:text-lg">
                Indumathi Murthy
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                CEO, IncubeNation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WebsiteBackground = ({ children }) => (
  <div
    className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
   
  >
    <div className="absolute inset-0 bg-slate-950/45 backdrop-[blur(1px)]"></div>
    <div className="relative z-10">{children}</div>
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