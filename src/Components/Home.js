import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Icon } from 'semantic-ui-react'

class Home extends Component {
  render() {
    // TODO: need to fix anchor tags since they overflow outside the icons
    return (
        <Container className='center aligned'>
            <Image src="/avatar.jpg" alt="avatar" className="ui avatar small image"/>

            <Header size='huge' style={{color: 'lightgray'}}>Samunnat Lamichhane</Header>

            <div className="info_links">

              <a href="https://github.com/samunnat" rel="noopener noreferrer" target="_blank">
                <Icon name="github" color='violet' size="big" link />
              </a>

              <a href="/resume.pdf" rel="noopener noreferrer" target = "_blank">
                <Button compact color='teal' size='tiny'>resume</Button>
              </a>

              <a href="https://www.linkedin.com/in/samunnatlamichhane" rel="noopener noreferrer" target="_blank">
                <Icon name="linkedin" color='blue' size="big" link />
              </a>
            </div>
        </Container>
    );
  }
}

export default Home;