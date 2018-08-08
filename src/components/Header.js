import React, { Component } from 'react'
import Link from 'gatsby-link'
import ParallaxImg from '../assets/images/parallax2.jpg'
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import ScrollableAnchor from 'react-scrollable-anchor'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Parallax
        bgImage={ParallaxImg}
        bgImageAlt="brooklyn"
        strength={100}>
          <div style={{ height: '650px', background: 'rgba(0, 0, 0, .10)'}}> 
            <div id='header'>
              <h1>Corinna</h1>
              <p>Computer Science & Cybersecurity</p>
              <div id='down-icon'>
                <a href='#intro'>
                  <FontAwesomeIcon icon={faCaretDown} size="lg" color="white"/>
                </a>
              </div>
            </div>
          </div>
      </Parallax>
    )
  }
  
}

export default Header
