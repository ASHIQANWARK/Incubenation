import React from "react";
import Slider from "react-slick";
import { User } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ShefinImage from "../assets/images/shefin.jpg";
import hashImage from "../assets/images/hashim.jpg";
import abhiImage from "../assets/images/abhirami.jpg";
import jinoImage from "../assets/images/jino.jpg";
import abidImage from "../assets/images/abid.jpg";
import shaazImage from "../assets/images/Shaaz.jpg";


const advisors = [
  { name: "Shefin", title: "STUDY IN BANGALORE (CEO)", image: ShefinImage },
  { name: "Hashim", title: "CAREER CAFE (CEO)", image: hashImage },
  { name: "Abhirami", title: "FLYRAD (CEO)", image: abhiImage },
  { name: "Jino Joseph", title: "FRANCHISIFY (CEO)", image: jinoImage },
  { name: "Sainul Abid k.A", title: "WAWU (CEO)", image: abidImage },
  { name: "Shaaz", title: "IqueCap", image: shaazImage },

];

const Advisors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust speed for smoother scrolling
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };
  

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0b081f] mb-12 ">
          Our Advisors
          <User className="inline-block w-8 h-8 ml-2 text-[#05081e]" />
        </h2>

        {/* Advisors Carousel */}
        <Slider {...settings}>
          {advisors.map((advisor, index) => (
            <div key={index} className="px-4">
              <div className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all hover:shadow-2xl hover:scale-105">
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
                  />
                </div>

                {/* Advisor Details */}
                <h3 className="text-lg font-semibold mt-4 text-white">{advisor.name}</h3>
                <p className="text-sm text-gray-300 text-center mt-2">{advisor.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Advisors;
