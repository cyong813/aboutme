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
        style={{background: '#9ebcd5'}}>
          <div style={{ height: '750px'}}> 
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
