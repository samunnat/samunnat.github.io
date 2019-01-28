import React, { Component } from 'react';
import { Container, Header, Image, Button } from 'semantic-ui-react'

const NavBar = () => (
  <div id="NavBar">
    <Container className='center aligned' fluid>
        <Image src="/avatar.jpg" alt="avatar" className="ui avatar small image" disabled/>

        <Header size='huge' color='yellow'>
          Sam Lamichhane
        </Header>

        <InfoLinks/>

        <Header size='medium' style={{color: 'lightgray'}}>
          Hello! I'm Sam Lamichhane, a CompSci junior at CU-Boulder.
          If you want to talk to me directly, just email me here.
        </Header>
    </Container>
  </div>
)

export default NavBar;