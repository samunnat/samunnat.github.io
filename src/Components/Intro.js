import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import InfoLinks from './InfoLinks'

const Intro = () => (
  <div id="Intro">
    <Container className='center aligned' style={{padding: '1em 0.5em 1em 0.5em'}}>
        <Image src="/avatar.jpg" alt="avatar" className="ui avatar small image" disabled/>

        <Header as='h1' size='huge' style={{color: 'lightgray'}}>Sam Lamichhane</Header>

        <InfoLinks />
    </Container>
  </div>
)

export default Intro;