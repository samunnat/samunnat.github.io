import React, { Component } from 'react';
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
          title: 'JavaScript Chesss',
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
        My Website
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
