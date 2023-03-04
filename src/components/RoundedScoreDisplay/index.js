import React from "react";

const RoundedScoreDisplay = ({ score }) => {
  return (
    // <div className="h-32 w-32 content-start rounded-full bg-primary-main after:content-['23'] "></div>
    <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-primary-main to-primary-light ">
      <p className=" text-5xl font-semibold text-white">23</p>
      <p className="text-sm text-gray-400">of 100</p>
    </div>
  );
};

export default RoundedScoreDisplay;
