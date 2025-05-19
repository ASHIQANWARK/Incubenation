import React, { useState } from "react";

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
    window.open(`https://wa.me/9035514814?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="py-16  bg-gradient-to-b from-[#061428] to-[#0b1c3a] overflow-x-hidden">
      <div className="container mx-auto px-4 pt-4 max-w-full">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Contact Us</h2>
        <p className="text-center text-xl mb-12 text-gray-300">Have questions or need assistance? We are just a message away.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#1d375f] mr-4">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Visit Us</h5>
                <p className="text-lg">www.incubenation.com</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#1d375f] mr-4">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Call Us</h5>
                <p className="text-lg">+91-9035514814</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-[#1d375f] mr-4">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Email Us</h5>
                <p className="text-lg">ceo@incubenation.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-xl bg-opacity-80 backdrop-blur-md">
              <form onSubmit={sendWhatsAppMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                  rows="4"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1d375f] text-white text-lg font-semibold hover:bg-[#162d4f] transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;