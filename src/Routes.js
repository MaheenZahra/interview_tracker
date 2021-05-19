import React from 'react';
import { Switch,Route } from 'react-router-dom';
import JobRoleDetailScreen from './Components/Candidate/JobRoleDetailScreen';
import WelcomeScreen from './Components/Job/WelcomeScreen'; 

const Routes=(props)=> {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={WelcomeScreen}/>
        <Route path='/JobRoleDetailScreen' component={JobRoleDetailScreen}/>
      </Switch>
    </div>
  );
}

export default Routes;