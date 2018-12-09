import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Icon } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
        <Container>
            <img src="/avatar.jpg" alt="avatar" className="ui avatar small image"/>
            <Icon name="github" size="big"/>
            <Icon name="linkedin" size="big"/>
        </Container>
    );
  }
}

export default Home;