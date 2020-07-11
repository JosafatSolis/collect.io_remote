import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import FillingWrapper from "./components/Filling/FillingWrapper";
import Validating from "./components/Validating";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Landing resend={false} />
        </Route>
        <Route exact path="/:card">
            <Validating />
        </Route>
        <Route exact path="/:card/filling" >
            <FillingWrapper />
        </Route>
        <Route exact path="/:card/sent">
            <Landing resend={true} />
        </Route>
    </Switch>
);

export default Routes;