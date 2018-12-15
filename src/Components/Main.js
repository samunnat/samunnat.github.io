/*
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NavTab } from 'react-router-tabs';

import About from './About';
import Projects from './Projects';

const Main = ({ match }) => {
  return (
    <div>
      <Projects/>
      <NavTab to="/About">About</NavTab>
      <NavTab to="/Projects">Projects</NavTab>
 
      <Switch>
        <Route path={`${match.path}/About`} component={About} />
        <Route path={`${match.path}/Projects`} component={Projects} />
      </Switch>
    </div>
  );
};

export default Main;
*/