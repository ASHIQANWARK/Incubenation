import React from "react";
import Hero from "./Hero";
import Advisors from "../components/Advisors";
import ChatBot from "../components/ChatBot";
import FAQ from "../pages/FAQ";
import EcosystemSection from "./Ecosystem";
import Offerings from "./Offerings";
import Testimonial from "./Testimonials";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div >
      <Hero />
      <Offerings />
      <Advisors />
      <EcosystemSection />
      <Testimonial />
      <Blog />
      <FAQ />
      <ChatBot />
    </div>
  );
};

export default Home;
