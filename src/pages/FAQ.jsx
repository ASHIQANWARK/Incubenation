import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the equity-based model?",
      answer:
        "Instead of paying for services upfront, startups offer equity in their company. This aligns our success with yours, as our compensation is tied to your growth and long-term success.",
    },
    {
      question: "How does the Incubenation program work?",
      answer:
        "Startups apply to the program, and if selected, receive support in technology, marketing, investment, HR, and business strategy. We work closely with founders based on their stage and needs.",
    },
    {
      question: "What types of startups are eligible?",
      answer:
        "We support early-stage startups across different industries. Eligibility depends on the strength of your idea, your team, and how well our ecosystem can support your growth.",
    },
    {
      question: "How long is the Incubenation program?",
      answer:
        "The duration varies depending on the startup’s goals, progress, and milestones. It can range from a few months to a long-term ecosystem journey.",
    },
    {
      question: "How do I apply for the Incubenation program?",
      answer:
        "You can apply through our application form by sharing details about your startup, team, and support requirements. Our team will review your submission and get in touch with the next steps.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm">
              <HelpCircle className="text-cyan-600 w-5 h-5" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-7">
            Find answers to common questions about our startup ecosystem, support model, and incubation journey.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              initial={false}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center gap-4"
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 pr-2 flex-1 leading-6">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200"
                >
                  <Plus className="w-4 h-4 text-slate-700" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.28 },
                        opacity: { duration: 0.2, delay: 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.25 },
                        opacity: { duration: 0.18 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-600 leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;