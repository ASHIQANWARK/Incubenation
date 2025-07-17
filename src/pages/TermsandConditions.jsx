import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl border shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-700 text-center mb-8">
          These Terms and Conditions (“Terms”) govern your access and use of
          IncubeNation’s website, services, and programs. By using our platform,
          you agree to comply with these Terms.
        </p>

        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center pt-6">
          <p className="text-gray-700">
            If you have any questions or concerns regarding these Terms,
            please contact:
          </p>
          <p className="mt-2 font-semibold text-gray-900">
            IncubeNation by Ique Ventures
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:contact@incubenation.com"
              className="text-green-700 underline"
            >
              ceo@incubenation.com
            </a>
          </p>
          <p className="text-gray-700">
            Website:{" "}
            <a
              href="https://www.incubenation.com"
              className="text-green-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.incubenation.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p className="text-gray-700">
        By accessing or using our website or services, you confirm that you have
        read, understood, and agree to be bound by these Terms and all
        applicable laws and regulations.
      </p>
    ),
  },
  {
    title: "2. Eligibility",
    content: (
      <p className="text-gray-700">
        You must be at least 18 years of age or the age of majority in your
        jurisdiction to use our services. By using IncubeNation, you represent
        that you meet this requirement.
      </p>
    ),
  },
  {
    title: "3. Use of Services",
    content: (
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
        <li>You agree to use our services only for lawful purposes.</li>
        <li>
          You may not misuse, hack, or attempt to gain unauthorized access to
          our platform or data.
        </li>
        <li>All information submitted must be accurate and not misleading.</li>
      </ul>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <p className="text-gray-700">
        All content, logos, and materials on our website are owned or licensed
        by IncubeNation and are protected by applicable intellectual property
        laws. You may not reproduce, distribute, or use our materials without
        written consent.
      </p>
    ),
  },
  {
    title: "5. Program Participation",
    content: (
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
        <li>
          Acceptance into any program or incubation offering is at the sole
          discretion of IncubeNation.
        </li>
        <li>
          You agree to abide by any specific program agreements and code of
          conduct.
        </li>
        <li>We reserve the right to revoke access if terms are violated.</li>
      </ul>
    ),
  },
  {
    title: "6. Limitation of Liability",
    content: (
      <p className="text-gray-700">
        IncubeNation is not liable for any indirect, incidental, or
        consequential damages resulting from your use of the platform or
        participation in our programs.
      </p>
    ),
  },
  {
    title: "7. Termination",
    content: (
      <p className="text-gray-700">
        We reserve the right to suspend or terminate your access to our
        services at our sole discretion, without prior notice, if we believe
        you are violating these Terms or applicable laws.
      </p>
    ),
  },
  {
    title: "8. Governing Law",
    content: (
      <p className="text-gray-700">
        These Terms shall be governed by the laws of India. Any disputes shall
        be resolved under the exclusive jurisdiction of the courts in
        Bengaluru, Karnataka.
      </p>
    ),
  },
  {
    title: "9. Updates to These Terms",
    content: (
      <p className="text-gray-700">
        We may update these Terms occasionally. Continued use of our services
        after changes means you accept the revised Terms. The most current
        version will always be available on our website.
      </p>
    ),
  },
];

export default TermsAndConditions;
