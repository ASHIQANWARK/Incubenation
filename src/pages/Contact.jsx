import React, { useState } from "react";
import { 
  FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, 
  FaPhone, FaEnvelope, FaGlobe, FaBuilding, 
  FaUsers, FaRocket, FaDollarSign, FaClipboardList, FaCheckCircle,
  FaPaperPlane
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startupName: "",
    industry: "",
    stage: "",
    teamSize: "",
    primaryNeed: "",
    message: "",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxWBj03nlpl-JVb7FPwtHVcDDMTw-uYSWPq9PzJ0yX2eZ25hAllbeSCg8zUHnUmCX-ONA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // Pass the entire form data to thank you page
    navigate('/thank-you', { 
      state: { 
        formData: formData,  // Pass complete form data
        error: false
      } 
    });
    
  } catch (error) {
    console.error('Submission error:', error);
    navigate('/thank-you', { 
      state: { 
        formData: formData,  // Still pass data even if error
        error: true
      } 
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61572794128072", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/incubenation", label: "Instagram" },
    { icon: FaX, href: "https://x.com/Incubenation", label: "X (Twitter)" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/incubenation", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: "Our Address", content: "Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560068", link: null },
    { icon: FaPhone, title: "Phone Number", content: "+91-9035064018", link: "tel:+919035064018" },
    { icon: FaEnvelope, title: "Email Address", content: "contactus@incubenation.com", link: "mailto:contactus@incubenation.com" },
    { icon: FaGlobe, title: "Website", content: "www.incubenation.com", link: "https://www.incubenation.com" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#ffab00]/10 px-4 py-2 rounded-full mb-6">
            <FaRocket className="text-[#ffab00]" />
            <span className="text-[#ffab00] font-semibold">Startup Founder?</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 font-heading tracking-tight">
            Turn Your Vision Into Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join India's fastest-growing startup ecosystem. Get mentorship, funding, and everything you need to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 font-heading">Why Choose Incube Nation?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-xl">
                    <FaUsers className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">100+ Successful Startups</h4>
                    <p className="text-gray-300 text-sm mt-1">Join our thriving community of innovators</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-xl">
                    <FaDollarSign className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">₹50Cr+ Funding Raised</h4>
                    <p className="text-gray-300 text-sm mt-1">Connected with top VCs and angel investors</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-xl">
                    <FaClipboardList className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Expert Mentorship</h4>
                    <p className="text-gray-300 text-sm mt-1">Guidance from industry veterans and successful founders</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">Follow Our Journey</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/20"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 font-heading">Visit Our Campus</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd Block, 
                Koramangala, Bengaluru, Karnataka 560068
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7832!2d77.6246!3d12.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20park!5e0!3m2!1sen!2sin!4v1719724986017!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Incube Nation Office Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <FaRocket className="text-[#ffab00] text-2xl" />
              <h3 className="text-2xl font-bold text-white font-heading">Startup Application Form</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-white text-sm font-semibold mb-2 block">Founder Details</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-semibold mb-2 flex items-center space-x-2">
                  <FaBuilding className="text-[#ffab00]" />
                  <span>Startup Details</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="startupName"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Startup Name (Optional)"
                    value={formData.startupName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="industry"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Industry (e.g., Fintech, EdTech, SaaS)"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="stage"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Current Stage (Idea, MVP, Early Traction, etc.)"
                    value={formData.stage}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="teamSize"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Team Size (e.g., Solo Founder, 2-5 members)"
                    value={formData.teamSize}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-semibold mb-2  flex items-center space-x-2">
                  <FaDollarSign className="text-[#ffab00]" />
                  <span>Requirements</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="primaryNeed"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Primary Requirement (Mentorship, Funding, Workspace, etc.)"
                    value={formData.primaryNeed}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="hearAboutUs"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="How did you hear about us?"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none resize-none"
                  rows="5"
                  placeholder="Tell us about your startup, your vision, and what you hope to achieve with Incube Nation... *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition-all duration-300 transform flex items-center justify-center space-x-3 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-[#ffab00] hover:bg-[#e69900] hover:scale-105'
                }`}
              >
                <FaPaperPlane size={20} />
                <span>
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </span>
              </button>
              
              <p className="text-gray-400 text-xs text-center mt-4">
                We'll get back to you within 24 hours to discuss your startup journey
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;