import React from "react";

import IconMemory from "../../Assets/images/icon-reaction.svg";

const SummaryRow = ({ summaryIcon, summaryName, result, bgColor }) => {
  return (
    <div
      className={`flex h-14 flex-row items-center gap-x-4 ${bgColor} p-4 font-semibold`}
    >
      <span>
        <img src={summaryIcon}></img>
      </span>
      <span className="flex-auto capitalize text-pink-500 ">{summaryName}</span>
      <p>
        <span>{result}</span>
        <span className="text-gray-400 before:mx-2 before:content-['/']">
          100
        </span>
      </p>
    </div>
  );
};

export default SummaryRow;
