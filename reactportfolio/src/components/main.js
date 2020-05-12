import React from "react";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";

// router for all my route

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>

)

export default Main;