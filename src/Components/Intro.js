import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import InfoLinks from './InfoLinks'

var b = 'moulin';

const Intro = () => (
  <div id="Intro"
    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${b}/${b}.png`}}
  >
    <Container 
      className='center aligned' 
      style={{padding: '1em 0.5em 1em 0.5em'}}
    >
        <Image id="image" src="/avatar.jpg" alt="avatar" className="ui avatar small image"/>

        <Header as='h1' size='huge' style={{color: 'white'}}>Sam Lamichhane</Header>
          
        <InfoLinks />
    </Container>
  </div>
)

export default Intro;