import React, { useState } from 'react';

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
      answer: 'The duration varies depending on your startup’s needs and milestones. Typically, it ranges from several months to a lifelong journey.',
    },
    {
      question: 'How do I apply for the Incubenation program?',
      answer: 'Visit the link below and complete the application form with details about your startup, your team, and the areas where you need support. Our team will review your application and get in touch with you.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-[#0b081f] mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border border-gray-300 rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 bg-gray-100 font-semibold text-lg flex justify-between items-center hover:bg-gray-200 transition duration-300"
          >
            {faq.question}
            <span className="text-gray-600">{activeIndex === index ? '−' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
