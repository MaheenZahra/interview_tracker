import React from "react";
import CandidateDetailsScreen from "./Components/Candidate/CandidateDetailsScreen";
import JobRoleDetailScreen from "./Components/Candidate/JobRoleDetailScreen";
import WelcomeScreen from "./Components/Job/WelcomeScreen";
import { Route, Switch } from "react-router-dom";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/jobs/:id" component={JobRoleDetailScreen} />
        <Route
          path="/CandidateDetailsScreen"
          component={CandidateDetailsScreen}
        />
      </Switch>
    </div>
  );
};

export default Routes;
