import React, {createContext}from 'react';
import JobRoles from './JobRoles';
import card1 from '../../assets/cardImage1.jpg';
import card2 from '../../assets/cardImage2.jpg';
import card3 from '../../assets/cardImage3.png';
import '../../Styles/jobs.css';

const BioData =createContext()
const WelcomeScreen=()=> {
  const jobsList=[
    {
      id:1,
      cardImg:card1,
      cardTitle:'JavaScript Developer',
      jobProgressClass:'progress-bar bg-success',
      progressPercentage:'50%'
    } , 
    {
      id:2,
      cardImg:card2,
      cardTitle:'.Net Developer',
      jobProgressClass:'progress-bar bg-danger',
      progressPercentage:'20%'
    },
    {
      id:3,
      cardImg:card3,
      cardTitle:'Node.js Developer',
      jobProgressClass:'progress-bar bg-success',
      progressPercentage:'75%'
    }
                ]
  return (
    <>
    <h1 className='welcomeText'>
    _ Welcome to Interview Tracker Dashboard _
    </h1>
    <div className="container-fluid justify-content-center">
    <div className="row">
    
      {jobsList.map(job=>
      <BioData.Provider value={{barPercentage:job.progressPercentage,
                                barClass:job.jobProgressClass}}>
        <JobRoles key={job.id} cardImage={job.cardImg} cardTitle={job.cardTitle}  />
        </BioData.Provider>
      )}
     
    </div>
    </div>
    </>
  );
}

export default WelcomeScreen;
export {BioData};