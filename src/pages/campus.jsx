import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaUsersCog,
  FaUniversity,
} from "react-icons/fa";
import img20 from "../assets/images/img20.jpg"; // Ensure this path is correct

const HeaderSection = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
    <h1 className="text-5xl font-extrabold mb-4">IncubeNation-Campus</h1>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-200 py-3">
    <div className="container mx-auto px-6">
      <nav className="text-gray-600 text-sm">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="hover:text-[#03346e]">
              Home
            </a>
          </li>
          <span>/</span>
          <li>
            <a href="/program" className="hover:text-[#03346e]">
              Program
            </a>
          </li>
          <span>/</span>
          <li className="font-semibold bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text">
            IncubeNation-Campus
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
    <img
      src={img20}
      alt="IncubeNation-Campus"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
    />
    <div className="md:w-1/2">
      <h1 className="text-4xl font-extrabold bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text mb-4">
        Welcome to IncubeNation-Campus
      </h1>
      <p className="text-lg text-gray-700">
        IncubeNation-Campus is a dynamic on-campus incubator dedicated to
        fostering innovation and entrepreneurship within academic institutions.
        We provide hands-on training, expert mentorship, and real-world project
        opportunities to help students and aspiring entrepreneurs turn their
        ideas into successful ventures.
        <br />
        <br />
        Our programs include structured accelerator courses, industry
        collaborations, and tailored support services, including legal and
        financial advisory, to ensure startups have the tools they need to
        thrive. With access to cutting-edge resources and a network of
        successful founders, IncubeNation-Campus creates an environment where
        innovation flourishes.
        <br />
        <br />
        Join IncubeNation-Campus and transform your entrepreneurial vision into
        reality—right from your campus! 🚀
      </p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text">
      Why Choose IncubeNation-Campus?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<FaGraduationCap />}
        title="Entrepreneurial Training"
        description="Equipping founders with essential startup knowledge."
      />
      <FeatureCard
        icon={<FaChalkboardTeacher />}
        title="Virtual Mentorship"
        description="Get expert guidance from successful entrepreneurs."
      />
      <FeatureCard
        icon={<FaProjectDiagram />}
        title="Project-Based Learning"
        description="Work on real-world startup projects and case studies."
      />
      <FeatureCard
        icon={<FaUsersCog />}
        title="Industry Networking"
        description="Connect with business leaders and investors."
      />
      <FeatureCard
        icon={<FaUniversity />}
        title="Tailored Online Programs"
        description="Structured courses designed for aspiring entrepreneurs."
      />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
    <div className="text-4xl bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IncubeNationCampus = () => (
  <div>
    <HeaderSection />
    <Breadcrumbs />
    <MainContent />
    <FeaturesSection />
  </div>
);

export default IncubeNationCampus;
