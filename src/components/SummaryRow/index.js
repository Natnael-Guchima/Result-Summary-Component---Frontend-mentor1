import React from "react";

const SummaryRow = ({ summaryIcon, summaryName, result, color }) => {
  const colors = {
    yellow: { text: "text-yellow-500", bgColor: "bg-yellow-100" },
    pink: { text: "text-pink-500", bgColor: "bg-pink-100" },
    green: { text: "text-green-500", bgColor: "bg-green-100" },
    blue: { text: "text-blue-500", bgColor: "bg-blue-100" },
  };
  return (
    <div
      className={`flex h-14 flex-row items-center gap-x-4 ${colors[color].bgColor} rounded-lg p-4 font-semibold`}
    >
      <span>
        <img alt="icon" src={summaryIcon}></img>
      </span>
      <span className={`flex-auto capitalize ${colors[color].text}`}>
        {summaryName}
      </span>
      <p>
        <span>{result}</span>
        <span className="text-gray-400  before:mx-2 before:content-['/']">
          100
        </span>
      </p>
    </div>
  );
};

export default SummaryRow;
