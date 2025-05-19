import React from "react";
import Hero from "./Hero";
import VisionMission from "./VisionMission";
import Advisors from "../components/Advisors";
import Team from "../components/Team";
import ChatBot from "../components/ChatBot";
import FAQ from "../pages/FAQ";
import EcosystemSection from "./Ecosystem";
import Offerings from "./Offerings";
import LatestBlog from "./LatestBlog";
import Testimonial from "./Testimonials";



const Home = () => {
  return (
    <div>
      <Hero />
      <VisionMission />
      <Advisors />
      <EcosystemSection />
      <Offerings />
      <Testimonial />
      <FAQ />
      <Team />
      <LatestBlog />   
      <ChatBot />
      
    </div>
  );
};

export default Home;
