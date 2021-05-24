import "../../Styles/jobs.css";
import React, { createContext } from "react";
import JobRoles from "./JobRoles";
import interviews from "../../data/interviews.json";
import net from "../../assets/net.jpg";
import nodejs from "../../assets/nodejs.png";
import placeholder from "../../assets/placeholder.jpg";
import react from "../../assets/react.jpg";

const BioData = createContext();
const WelcomeScreen = () => {
  return (
    <>
      <h1 className="welcomeText">
        _ Welcome to Interview Tracker Dashboard _
      </h1>
      <div className="container-fluid justify-content-center">
        <div className="row">
          {interviews.map((job) => (
            <BioData.Provider
              value={{
                barPercentage: job.progress,
                barClass:job.progress<50?'progress-bar bg-danger': 'progress-bar bg-success'
              }}
              key={`${job.id}-context`}
            >
              <JobRoles
                key={`${job.id}-roles`}
                id={job.id}
                cardImage={
                  job.image === "react"
                    ? react
                    : job.image === "net"
                    ? net
                    : job.image === "nodejs"
                    ? nodejs
                    : placeholder
                }
                cardTitle={job.role}
              />
            </BioData.Provider>
          ))}
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
export { BioData };
