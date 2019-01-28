import React, { Component } from 'react';
import { Button, Container, Header, Icon, Image } from 'semantic-ui-react'
import InfoLinks from './InfoLinks'

const About = () => (
  <div id="Intro">
    <Container className='center aligned' style={{padding: '0.5em 0.5em 0.5em 0.5em'}}>
        <Image src="/avatar.jpg" alt="avatar" className="ui avatar small image" disabled/>

        <Header as='h1' style={{color: 'lightgray', margin: '0.45em', fontSize: "4em"}}>Sam Lamichhane</Header>

        <InfoLinks />
    </Container>
  </div>
)

export default About;