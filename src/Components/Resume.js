import React, { Component } from 'react';
import pdf from './me/resume.pdf'

class Resume extends Component {
  render() {
    return (
        <div className = "App">
            <a href = {pdf} target = "_blank">My Resume</a>
        </div>
    );
  }
}

export default Resume;