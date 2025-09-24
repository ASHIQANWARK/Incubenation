import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mazin Arbaz",
    text: "IncubeNation' comprehensive support has been a cornerstone of our success. Their commitment to fostering collaboration with key stakeholders has significantly accelerated our growth and market presence.",
  },
  {
    name: "Hashir",
    text: "IncubeNation has been instrumental in our startup's growth journey. Their tailored programs and insightful mentorship connected us with the right investors, propelling us from concept to market success.",
  },
  {
    name: "Keerthi",
    text: "The collaborative environment fostered by IncubeNation is unparalleled. Their ability to bridge the gap between startups and key stakeholders has opened doors we never thought possible.",
  },
  {
    name: "Abhirami",
    text: "Partnering with IncubeNation has been a rewarding experience. Their curated network of innovative startups provides a steady stream of high-potential investment opportunities.",
  },
  {
    name: "Jino Joseph",
    text: "The mentorship and funding support from IncubeNation have helped us scale beyond expectations. We highly recommend them to any startup looking for a solid foundation.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Testimonial = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-16 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Voices of Partnership
        </motion.h2>
         <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 py-2">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f8f9fc] to-[#e9ecf5] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1a2b4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg italic text-center leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#1a2b4d]">
                  {testimonial.name}
                </h3>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-t-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Testimonial;