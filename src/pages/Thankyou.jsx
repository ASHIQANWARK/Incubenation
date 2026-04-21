import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  FaCheckCircle, FaArrowLeft, FaEnvelope, FaWhatsapp, FaLinkedin, 
  FaTwitter, FaInstagram, FaDownload, FaShare, FaCopy, FaCheck,
  FaBuilding, FaUsers, FaDollarSign, FaClipboardList, FaUser,
  FaCalendarAlt, FaClock, FaRegSmile
} from "react-icons/fa";
import confetti from 'canvas-confetti';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  
  const { formData, error } = location.state || { 
    formData: null,
    error: false
  };

  // Default values if no data is passed
  const founderName = formData?.name || "Founder";
  const startupName = formData?.startupName || "your startup";
  const submissionTime = new Date().toLocaleString();

  // Trigger confetti animation on page load
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  // Handle copy to clipboard
  const handleCopyReference = () => {
    const referenceNumber = `INC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    navigator.clipboard.writeText(referenceNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle download summary
  const handleDownloadSummary = () => {
    const summary = `
Incube Nation - Startup Application Summary
============================================

Application Details:
-------------------
Submission Date: ${submissionTime}
Reference ID: INC-${Date.now()}-${Math.floor(Math.random() * 1000)}

Founder Information:
-------------------
Name: ${formData?.name || 'N/A'}
Email: ${formData?.email || 'N/A'}
Phone: ${formData?.phone || 'N/A'}

Startup Information:
-------------------
Startup Name: ${formData?.startupName || 'N/A'}
Industry: ${formData?.industry || 'N/A'}
Current Stage: ${formData?.stage || 'N/A'}
Team Size: ${formData?.teamSize || 'N/A'}

Requirements:
------------
Primary Need: ${formData?.primaryNeed || 'N/A'}
How Heard About Us: ${formData?.hearAboutUs || 'N/A'}

Message:
--------
${formData?.message || 'N/A'}

Next Steps:
-----------
1. Our team will review your application within 24 hours
2. We'll schedule a discovery call
3. You'll receive a customized roadmap

Contact Us:
-----------
Email: contactus@incubenation.com
WhatsApp: +91-9035064018

Thank you for choosing Incube Nation!
    `;
    
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IncubeNation_Application_${formData?.name || 'Startup'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle share
  const handleShare = async () => {
    const shareData = {
      title: 'Incube Nation Application Submitted',
      text: `I've submitted my startup application to Incube Nation! ${formData?.startupName || 'My startup'} is on its way to success! 🚀`,
      url: window.location.origin
    };
    
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Share cancelled or not supported');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-500/20 p-4 rounded-full animate-bounce">
                <FaCheckCircle className="text-green-500 text-6xl" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Thank You, {founderName}! 🚀
            </h1>
            
            <p className="text-xl text-gray-300">
              Your application has been successfully submitted
            </p>
            
            <div className="mt-4 inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <FaClock className="text-[#ffab00] text-sm" />
              <span className="text-gray-300 text-sm">Submitted: {submissionTime}</span>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={handleDownloadSummary}
              className="bg-white/10 hover:bg-[#ffab00] text-white hover:text-black px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm"
            >
              <FaDownload size={14} />
              <span>Download Summary</span>
            </button>
            
            <button
              onClick={handleShare}
              className="bg-white/10 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm"
            >
              <FaShare size={14} />
              <span>Share</span>
            </button>
            
            <button
              onClick={handleCopyReference}
              className="bg-white/10 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm"
            >
              {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Reference ID'}</span>
            </button>
          </div>

          {/* Application Summary Card */}
          <div className="bg-gradient-to-r from-[#ffab00]/10 to-transparent border border-[#ffab00]/30 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Application Summary</h3>
              <button
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="text-[#ffab00] hover:text-[#e69900] text-sm"
              >
                {showFullDetails ? 'Show Less' : 'View Full Details'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaUser className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Founder:</span>
                  <span className="text-white font-semibold">{formData?.name || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaEnvelope className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Email:</span>
                  <span className="text-white font-semibold">{formData?.email || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaWhatsapp className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Phone:</span>
                  <span className="text-white font-semibold">{formData?.phone || 'N/A'}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaBuilding className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Startup:</span>
                  <span className="text-white font-semibold">{formData?.startupName || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaClipboardList className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Industry:</span>
                  <span className="text-white font-semibold">{formData?.industry || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaUsers className="text-[#ffab00] text-sm" />
                  <span className="text-sm">Team Size:</span>
                  <span className="text-white font-semibold">{formData?.teamSize || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            {/* Full Details Section */}
            {showFullDetails && (
              <div className="mt-6 pt-6 border-t border-white/10 animate-fadeIn">
                <h4 className="text-lg font-semibold text-white mb-3">Complete Application Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-400">Current Stage:</span>
                      <p className="text-white mt-1">{formData?.stage || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Primary Need:</span>
                      <p className="text-white mt-1">{formData?.primaryNeed || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">How Heard About Us:</span>
                      <p className="text-white mt-1">{formData?.hearAboutUs || 'N/A'}</p>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-400">Message:</span>
                      <p className="text-white mt-1 bg-white/5 p-3 rounded-lg">{formData?.message || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Steps Timeline */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Journey Timeline</h3>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ffab00] to-transparent h-full"></div>
              
              <div className="space-y-8">
                {[
                  { step: 1, title: "Application Review", description: "Our team will review your application within 24 hours", icon: FaClipboardList, color: "from-blue-500 to-blue-600" },
                  { step: 2, title: "Discovery Call", description: "Schedule a 30-min call to understand your vision and goals", icon: FaCalendarAlt, color: "from-purple-500 to-purple-600" },
                  { step: 3, title: "Custom Roadmap", description: "Receive a personalized roadmap for your startup journey", icon: FaRegSmile, color: "from-green-500 to-green-600" }
                ].map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300 mt-1">{item.description}</p>
                    </div>
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-4 shadow-lg`}>
                        <item.icon className="text-white text-2xl" />
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffab00] text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <FaEnvelope className="text-[#ffab00] text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Email Support</h4>
              <p className="text-gray-300 text-sm mb-3">Get response within 4-6 hours</p>
              <a 
                href="mailto:contactus@incubenation.com"
                className="text-[#ffab00] hover:text-[#e69900] text-sm"
              >
                contactus@incubenation.com
              </a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <FaWhatsapp className="text-green-500 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Support</h4>
              <p className="text-gray-300 text-sm mb-3">Instant response during business hours</p>
              <a 
                href="https://wa.me/919035064018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 text-sm"
              >
                +91-9035064018
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-4">Join our startup community for daily insights</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/incubenation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://x.com/Incubenation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/incubenation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center space-x-2 bg-[#ffab00] hover:bg-[#e69900] text-black px-6 py-3 rounded-xl transition-all duration-300 font-semibold"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300"
            >
              <FaWhatsapp />
              <span>Contact Support</span>
            </button>
          </div>

          {/* Reference Note */}
          <p className="text-center text-gray-500 text-xs mt-6">
            Reference ID will be sent to your registered email address
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ThankYou;