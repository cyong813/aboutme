import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import StickyDiv from 'react-stickydiv'

const MainNavbar = (props) => (
    <StickyDiv>
        <nav id='nav'>
            <Scrollspy items={['intro', 'experience', 'skills', 'projects', 'contact']} currentClassName="is-active" offset={-100}>
                <li>
                    <Scroll type="id" element="intro">
                        <a href='#'>About</a>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="projects">
                        <a href='#'>Projects</a>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="contact">
                        <a href='#'>Contact</a>
                    </Scroll>
                </li>
                <br/>   
                <li>
                    <a href='https://drive.google.com/file/d/14YEYGQ6GsqUPOCqj0CB7tiUjUM_rApBi/view?usp=sharing' target='_blank'>Resume</a>
                </li>
                <li>
                    <a href='https://sad-elion-202e0c.netlify.com' target='_blank'>Blog</a>
                </li>
            </Scrollspy>
    </nav>
    </StickyDiv>
)
    

export default MainNavbar