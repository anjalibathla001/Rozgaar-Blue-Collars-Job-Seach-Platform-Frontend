import React from "react";

import UserProfile from "./Components/UserProfile/Sections/UserProfile/UserProfile";

import HomePage from "./Components/HomePage/HomePage";

import PostJob from "./Components/PostOpportunity/Sections/PostJob/PostJob";

import CandidateElectrician from "./Components/ViewCandidates/Sections/Electrician/Electrician";
import CandidatePlumber from "./Components/ViewCandidates/Sections/Plumber/Plumber";
import CandidateMechanic from "./Components/ViewCandidates/Sections/Mechanic/Mechanic";
import CandidateCook from "./Components/ViewCandidates/Sections/Cook/Cook";
import CandidatePeon from "./Components/ViewCandidates/Sections/Peon/Peon";
import CandidateDriver from "./Components/ViewCandidates/Sections/Driver/Driver";
import CandidateHouseKeeping from "./Components/ViewCandidates/Sections/HouseKeeping/HouseKeeping";
import CandidateSiteWorkers from "./Components/ViewCandidates/Sections/SiteWorkers/SiteWorkers";
import CandidateSecurityGuard from "./Components/ViewCandidates/Sections/SecurityGuard/SecurityGuard";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Opportunity } from "./Components/ViewOpportunity/Opportunity";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <HomePage />
              </div>
            )}
          />
          <Route
            exact
            path="/user/register"
            render={(props) => (
              <div>
                <UserProfile />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/electrician"
            render={(props) => (
              <div>
                <Opportunity category="ELECTRICIAN" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/plumber"
            render={(props) => (
              <div>
                {/****************    Passing category as props *******************/}
                <Opportunity category="PLUMBER" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/mechanic"
            render={(props) => (
              <div>
                <Opportunity category="MECHANIC" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/cooking"
            render={(props) => (
              <div>
                <Opportunity category="COOK" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/peon"
            render={(props) => (
              <div>
                <Opportunity category="PEON" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/driver"
            render={(props) => (
              <div>
                <Opportunity category="DRIVER" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/housekeeping"
            render={(props) => (
              <div>
                <Opportunity category="MAID" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/siteworkers"
            render={(props) => (
              <div>
                <Opportunity category="LABOUR" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/securityguard"
            render={(props) => (
              <div>
                <Opportunity category="SECURITY GUARD" />
              </div>
            )}
          />
          <Route
            exact
            path="/jobs/post"
            render={(props) => (
              <div>
                <PostJob />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/electrician"
            render={(props) => (
              <div>
                <CandidateElectrician />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/plumber"
            render={(props) => (
              <div>
                <CandidatePlumber />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/mechanic"
            render={(props) => (
              <div>
                <CandidateMechanic />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/cooking"
            render={(props) => (
              <div>
                <CandidateCook />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/peon"
            render={(props) => (
              <div>
                <CandidatePeon />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/driver"
            render={(props) => (
              <div>
                <CandidateDriver />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/housekeeping"
            render={(props) => (
              <div>
                <CandidateHouseKeeping />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/siteworkers"
            render={(props) => (
              <div>
                <CandidateSiteWorkers />
              </div>
            )}
          />
          <Route
            exact
            path="/candidates/securityguard"
            render={(props) => (
              <div>
                <CandidateSecurityGuard />
              </div>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
