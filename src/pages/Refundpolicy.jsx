import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12">
      <motion.div
        className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-md border"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-emerald-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Refund Policy – IncubeNation
        </motion.h1>
        <p className="mt-4 text-gray-600 text-center">
          Please read our refund policy carefully before using our services.
        </p>

        <div className="mt-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-emerald-700">{section.title}</h2>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700">For questions or refund requests, contact:</p>
          <p className="mt-2 font-semibold text-emerald-700">IncubeNation by Ique Ventures</p>
          <p className="text-gray-600">
            Email:{" "}
            <a href="mailto:contact@incubenation.com" className="text-emerald-700 underline">
              contact@incubenation.com
            </a>
          </p>
          <p className="text-gray-600">
            Website:{" "}
            <a href="https://www.incubenation.com" className="text-emerald-700 underline">
              www.incubenation.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const sections = [
  {
    title: "1. No Refund Policy",
    content: (
      <p className="text-gray-600">
        IncubeNation generally operates a no-refund policy once payment is made for incubation or related services. We encourage all users to fully understand our offerings before committing to any payments.
      </p>
    ),
  },
  {
    title: "2. Exceptions",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>If services are not delivered as described or are discontinued by IncubeNation.</li>
        <li>If duplicate payments are accidentally made.</li>
        <li>If a transaction is proven to be fraudulent or unauthorized.</li>
      </ul>
    ),
  },
  {
    title: "3. Requesting a Refund",
    content: (
      <p className="text-gray-600">
        All refund requests must be submitted in writing within 7 days of the payment date. Requests should include your name, contact information, payment details, and reason for the refund.
      </p>
    ),
  },
  {
    title: "4. Refund Processing",
    content: (
      <p className="text-gray-600">
        Approved refunds will be processed within 7–14 business days and returned via the original payment method unless otherwise agreed upon.
      </p>
    ),
  },
  {
    title: "5. No Refund for Services Rendered",
    content: (
      <p className="text-gray-600">
        If services have already been rendered or resources allocated, no refunds will be issued. This includes mentorship sessions, incubation usage, or marketing support.
      </p>
    ),
  },
  {
    title: "6. Modification of Policy",
    content: (
      <p className="text-gray-600">
        IncubeNation reserves the right to update or modify this refund policy at any time without prior notice. Continued use of our services after updates implies agreement with the revised terms.
      </p>
    ),
  },
];

export default RefundPolicy;
