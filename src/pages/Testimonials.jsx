import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rinosh George",
    role: "Volunteer",
    text: "I Que Ventures' comprehensive support has been a cornerstone of our success. Their commitment to fostering collaboration with key stakeholders has significantly accelerated our growth and market presence.",
  },
  {
    name: "Mohammed Afan",
    role: "Volunteer",
    text: "I Que Ventures has been instrumental in our startup's growth journey. Their tailored programs and insightful mentorship connected us with the right investors, propelling us from concept to market success.",
  },
  {
    name: "Sinead Bailey",
    role: "Volunteer",
    text: "The collaborative environment fostered by I Que Ventures is unparalleled. Their ability to bridge the gap between startups and key stakeholders has opened doors we never thought possible.",
  },
  {
    name: "Suresh Iyer",
    role: "Volunteer",
    text: "Partnering with I Que Ventures has been a rewarding experience. Their curated network of innovative startups provides a steady stream of high-potential investment opportunities.",
  },
  {
    name: "Alok Mehta",
    role: "Entrepreneur",
    text: "The mentorship and funding support from I Que Ventures have helped us scale beyond expectations. We highly recommend them to any startup looking for a solid foundation.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Testimonial = () => {
  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-black ">
        What Our Partners Say
      </h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] border border-gray-200 p-6 rounded-lg shadow-md text-center">
              <p className="text-white italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-4">
                <p className="text-yellow-500 text-xl">★★★★★</p>
                <p className="text-sm text-white">{testimonial.role}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Testimonial;
