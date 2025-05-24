import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-6 md:p-12">
      <motion.div
        className="max-w-4xl bg-white p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-emerald-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          IncubeNation Refund & Cancellation Policy
        </motion.h1>
        <p className="mt-4 text-gray-600 text-center">
          This Refund Policy outlines our guidelines for refunds, cancellations, and related procedures for services provided by IncubeNation by Ique Ventures.
        </p>

        {/* Sections */}
        <div className="mt-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-emerald-600">{section.title}</h2>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700">For refund-related queries, please contact:</p>
          <p className="mt-2 font-semibold text-emerald-700">IncubeNation by Ique Ventures</p>
          <p className="text-gray-600">Email: <a href="mailto:info@incubenation.com" className="text-emerald-700 underline">info@incubenation.com</a></p>
          <p className="text-gray-600">Website: <a href="https://www.incubenation.com" className="text-emerald-700 underline">www.incubenation.com</a></p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const sections = [
  {
    title: "Eligibility for Refunds",
    content: (
      <p className="text-gray-600">
        Refunds are only applicable to specific services such as mentorship programs or training sessions with clearly defined fees and timelines. Incubation or consulting services typically do not qualify unless explicitly stated in a service agreement.
      </p>
    ),
  },
  {
    title: "Request Timeframe",
    content: (
      <p className="text-gray-600">
        Refund requests must be made within <strong>7 calendar days</strong> from the date of transaction or service commencement, whichever is earlier. Requests beyond this period will not be entertained.
      </p>
    ),
  },
  {
    title: "Valid Refund Scenarios",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Duplicate payment or incorrect billing</li>
        <li>Service not delivered due to our fault (technical or internal)</li>
        <li>Service cancellation initiated by IncubeNation</li>
        <li>Eligibility mismatch discovered during screening (with documentation)</li>
      </ul>
    ),
  },
  {
    title: "Non-Refundable Services",
    content: (
      <p className="text-gray-600">
        Payments made for personalized services like consultation, strategy sessions, startup support, or administrative services are non-refundable once initiated or consumed partially.
      </p>
    ),
  },
  {
    title: "Refund Process",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Submit a refund request with payment proof and reason via email.</li>
        <li>Our team will validate the request within 5–7 business days.</li>
        <li>If approved, refunds will be processed to the original payment method within 10 working days.</li>
      </ul>
    ),
  },
  {
    title: "Cancellations",
    content: (
      <p className="text-gray-600">
        Services such as events or workshops may be canceled at least <strong>48 hours prior</strong> to commencement. Any cancellation after this window may not be eligible for a refund.
      </p>
    ),
  },
  {
    title: "Dispute Resolution",
    content: (
      <p className="text-gray-600">
        In case of disagreement regarding the refund decision, users may reach out to us for clarification. If unresolved, the issue may be escalated to our legal team or external dispute resolution channels.
      </p>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <p className="text-gray-600">
        IncubeNation reserves the right to update this Refund Policy at any time. Changes will be posted on our website. Continued use of our services constitutes acceptance of the revised terms.
      </p>
    ),
  },
];

export default RefundPolicy;
