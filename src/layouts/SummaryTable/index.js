import React from "react";

import SummaryRow from "../../components/SummaryRow";
import IconMemory from "../../Assets/images/icon-memory.svg";
import IconReaction from "../../Assets/images/icon-reaction.svg";
import IconVerbal from "../../Assets/images/icon-verbal.svg";
import IconVisual from "../../Assets/images/icon-visual.svg";
import ContinueButton from "../../components/ContinueButton";
const SummaryTable = ({ summaries }) => {
  const summaryRowsData = [
    {
      icon: IconReaction,
      summaryName: "reaction",
      result: 80,
      color: "pink",
    },
    {
      icon: IconMemory,
      summaryName: "memory",
      result: 92,
      color: "yellow",
    },
    {
      icon: IconVerbal,
      summaryName: "verbal",
      result: 61,
      color: "green",
    },
    {
      icon: IconVisual,
      summaryName: "visual",
      result: 72,
      color: "blue",
    },
  ];

  const summaryRows = summaryRowsData.map(
    ({ icon, summaryName, result, color }) => (
      <SummaryRow
        summaryIcon={icon}
        summaryName={summaryName}
        result={result}
        color={color}
      />
    )
  );

  return (
    <div className="flex flex-col gap-y-2 p-5 sm:basis-1/2 sm:rounded-r-3xl">
      <p className="font-semibold capitalize">summary</p>
      {summaryRows}
      <ContinueButton />
    </div>
  );
};

export default SummaryTable;
