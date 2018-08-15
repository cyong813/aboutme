import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import { genericHashLink } from 'react-router-hash-link'
import Link from 'gatsby-link'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const HashLink = (props) => genericHashLink(props, Link)
        return (
            <nav id='nav'>
                <Scrollspy items={['intro', 'experience', 'skills', 'projects', 'contact']}>
                    <li>
                        <HashLink to='#intro'>Introduction</HashLink>
                    </li>
                    <li>
                        <HashLink to='#experience'>Experience</HashLink>
                    </li>
                    <li>
                        <HashLink to='#skills'>Skills</HashLink>
                    </li>
                    <li>
                        <HashLink to='#projects'>Projects</HashLink>
                    </li>
                    <li>
                        <HashLink to='#contact'>Contact</HashLink>
                    </li>
                </Scrollspy>
            </nav>
        )
    }
}

export default Navbar