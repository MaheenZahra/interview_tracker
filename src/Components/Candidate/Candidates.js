import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Candidates=(props)=> {
  const {candidateName,score,date, devScore, softScore, styleScore,miscScore,currSalary,expSalary}=props;
  return (
    <>  

    <div className="container">
      <div className="row">
        <div className="col-med-6">
          <p className='candidateName'>Candidates Name - {candidateName}</p>
          <p className='candidateScore'>Candidates Score Obtained - {score}/20</p>
         <NavLink to={ {pathname: `/CandidateDetailsScreen`,
                state: {
                 name:candidateName,
                 date:date,
                 devScore:devScore,
                 softScore:softScore,
                 styleScore:styleScore,
                 miscScore:miscScore,
                 currSalary:currSalary,
                 expSalary:expSalary
                  
                },}}><Button className='btn'>View Details</Button></NavLink>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default Candidates;