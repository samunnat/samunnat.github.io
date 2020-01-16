import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Intro from './components/Intro';
import TabPages from './components/TabPages';
import './App.css';

const backg = 'prism';

class App extends Component {
  render() {
    return (
      <div 
        className="App"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${backg}/${backg}.png`}}
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
