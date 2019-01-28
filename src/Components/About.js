import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

const About = () => (
  <div id="About">
    <Container>
      <div id="education">
        <Header as='h3' style={{color: "#f2f2f2", padding:"0.3em", paddingTop:"1em", margin:"0"}}>
          Education: I'm currently a junior pursuing my Bachelor's Degree in Computer Science at CU Boulder.
        </Header>

        <Header as='h4' style={{color: "#f2f2f2", padding:"0.3em", paddingTop:"0.1em", margin:"0"}}>
        --- Currently, I'm looking for internship opportunities for the upcoming summer. Feel free to contact me at <span style={{color: 'yellow'}}>sala6632@colorado.edu</span>.
        </Header>
      </div>

      <Header as='h3' style={{color: "#f2f2f2", padding:"0.3em", paddingTop:"1em", paddingBottom:"0", margin:"0"}}>
        In my free time, I like to:
      </Header>
      <ul id="hobbies" marginRight='1em' style={{color: "#f2f2f2"}}>
        <li><b>Read:</b> I'm a big fan of fantasy book series like The Kingkiller Chronicles, The Farseer Trilogy, The Lord of the Rings, etc. I also like futuristic dystopian books such as Ready Player One, or Brave New World.</li>
        <li><b>Hike:</b> Boulder is a paradise for hikers, and I take every opportunity I can get to climb to the top and enjoy the views.</li>
      </ul>

    </Container>
  </div>
)

export default About;
