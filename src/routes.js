import React  from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useUser } from "./context/UserContext";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function Routes() {
  const { userName} = useUser()

 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      {  userName ?  <Route path= {`/${userName}`} component= {Profile} /> : <Redirect  to="/" />}
      </Switch>
    </Router>
  );
}

export default Routes;
