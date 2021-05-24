import { Button } from "react-bootstrap";
import JobProcessProgress from "./JobProcessProgress";
import { NavLink } from "react-router-dom";
import React from "react";

const JobRoles = (props) => {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.cardImage} alt="Job Role" className="card-img top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.cardTitle}</h4>
          <JobProcessProgress />
          <NavLink to={`/jobs/${props.id}`}>
            <Button className="btn">View Details</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
  //barPercentage={props.jobProgress}barClass={props.progressClass}
};

export default JobRoles;
