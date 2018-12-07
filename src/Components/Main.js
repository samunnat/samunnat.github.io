import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './home';
import AboutMe from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;