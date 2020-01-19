import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Intro from './components/Intro';
import TabPages from './components/TabPages';
import './App.css';

class App extends Component {
  render() {
    const backg = 'prism';
    return (
      <Segment 
        id="App"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${backg}/${backg}.png`}}
      >
        <Grid id="main">
          <Grid.Column>
            <Grid.Row>
              <Intro />
            </Grid.Row>

            <Grid.Row>
              <TabPages />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
