import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Filling from "./components/Filling";
import Sent from "./components/Sent";
import Validating from "./components/Validating";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Landing />
        </Route>
        <Route exact path="/:card">
            <Validating />
        </Route>
        <Route exact path="/:card/filling" >
            <Filling />
        </Route>
        <Route exact path="/:card/sent">
            <Sent />
        </Route>
    </Switch>
);

export default Routes;