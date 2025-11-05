import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the equity-based model?',
      answer: 'Instead of paying for services upfront, startups offer equity in their company. This aligns our success with yours, as our compensation is tied to your growth and success.',
    },
    {
      question: 'How does the Incubenation program work?',
      answer: 'Startups apply to the program, and if selected, receive comprehensive support in technology, marketing, investment, HR, and business strategy. We work closely with you to address your specific needs.',
    },
    {
      question: 'What types of startups are eligible?',
      answer: 'We support early-stage startups across various industries. Eligibility is based on the potential of your business idea, your team, and how well our services align with your needs.',
    },
    {
      question: 'How long is the Incubenation program?',
      answer: 'The duration varies depending on your startup\'s needs and milestones. Typically, it ranges from several months to a lifelong journey.',
    },
    {
      question: 'How do I apply for the Incubenation program?',
      answer: 'Visit the link below and complete the application form with details about your startup, your team, and the areas where you need support. Our team will review your application and get in touch with you.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      {/* Section Heading - Reduced spacing */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto leading-relaxed">
          Find answers to common questions about our equity-based model and Incubenation program
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-lg sm:rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            initial={false}
            animate={{ backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)' }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-base sm:text-lg md:text-xl font-semibold text-white pr-2 flex-1 leading-tight">
                {faq.question}
              </span>
              <motion.span
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30"
                animate={{ 
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-white/80 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default FAQ;