import React from "react";

import RoundedScoreDisplay from "../../components/RoundedScoreDisplay";

const SummaryContent = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 rounded-b-3xl bg-primary-light p-10 sm:basis-1/2 sm:rounded-3xl">
      <p className="capitalize text-gray-300">your result</p>
      <RoundedScoreDisplay />
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-lg font-semibold capitalize text-white">great</p>
        <p className="text-center text-sm text-gray-300">
          You scored higher than 65% of the people who have taken the tests.
        </p>
      </div>
    </div>
  );
};

export default SummaryContent;
