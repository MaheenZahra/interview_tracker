import React from 'react';
import { Switch,Route } from 'react-router-dom';
import JobRoleDetailScreen from './Components/Candidate/JobRoleDetailScreen';
import WelcomeScreen from './Components/Job/WelcomeScreen'; 
import CandidateDetailsScreen from './Components/Candidate/CandidateDetailsScreen';
const Routes=(props)=> {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={WelcomeScreen}/>
        <Route path='/JobRoleDetailScreen' component={JobRoleDetailScreen}/>
        <Route path='/CandidateDetailsScreen' component={CandidateDetailsScreen}/>
      </Switch>
    </div>
  );
}

export default Routes;