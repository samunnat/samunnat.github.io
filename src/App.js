import React, { Component } from 'react';
import Intro from './Components/Intro'
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title: 'JavaScript Chess',
          category: 'Web Design'
        },
        {
          title: 'TwitHits',
          category: 'App Development'
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Intro id="intro"/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
