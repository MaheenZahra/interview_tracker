import React from 'react';
import { Button } from 'react-bootstrap';


const Candidates=(props)=> {
  const {candidateName,score}=props
  return (
 
    <div class="container">
      <div class="row">
        <div class="col-med-6">
          <p className='candidateName'>Candidates Name - {candidateName}</p>
          <p className='candidateScore'>Candidates Score Obtained - {score}/20</p>
          <Button class="btn">View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Candidates;