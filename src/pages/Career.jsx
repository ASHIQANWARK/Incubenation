import React from "react";
import { Rocket, Users, TrendingUp, Star } from "lucide-react";

const Career = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#061428] via-[#0a1a36] to-[#0f254c] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-900/30 px-6 py-3 rounded-full border border-blue-700/50 mb-8">
          <Rocket className="w-5 h-5 text-blue-400" />
          <span className="text-blue-300 font-medium">We're Hiring</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be part of something extraordinary. We're building the future and we want you to help us shape it.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Great Culture</h3>
            <p className="text-gray-400">Collaborative environment with amazing people</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Growth</h3>
            <p className="text-gray-400">Continuous learning and career development</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Impact</h3>
            <p className="text-gray-400">Work on projects that make a difference</p>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-yellow-200 font-medium">New positions opening soon</p>
          <p className="text-yellow-100/70 text-sm mt-1">Stay tuned for exciting opportunities!</p>
        </div>
      </div>
    </div>
  );
};

export default Career;