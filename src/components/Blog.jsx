import React from "react";
import { PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import startupImg from "../assets/images/startup.jpg";
import successImg from "../assets/images/sucess.jpeg";
import fundingImg from "../assets/images/funding.jpeg";
import teamworkImg from "../assets/images/teamwoek.jpg";
import marketingImg from "../assets/images/marketing.jpeg";

const blogs = [
  { title: "How to Grow Your Startup in 2024", date: "2024-01-10", author: "Shafi Shoukath", image: startupImg },
  { title: "Top 5 Business Strategies for Success", date: "2024-02-05", author: "Shafi Shoukath", image: successImg },
  { title: "Funding Tips for Entrepreneurs", date: "2024-03-15", author: "Shafi Shoukath", image: fundingImg },
  { title: "How to Build a Strong Startup Team", date: "2024-04-02", author: "Shafi Shoukath", image: teamworkImg },
  { title: "Startup Marketing Strategies", date: "2024-05-10", author: "Shafi Shoukath", image: marketingImg },
];


const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#061428] to-[#0b1c3a] pt-24 pb-16 px-4 md:px-8 lg:px-16 ">
      <h2 className="text-4xl font-bold text-center text-white mb-12 font-serif">
        Our Blog <PenTool className="inline-block w-8 h-8 ml-2" />
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedBlogs.map((blog, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1d375f]">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.date} | {blog.author}</p>
              <Link to="/blog" className="mt-4 inline-block text-[#1d375f] font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;