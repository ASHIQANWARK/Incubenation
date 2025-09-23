import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaWhatsapp, FaTimes, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

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
      {/* ScrollUp Button - Design 1: Modern Gradient */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            style={{ zIndex: 999 }}
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Rest of the component remains the same */}
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
              href="https://wa.me/919035514812"
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