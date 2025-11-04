import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const whatsappMessage = `Hello Incube Nation!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919035064018?text=${whatsappMessage}`, "_blank");
    
    setIsSubmitting(false);
    
    // Optional: Reset form after sending
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    { 
      icon: FaFacebookF, 
      href: "https://www.facebook.com/profile.php?id=61572794128072", 
      color: "hover:bg-blue-600",
      label: "Facebook"
    },
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/incubenation", 
      color: "hover:bg-pink-600",
      label: "Instagram"
    },
    { 
      icon: FaX, 
      href: "https://x.com/Incubenation", 
      color: "hover:bg-black",
      label: "X (Twitter)"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/company/incubenation", 
      color: "hover:bg-blue-800",
      label: "LinkedIn"
    }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Address",
      content: " Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd Block, Koramangala, Bengaluru, Karnataka 560068",
      link: null
    },
    {
      icon: FaPhone,
      title: "Phone Number",
      content: "+91-9035064018",
      link: "tel:+919035064018"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      content: "contactus@incubenation.com",
      link: "mailto:contactus@incubenation.com"
    },
    {
      icon: FaGlobe,
      title: "Website",
      content: "www.incubenation.com",
      link: "https://www.incubenation.com"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-heading tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to start your entrepreneurial journey? Contact us today and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 font-heading">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-[#ffab00] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target={item.link.startsWith('http') ? "_blank" : "_self"}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                          className="text-gray-300 hover:text-[#ffab00] transition-colors text-sm mt-1 block"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm mt-1">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
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

            {/* Map Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 font-heading">Find Us Here</h3>
              <p className="text-gray-300 mb-4 text-sm">
                 Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd
              Block, Koramangala, Bengaluru, Karnataka 560068
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7832!2d77.6246!3d12.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20park!5e0!3m2!1sen!2sin!4v1719724986017!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Incube Nation Office Location - Koramangala, Bengaluru"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.google.com/maps?q=84,+3rd+Cross+Rd,+KHB+Block,+Koramangala,+Bengaluru,+Karnataka+560095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffab00] hover:text-[#e69900] transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <FaMapMarkerAlt size={16} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send us a Message</h3>
            <form onSubmit={sendWhatsAppMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-4 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all outline-none resize-none"
                  rows="5"
                  placeholder="Your Message"
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
                <FaWhatsapp size={24} />
                <span>
                  {isSubmitting ? 'Sending...' : 'Send Message via WhatsApp'}
                </span>
              </button>
              
              <p className="text-gray-400 text-sm text-center mt-4">
                We'll connect with you on WhatsApp to discuss your requirements
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;