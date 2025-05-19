import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false); // For ScrollUp button
  const [isOpen, setIsOpen] = useState(false); // For ChatBot
  const [messages, setMessages] = useState([]); // For ChatBot messages
  const chatRef = useRef(null); // For ChatBot outside click detection

  // ScrollUp functionality
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ChatBot functionality
  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setTimeout(() => {
        setMessages(["Hello! 👋 How can I assist you today?"]);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* ScrollUp Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-25 right-8 z-50 bg-[#1d375f] text-white p-3 rounded-full shadow-md transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } hover:bg-white hover:text-[#1d375f] hover:shadow-lg`}
        style={{ zIndex: 999 }}
      >
        <FaArrowUp className="text-xl" />
      </button>

      {/* ChatBot */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-lg p-4 w-72 fixed bottom-20 right-6 border border-gray-300"
          >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-700">Chat Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5 }}
                  className="bg-green-100 text-gray-700 p-2 rounded-lg text-sm"
                >
                  {msg}
                </motion.div>
              ))}
            </div>
            <a
              href="https://wa.me/9035514814"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}

        {/* WhatsApp Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp size={30} />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;