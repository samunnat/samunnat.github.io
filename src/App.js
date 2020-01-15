import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Intro from './components/Intro';
import TabPages from './components/TabPages';
import './App.css';

var b = 'what-the-hex-dark';

class App extends Component {
  render() {
    return (
      <div 
        className="App"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${b}/${b}.png`}}
      >
        <Intro />
        <BrowserRouter>
          <TabPages />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
