import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import FillingWrapper from "./components/Filling/FillingWrapper";
import Validating from "./components/Validating";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Landing />
        </Route>
          <Route exact path="/not_found">
            <Landing not_found={true} />
        </Route>      
        <Route exact path="/:code" component={Validating} />
        <Route exact path="/:card/filling" >
            <FillingWrapper />
        </Route>
        <Route exact path="/:card/sent">
            <Landing />
        </Route>
    </Switch>
);

export default Routes;