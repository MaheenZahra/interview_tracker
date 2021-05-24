import React, { useContext } from "react";

import { BioData } from "./WelcomeScreen";

const JobProcessProgress = (props) => {
  const { barPercentage, barClass } = useContext(BioData);
  return (
    <div className="progress">
      <div
        className={barClass}
        role="progressbar"
        style={{ width: barPercentage }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default JobProcessProgress;
