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
                <a href='#'>Introduction</a>
            </Scroll>
        </li>
        <li>
            <Scroll type="id" element="experience">
                <a href='#'>Experience</a>
            </Scroll>
        </li>
        <li>
            <Scroll type="id" element="skills">
                <a href='#'>Skills</a>
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
    </Scrollspy>
    </nav>
    </StickyDiv>
)
    

export default MainNavbar