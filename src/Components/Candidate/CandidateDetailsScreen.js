import React from 'react';
import CandidateChart from './CandidateChart';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CandidateDetailsScreen=(props)=> {
 
  return (
    <>
    <NavLink to='/'><p className='returnLink'>Return to Home</p></NavLink>
    <h1 className="head">_Candidate Details_</h1>    
     <Table responsive >
       <tr>
       <th>#</th>
       <th>Name</th>
       <th>Interview Date</th>
       <th>Development Score</th>
       <th>Softskills Score</th>
       <th>Styling Score</th>
       <th>Misc Score</th>
       <th>Current Salaray</th>
       <th>Expected Salaray</th>
       </tr>
       <tr>
       <td>1</td>
       <td>{props.location.state.name}</td>
       <td>{props.location.state.date}</td>
       <td>{props.location.state.devScore}</td>
       <td>{props.location.state.softScore}</td>
       <td>{props.location.state.styleScore}</td>
       <td>{props.location.state.miscScore}</td>
       <td>{props.location.state.currSalary}</td>
       <td>{props.location.state.expSalary}</td> 
  </tr>
     </Table> 
     <CandidateChart name={props.location.state.name} devScore={props.location.state.devScore} softScore={props.location.state.softScore} styleScore={props.location.state.styleScore} miscScore={props.location.state.miscScore}/>
    </>
  );
}

export default CandidateDetailsScreen;