import React from "react";

import SummaryTable from "./layouts/SummaryTable";
import SummaryContent from "./layouts/SummaryContent";
// summaryIcon, summaryName, result
const App = () => {
  return (
    <>
      <div className="flex items-center justify-center sm:h-screen sm:w-screen ">
        <div className="flex flex-col sm:flex-row sm:rounded-3xl sm:shadow-lg">
          <SummaryContent />
          <SummaryTable />
        </div>
      </div>
    </>
  );
};

export default App;
