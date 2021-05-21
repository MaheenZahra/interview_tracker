import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Candidates from './Candidates';
import '../../Styles/candidates.css';



const JobRoleDetailScreen=(props)=> {
  const [role,setRole]=useState();
  const [candidateName,setCandidateName]=useState();
  const [interviewDate,setInterviewDate]=useState();
  const [devScore,setDevScore]=useState();
  const [softScore,setSoftScore]=useState();
  const [stylingScore,setStylingScore]=useState();
  const [miscscore,setMiscScore]=useState();
  const [score,setScore]=useState();
  const [currentSalary, setCurrentSalary]=useState();
  const [expectedSalary, setExpectedSalary]=useState();

  useEffect(()=>{
    async function getData(){ 
      const res = await axios.get('/DB/interviews.json');
  //console.log(res.data.jobRoles[0].role);
      setRole(res.data.jobRoles[0].role);
      setCandidateName(res.data.jobRoles[0].candidates[0].name);
      setInterviewDate(res.data.jobRoles[0].candidates[0].interviewDate);
      setDevScore(res.data.jobRoles[0].candidates[0].scores.development);
      setSoftScore(res.data.jobRoles[0].candidates[0].scores.softSkills);
      setStylingScore( res.data.jobRoles[0].candidates[0].scores.styling);
      setMiscScore(res.data.jobRoles[0].candidates[0].scores.misc);
      const obtainedScore=devScore+softScore+stylingScore+miscscore;
      setScore((obtainedScore));
      setCurrentSalary(res.data.jobRoles[0].candidates[0].salary.current);
      setExpectedSalary(res.data.jobRoles[0].candidates[0].salary.expected);
    }
    getData();
  })
  

  return (
    <>
     <h1 className='roleName'>_ {role}_</h1> 
     <h3 class="heading">Candidates for this Role</h3>
     <div class="candidate">
     <Candidates candidateName={candidateName} score={score} date={interviewDate} devScore={devScore} softScore={softScore} styleScore={stylingScore} miscScore={miscscore} currSalary={currentSalary} expSalary={expectedSalary}/>  
     </div>
    </>
  );
}

export default JobRoleDetailScreen;
