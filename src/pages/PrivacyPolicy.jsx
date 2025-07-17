import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to IncubeNation’s Privacy Policy
        </motion.h1>
        <p className="mt-4 text-gray-600 text-center">
          At IncubeNation by Ique Ventures ("IncubeNation", "we", "us", "our"), we respect your privacy and are dedicated to protecting your personal data.
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
              <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
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
          <p className="text-gray-700">For questions or concerns regarding this Privacy Policy or your data, please contact:</p>
          <p className="mt-2 font-semibold text-gray-800">IncubeNation by Ique Ventures</p>
          <p className="text-gray-600">
            Email:{" "}
            <a href="mailto:contact@incubenation.com" className="text-blue-600 underline">
              contact@incubenation.com
            </a>
          </p>
          <p className="text-gray-600">
            Website:{" "}
            <a href="https://www.incubenation.com" className="text-blue-600 underline">
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
    title: "Compliance",
    content: (
      <div className="text-gray-600">
        This Privacy Policy complies with:
        <ul className="list-disc list-inside mt-2">
          <li>The Information Technology Act, 2000</li>
          <li>The Digital Personal Data Protection Act, 2023</li>
          <li>Other relevant data protection laws in India</li>
        </ul>
        <p className="mt-2">
          We may revise this Policy periodically in response to legal updates or operational improvements.
        </p>
      </div>
    ),
  },
  {
    title: "Scope of This Policy",
    content: (
      <p className="text-gray-600">
        This Policy applies to personal data we collect that can directly or indirectly identify you. It excludes aggregated, anonymized, or publicly available data.
      </p>
    ),
  },
  {
    title: "What Personal Data We Collect",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li><strong>Identity Data:</strong> Full name, email address, contact number, date of birth</li>
        <li><strong>Professional Data:</strong> Company name, designation, startup profile</li>
        <li><strong>Financial Data:</strong> Bank account details, payment records (where applicable)</li>
        <li><strong>KYC Details:</strong> Aadhaar (with consent), PAN, business registration documents</li>
        <li><strong>Usage Data:</strong> Interactions with our website or platforms</li>
        <li><strong>Communication Data:</strong> Emails, feedback, inquiries, or support tickets</li>
      </ul>
    ),
  },
  {
    title: "How We Collect Your Data",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Forms you fill out during onboarding or application processes</li>
        <li>Direct interactions via email, meetings, or online chats</li>
        <li>Third-party platforms such as social networks or professional networks</li>
        <li>Our partner platforms and service providers</li>
      </ul>
    ),
  },
  {
    title: "Purpose of Data Use",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Verify your identity and conduct KYC processes</li>
        <li>Onboard startups and match them with relevant incubation services</li>
        <li>Share information with our partners (banks, legal advisors, mentors, etc.)</li>
        <li>Communicate important updates and relevant opportunities</li>
        <li>Analyze startup needs to improve our offerings</li>
        <li>Conduct market research and impact assessments</li>
        <li>Send newsletters and promotional content with your consent</li>
        <li>Comply with legal and regulatory obligations</li>
        <li>Address support inquiries and handle grievances</li>
        <li>Support recruitment, event participation, or program evaluation</li>
      </ul>
    ),
  },
  {
    title: "Our Role in Data Handling",
    content: (
      <p className="text-gray-600">
        IncubeNation usually acts as a Data Fiduciary under Indian data protection law. In cases where data is processed on behalf of third parties, their privacy policies may also apply.
      </p>
    ),
  },
  {
    title: "Data Sharing and Protection",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>We do not sell your data.</li>
        <li>
          We share it only with:
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Internal teams for processing</li>
            <li>Verified service providers and mentors</li>
            <li>Legal or regulatory bodies (if required)</li>
          </ul>
        </li>
        <li>We implement reasonable technical and organizational safeguards to protect your data.</li>
      </ul>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent at any time (where processing is based on consent)</li>
        <li>Object to specific data uses</li>
        <li>Lodge a complaint with the appropriate authority</li>
      </ul>
    ),
  },
  {
    title: "Stay Updated",
    content: (
      <p className="text-gray-600">
        We encourage you to review this policy from time to time. Updates will be posted on our official channels, and using our services after any revision means you accept the revised policy.
      </p>
    ),
  },
];

export default PrivacyPolicy;
