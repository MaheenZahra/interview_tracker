import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from "react";

const Candidates = (props) => {
  const {
    candidateName,
    interviewDate,
    devScore,
    softScore,
    styleScore,
    miscScore,
    currSalary,
    expSalary,
  } = props;
  const totalScore=devScore+softScore+styleScore+miscScore;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-med-6">
            <p className="candidateName">Candidates Name - {candidateName}</p>
            <p className="candidateScore">
              Total Score Obtained - {totalScore}/20
            </p>
           
            <NavLink
              to={{
                pathname: `/CandidateDetailsScreen`,
                state: {
                  name: candidateName,
                  interviewDate,
                  devScore,
                  softScore,
                  styleScore,
                  miscScore,
                  currSalary,
                  expSalary,
                },
              }}
            >
              <Button className="btn">View Details</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
