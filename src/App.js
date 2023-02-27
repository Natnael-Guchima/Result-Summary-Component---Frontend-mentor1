import React from "react";

import SummaryRow from "./components/SummaryRow";
import IconReaction from "./Assets/images/icon-reaction.svg";
// summaryIcon, summaryName, result
const App = () => {
  return (
    <>
      <SummaryRow
        summaryIcon={IconReaction}
        summaryName="Reaction"
        result={"80"}
        bgColor={"bg-pink-100"}
      />
    </>
  );
};

export default App;
