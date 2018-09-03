import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Scroll from './Scroll'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Parallax
        strength={100}
        style={{
          backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(#9c9bbf), color-stop(60%, #9ebcd5))',
          backgroundImage: '-webkit-linear-gradient(top, #9c9bbf 0%, #9ebcd5 60%)',
          backgroundImage: '-o-linear-gradient(top, #9c9bbf 0%, #9ebcd5 60%)',
          backgroundImage: 'linear-gradient(to bottom, #9c9bbf 0%, #9ebcd5 60%)'}}
        >
          <div style={{ height: '650px'}}> 
            <div id='header'>
              <h1>Corinna</h1>
              <p>Computer Science & Cybersecurity</p>
              <div id='down-icon'>
              <Scroll type="id" element="intro">
                <a href='#'>
                  <FontAwesomeIcon icon={faCaretDown} size="lg" color="white"/>
                </a>
                </Scroll>
              </div>
            </div>
          </div>
      </Parallax>
    )
  }
  
}

export default Header
