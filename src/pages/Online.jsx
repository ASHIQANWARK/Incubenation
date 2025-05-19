import React from "react";
import { FaUserTie, FaBook, FaLaptop, FaUsers, FaGlobe } from "react-icons/fa";
import img20 from "../assets/images/img20.jpg"; // Make sure this path is correct

const HeaderSection = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-[#061428] to-[#0b1c3a] text-white">
    <h1 className="text-5xl font-extrabold mb-4">IncubeNation-Online</h1>
  </div>
);

const Breadcrumbs = () => (
  <div className="bg-gray-200 py-3">
    <div className="container mx-auto px-6">
      <nav className="text-[#061428] text-sm">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="hover:text-[#061428]">
              Home
            </a>
          </li>
          <span>/</span>
          <li>
            <a href="/program" className="hover:text-[#061428]">
              Program
            </a>
          </li>
          <span>/</span>
          <li className="text-[#061428] font-semibold">IncubeNation Online</li>
        </ul>
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
    <img
      src={img20}
      alt="IncubeNation Online"
      className="w-full md:w-1/2 rounded-lg shadow-lg"
    />
    <div className="md:w-1/2">
      <h1 className="text-4xl font-extrabold text-[#061428] mb-4">
        Welcome to IncubeNation Online
      </h1>
      <p className="text-lg text-gray-700">
        IncubeNation-Online is a premier virtual incubator designed to support
        innovation and entrepreneurship from anywhere in the world. We provide
        cutting-edge online resources, expert-led mentorship, and a thriving
        digital startup community. Our platform connects entrepreneurs with
        industry experts, investors, and successful founders for personalized
        guidance and strategic growth.
        <br />
        With structured virtual accelerator programs, access to exclusive
        learning materials, and remote legal and financial advisory services, we
        empower startups to scale effectively in the digital age. Recognized for
        our impact, IncubeNation-Online has helped numerous businesses launch,
        secure funding, and expand globally.
        <br />
        Join IncubeNation-Online and take your startup to the next
        level—wherever you are! 🚀
      </p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
    <div className="text-4xl text-[#061428] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#061428]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#061428]">
      Why Choose IncubeNation-Online?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<FaUserTie />}
        title="Virtual One-on-One Mentorship"
        description="Personalized guidance from experienced mentors."
      />
      <FeatureCard
        icon={<FaBook />}
        title="Access to Resource Libraries"
        description="Exclusive learning materials for startup growth."
      />
      <FeatureCard
        icon={<FaLaptop />}
        title="Online Workshops & Webinars"
        description="Learn from industry experts through live sessions."
      />
      <FeatureCard
        icon={<FaUsers />}
        title="Virtual Networking Events"
        description="Connect with like-minded entrepreneurs and investors."
      />
      <FeatureCard
        icon={<FaGlobe />}
        title="Remote Incubation Experience"
        description="Access all incubation benefits from anywhere."
      />
    </div>
  </div>
);

const Online = () => {
  return (
    <div>
      <HeaderSection />
      <Breadcrumbs />
      <MainContent />
      <FeaturesSection />
    </div>
  );
};

export default Online;
