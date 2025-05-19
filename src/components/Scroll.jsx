import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-6 md:right-10 bg-[#1d375f] text-white p-3 rounded-full shadow-md transition-transform duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } hover:bg-white hover:text-[#1d375f] hover:shadow-lg`}
      style={{ zIndex: 999 }}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollUp;
