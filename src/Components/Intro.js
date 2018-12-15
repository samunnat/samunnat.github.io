import React, { Component } from 'react';
import { Button, Container, Header, Icon, Image } from 'semantic-ui-react'

class Intro extends Component {
  render() {
    // TODO: need to fix anchor tags since they overflow outside the icons
    return (
      <div id="Intro">
        <Container className='center aligned' style={{padding: '0.5em 0.5em 0.5em 0.5em'}}>
            <Image src="/avatar.jpg" alt="avatar" className="ui avatar small image" />

            <Header size='huge' style={{color: 'lightgray', margin: '0.45em'}}>Samunnat Lamichhane</Header>

            <div className="info_links">

              <a href="https://github.com/samunnat" rel="noopener noreferrer" target="_blank">
                <Icon name="github" color='violet' size="big" link />
              </a>

              <a href="/sam_resume.pdf" rel="noopener noreferrer" target = "_blank">
                <Button compact color='teal' size='tiny'>resume</Button>
              </a>

              <a href="https://www.linkedin.com/in/samunnatlamichhane" rel="noopener noreferrer" target="_blank">
                <Icon name="linkedin" color='blue' size="big" link />
              </a>
            </div>
        </Container>
      </div>
    );
  }
}

export default Intro;