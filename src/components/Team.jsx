import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Correct Imports for Local Images
import shafiImage from "../assets/images/IMG_3596.png";
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
      twitter: "https://twitter.com/shafi",
      linkedin: "https://www.linkedin.com/in/shafi-shoukath/",
      facebook: "https://facebook.com/shafi",
    },
  },
  {
    name: "Indumathi Murthy",
    role: "CEO",
    image: indumathiImage,
    social: {
      instagram: "https://www.instagram.com/indumurthy.official?igsh=NXdkZDljZGxiNG03",
      twitter: "https://twitter.com/indumathi",
      linkedin: "https://www.linkedin.com/in/indu-murthy/",
      facebook: "https://facebook.com/indumathi",
    },
  },
  {
    name: "Varsha Sivanarayanan",
    role: "CFO",
    image: varshaImage,
    social: {
      instagram: "https://instagram.com/varsha",
      twitter: "https://twitter.com/varsha",
      linkedin: "https://linkedin.com/in/varsha",
      facebook: "https://facebook.com/varsha",
    },
  },
  {
    name: "Arundas M V",
    role: "CSO",
    image: arunImage,
    social: {
      instagram: "https://instagram.com/arundas",
      twitter: "https://twitter.com/arundas",
      linkedin: "https://linkedin.com/in/arundas",
      facebook: "https://facebook.com/arundas",
    },
  },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0b081f] mb-12">
          Our Team
          <User className="inline-block w-8 h-8 ml-2 text-[#05081e]" />
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#061428] to-[#0b1c3a] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all hover:shadow-xl hover:scale-105 w-full h-[450px]"
            >
              {/* Profile Image */}
              <div className="w-full min-h-[240px] md:h-60 mb-4 flex-grow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href={member.social.instagram} className="text-white hover:text-[#E1306C] transition" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} />
                </a>
                <a href={member.social.twitter} className="text-white hover:text-[#1DA1F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={22} />
                </a>
                <a href={member.social.linkedin} className="text-white hover:text-[#0077B5] transition" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={22} />
                </a>
                <a href={member.social.facebook} className="text-white hover:text-[#1877F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
