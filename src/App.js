import React, { Component } from 'react';
import Home from './Components/Home'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
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
        <Home />
        <Projects projects={this.state.projects}/>
        <Resume />
      </div>
    );
  }
}

export default App;