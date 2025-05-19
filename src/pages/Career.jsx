import React from "react";
import { Rocket } from "lucide-react";

const Career = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#061428] to-[#0b1c3a] min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold text-[#03346e] mb-4">
        Join Us Today <Rocket className="inline-block w-8 h-8 ml-2" />
      </h2>
      <p className="text-lg text-gray-600">Coming Soon</p>
    </div>
  );
};

export default Career;
