import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Correct Imports for Local Images
import shafiImage from "../assets/images/shafi.jpg";
import indumathiImage from "../assets/images/INDU MAAM.jpg"; 
import arunImage from "../assets/images/arun.jpg";
import varshaImage from "../assets/images/varsha.jpg";

const team = [
  {
    name: "Shafi Shoukath",
    role: "CHAIRMAN",
    image: shafiImage,
    social: {
      instagram: "https://www.instagram.com/shafishoukath?igsh=MWM0Nnk5NDRtN2g3bA==",
      linkedin: "https://www.linkedin.com/in/shafi-shoukath/",
    },
  },
  {
    name: "Indumathi Murthy",
    role: "CEO",
    image: indumathiImage,
    social: {
      instagram: "https://www.instagram.com/indumurthy.official?igsh=NXdkZDljZGxiNG03",
      linkedin: "https://www.linkedin.com/in/indu-murthy/",
    },
  },
  {
    name: "Varsha Sivanarayanan",
    role: "CFO",
    image: varshaImage,
    social: {
      instagram: "https://www.instagram.com/varsha.sivanarayan?igsh=MW5hcGk0bTRiZnhvNQ==",
      linkedin: "https://www.linkedin.com/in/varsha-s-1775a5251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Arundas M V",
    role: "CSO",
    image: arunImage,
    social: {
      instagram: "https://www.instagram.com/arundas_janardhanan?igsh=MWJiMm5hMHE5dGk3Ng==",
      linkedin: "https://www.linkedin.com/in/arundas-janardhanan-mv-%E2%98%86-25a138176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const Team = () => {
  return (
    <div className="min-h-screen  py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
         
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
           <div className="inline-flex items-center justify-center w-30 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation and excellence forward
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:transform hover:scale-105 h-full">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Social Icons */}
                  <div className="flex space-x-3 mt-4">
                    <a 
                      href={member.social.instagram} 
                      className="relative p-2 bg-slate-700/50 rounded-lg hover:bg-pink-600/20 border border-slate-600/50 hover:border-pink-400/30 transition-all duration-300 group/social"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-white group-hover/social:text-pink-400 transition-colors duration-300" size={18} />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Instagram
                      </span>
                    </a>
                    
                    <a 
                      href={member.social.linkedin} 
                      className="relative p-2 bg-slate-700/50 rounded-lg hover:bg-blue-600/20 border border-slate-600/50 hover:border-blue-400/30 transition-all duration-300 group/social"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-white group-hover/social:text-blue-400 transition-colors duration-300" size={18} />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        LinkedIn
                      </span>
                    </a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;