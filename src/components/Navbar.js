import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'

class Navbar extends Component {
    render() {
        return (
            <nav id='nav'>
                <Scrollspy items={['intro', 'experience', 'skills', 'projects', 'contact']}>
                    <li>
                        <a href='#intro'>Introduction</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </Scrollspy>
            </nav>
        )
    }
}

export default Navbar