import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin,  FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919035064018?text=${whatsappMessage}`, "_blank");
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61572794128072", color: "text-blue-600" },
    { icon: FaInstagram, href: "https://www.instagram.com/incubenation", color: "text-pink-600" },
    { icon: FaX, href: "https://x.com/Incubenation", color: "text-black" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/incubenation", color: "text-blue-800" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your entrepreneurial journey? Contact us today and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Side */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 ">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-lg mt-1">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Our Address</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Door No: 84, 3rd Cross Rd, KHB Block,<br />
                      Koramangala, Bengaluru, Karnataka 560095
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-lg">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone Number</h4>
                    <a href="tel:+919035064018" className="text-gray-300 hover:text-[#ffab00] transition-colors">
                      +91-9035064018
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-lg">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Address</h4>
                    <a href="mailto:contactus@incubenation.com" className="text-gray-300 hover:text-[#ffab00] transition-colors">
                      contactus@incubenation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#ffab00] p-3 rounded-lg">
                    <FaGlobe className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Website</h4>
                    <a href="https://www.incubenation.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ffab00] transition-colors">
                      www.incubenation.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`${social.color} bg-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-4 text-center">Our Location</h4>
              <iframe
                title="IncubeNation Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.002589143043!2d77.61409347585729!3d12.932496587385235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151ec56f90a9%3A0xb9777b5aacf2cf0d!2sINCUBENATION%20By%20IQUE!5e0!3m2!1sen!2sin!4v1721206563000!5m2!1sen!2sin"
                width="100%"
                height="200"
                className="rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 ">Send us a Message</h3>
            <form onSubmit={sendWhatsAppMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <input
                type="text"
                name="subject"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              
              <textarea
                name="message"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ffab00] focus:border-transparent transition-all"
                rows="5"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ffab00] text-white text-lg font-semibold hover:bg-[#e69900] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <FaWhatsapp size={24} />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;