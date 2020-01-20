import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import IntroHeader from './components/IntroHeader';
import TabPages from './components/TabPages';
import './App.css';

const App = () => {
  return (
    <Segment 
      id="App"
      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/prism/prism.png)`}}
    >
      <Grid id="main">
        <Grid.Column>
          <Grid.Row>
            <IntroHeader />
          </Grid.Row>

          <Grid.Row>
            <TabPages />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default App;
