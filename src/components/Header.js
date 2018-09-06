import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Scroll from './Scroll'
import {Particles} from 'react-particles-js'

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
          <Particles
                params={{
                  "particles": {
                      "number": {
                          "value": 160,
                          "density": {
                              "enable": false
                          }
                      },
                      "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                              "speed": 4,
                              "size_min": 0.3
                          }
                      },
                      "line_linked": {
                          "enable": false
                      },
                      "move": {
                          "random": true,
                          "speed": 1,
                          "direction": "top",
                          "out_mode": "out"
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "bubble"
                          },
                          "onclick": {
                              "enable": true,
                              "mode": "repulse"
                          }
                      },
                      "modes": {
                          "bubble": {
                              "distance": 250,
                              "duration": 2,
                              "size": 0,
                              "opacity": 0
                          },
                          "repulse": {
                              "distance": 400,
                              "duration": 4
                          }
                      }
                  }
              }} />
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
