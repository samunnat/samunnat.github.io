import React, { Component } from 'react';
import Intro from './Components/Intro'
import About from './Components/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        
        <About />
      </div>
    );
  }
}

export default App;
