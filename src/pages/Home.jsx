import React from "react";
import Hero from "./Hero";
import Advisors from "../components/Advisors";
import ChatBot from "../components/ChatBot";
import FAQ from "../pages/FAQ";
import EcosystemSection from "./Ecosystem";
import Offerings from "./Offerings";
import Testimonial from "./Testimonials";



const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Hero />
      <Offerings />
      <Advisors />
      <EcosystemSection />
      
      <FAQ />
      <Testimonial />
     
       
      <ChatBot />
      
    </div>
  );
};

export default Home;
