import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
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
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Testimonial = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm">
              <MessageSquare className="text-cyan-600 w-5 h-5" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Founder Experiences
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-7">
            Real stories from founders and partners who have grown with IncubeNation.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3 py-2">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Quote */}
                <p className="text-slate-600 text-sm sm:text-base leading-7 mb-6">
                  “{testimonial.text}”
                </p>

                {/* Footer */}
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>

                  {/* Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;