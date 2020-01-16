import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import InfoLinks from './InfoLinks'
import TextScramble from './utils/TextScramble'
import './css/Intro.css'

const backg = 'random_grey_variations';

class Intro extends React.Component {
  animatePhrases() {
    const el = document.querySelector('#name')
    const fx = new TextScramble(el)
    fx.setText('SAM LAMICHHANE')
  }

  componentDidMount() {
    this.animatePhrases()
  }

  render() {
    return (
      <div id="Intro"
       style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${backg}/${backg}.png`}}
      >
        <Container className='center aligned' style={{padding: '1em 0.5em 1em 0.5em'}}>
            <Image id="image" src="/avatar.jpg" alt="avatar" className="ui avatar small image"/>
            
            <Header as='h1' id='name' textAlign='center' onMouseEnter={this.animatePhrases}></Header>
            
            <InfoLinks />
        </Container>
      </div>
    );
  }
}

export default Intro;