import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react'
import InfoLinks from './InfoLinks'
import TextScramble from './utils/TextScramble'
import './css/Intro.css'

class Intro extends React.Component {
  animateName() {
    const el = document.querySelector('#name')
    el.textContent = "ॐ"
    const fx = new TextScramble(el)
    fx.setText('SAM LAMICHHANE')
  }

  componentDidMount() {
    this.animateName()
  }

  render() {
    const backg = 'random_grey_variations';
    return (
      <Segment id="intro" textAlign='center' text
       style={{
         backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/${backg}/${backg}.png`
        }}
      >
        <Image id="image" src="/avatar.jpg" alt="avatar" className="ui avatar small image"/>
        <Header as='h1' id='name' textAlign='center' onMouseEnter={this.animateName}></Header>
        <InfoLinks />
      </Segment>
    );
  }
}

export default Intro;