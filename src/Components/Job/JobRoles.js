import React from 'react';
import { Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import JobProcessProgress from './JobProcessProgress';

const JobRoles=(props)=> {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.cardImage} alt="Job Role Image" className="card-img top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
            {props.cardTitle}
          </h4>
          <JobProcessProgress barClass={props.progressClass} barPercentage={props.jobProgress}/>
          <NavLink to='/JobRoleDetailScreen '><Button class="btn">View Details</Button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default JobRoles;