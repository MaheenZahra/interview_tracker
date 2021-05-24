import React, { useEffect, useState } from "react";
import "../../Styles/candidates.css";
import Candidates from "./Candidates";
import interviews from "../../data/interviews.json";
import { withRouter } from "react-router";

const JobRoleDetailScreen = (props) => {
  console.log(props);
  const jobId = props.match.params.id;
  console.log("jobId", jobId);
  const [candidates, setCandidates] = useState();
  const [jobDetails, setJobDetails] = useState({
    role: ""
    
  });
  console.log("interviews-1", interviews);

  useEffect(async () => {
    const interviewsData = interviews;
    const jobId = parseInt(props.match.params.id, 0);
    const job = interviewsData.filter((x) => x.id === jobId)[0];
    console.log("job", job);

    setCandidates(job.candidates);
    setJobDetails({
      role: job.role,
      coreSkills: job.coreSkills,
      skillLevel: job.skillLevel,
      ownership: job.ownership,
      progress: job.progress,
    });

  }, []);

  console.log("Rendered JobRoleDetailScreen");
  const { role } =jobDetails;
  return (
    <>
      <h1 className="roleName">_ {role}_</h1>
      <h3 className="heading">Candidates for this Role</h3>
      <div className="candidate">
        {candidates &&
          candidates.length > 0 &&
          candidates.map((c) => {
            return (
              <Candidates
                candidateName={c.name}
                interviewDate={c.interviewDate}
                devScore={c.scores.development}
                softScore={c.scores.softSkills}
                styleScore={c.scores.styling}
                miscScore={c.scores.misc}
                currSalary={c.salary.current}
                expSalary={c.salary.expected}
              />
            );
          })}
        
      </div>
    </>
  );
};

export default withRouter(JobRoleDetailScreen);
