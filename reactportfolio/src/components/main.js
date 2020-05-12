import React from "react";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";
import Contacts from "./contact"
import Projects from "./project"
import Resume from "./resume"


// router for all my route

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contacts} />
        <Route path="/project" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
    


)

export default Main;