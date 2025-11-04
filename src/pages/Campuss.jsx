import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaUsersCog,
  FaUniversity,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaNetworkWired,
  FaChartLine
} from "react-icons/fa";
import img20 from "../assets/images/incube.jpg";

const HeaderSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
        <FaLightbulb className="text-xl" />
        <span className="text-sm font-semibold tracking-wider">CAMPUS INCUBATION PROGRAM</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        IncubeNation
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Campus
        </span>
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Igniting Innovation Within Academic Walls • Empowering Student Entrepreneurs
      </p>
    </div>
  </div>
);

const Breadcrumbs = () => (
  <nav className="items-center py-4">
    <div className="container mx-auto px-6">
      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600 transition-colors duration-300">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          IncubeNation-Campus
        </span>
      </div>
    </div>
  </nav>
);

const MainContent = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img20}
                alt="IncubeNation-Campus Innovation Hub"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3 text-blue-600">
            <FaRocket className="text-xl" />
            <span className="text-sm font-semibold tracking-wider uppercase">WELCOME TO CAMPUS INNOVATION</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Campus Ideas into Reality
            </span>
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              IncubeNation-Campus is a dynamic on-campus incubator dedicated to fostering innovation 
              and entrepreneurship within academic institutions. We provide hands-on training, expert 
              mentorship, and real-world project opportunities to help students transform ideas into 
              successful ventures.
            </p>
            <p>
              Our programs include structured accelerator courses, industry collaborations, and 
              tailored support services, including legal and financial advisory, to ensure startups 
              have the tools they need to thrive.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: FaGraduationCap, text: "Structured Programs" },
              { icon: FaHandshake, text: "Industry Partnerships" },
              { icon: FaNetworkWired, text: "Global Network" },
              { icon: FaChartLine, text: "Growth Tracking" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                <item.icon className="text-blue-600 text-lg" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
          <FaLightbulb className="text-xl" />
          <span className="text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Campus Innovation
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Ecosystem Benefits
          </span>
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaGraduationCap className="text-3xl" />}
          title="Entrepreneurial Training"
          description="Comprehensive startup education with industry-aligned curriculum and practical skill development."
          gradient="from-blue-500 to-cyan-500"
        />
        <FeatureCard
          icon={<FaChalkboardTeacher className="text-3xl" />}
          title="Expert Mentorship"
          description="One-on-one guidance from successful entrepreneurs and industry experts throughout your journey."
          gradient="from-purple-500 to-pink-500"
        />
        <FeatureCard
          icon={<FaProjectDiagram className="text-3xl" />}
          title="Project-Based Learning"
          description="Hands-on experience with real-world startup projects and live case studies."
          gradient="from-green-500 to-teal-500"
        />
        <FeatureCard
          icon={<FaUsersCog className="text-3xl" />}
          title="Industry Networking"
          description="Direct access to investors, business leaders, and potential partners in your industry."
          gradient="from-orange-500 to-red-500"
        />
        <FeatureCard
          icon={<FaUniversity className="text-3xl" />}
          title="Tailored Programs"
          description="Customized incubation tracks designed specifically for student entrepreneurs."
          gradient="from-indigo-500 to-purple-500"
        />
        <FeatureCard
          icon={<FaNetworkWired className="text-3xl" />}
          title="Collaborative Ecosystem"
          description="Join a vibrant community of innovators, creators, and future industry leaders."
          gradient="from-teal-500 to-blue-500"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative z-10">
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Campus = () => (
  <div className="font-sans antialiased">
    <HeaderSection />
    <Breadcrumbs />
    <MainContent />
    <FeaturesSection />
  </div>
);

export default Campus;