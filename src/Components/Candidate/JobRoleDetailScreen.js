import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Candidates from './Candidates';
import '../../Styles/candidates.css';


const JobRoleDetailScreen=(props)=> {

  const [role,setRole]=useState();
  const [candidateName,setCandidateName]=useState();
  const[score,setScore]=useState([]);

  useEffect(()=>{
    async function getData(){ 
      const res = await axios.get('/DB/interviews.json');
      console.log(res.data.jobRoles[0].role);
      setRole(res.data.jobRoles[0].role);
      setCandidateName(res.data.jobRoles[0].candidates[0].name);
      
      const obtainedScore=res.data.jobRoles[0].candidates[0].scores.development +
            res.data.jobRoles[0].candidates[0].scores.styling +
            res.data.jobRoles[0].candidates[0].scores.softSkills +
            res.data.jobRoles[0].candidates[0].scores.misc;
            setScore((obtainedScore))
    }

    getData();
  })

  return (
    <>
     <h1 className='roleName'>_ {role}_</h1> 
     <h3 class="heading">Candidates for this Role</h3>
     <div class="candidate">
      <Candidates candidateName={candidateName} score={score}/>
       </div>
    </>
  );
}

export default JobRoleDetailScreen;