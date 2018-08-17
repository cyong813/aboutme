import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

class Navbar extends Component {
    render() {
        return (
            <nav id='nav'>
                <Scrollspy items={['intro', 'experience', 'skills', 'projects', 'contact']} currentClassName="is-active" offset={-300}>
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
                        <Scroll>
                            <a href='#contact'>Contact</a>
                        </Scroll>
                    </li>
                </Scrollspy>
            </nav>
        )
    }
}

export default Navbar