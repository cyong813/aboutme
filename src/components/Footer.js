import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer id='contact'>
                <div className="icons">
                    <a href="mailto:cy986@nyu.edu" id="mail"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                    <a href="https://www.linkedin.com/in/corinnay813" id="linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a href="https://github.com/cyong813" id="github"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                </div>
                <p><i>Thanks for stopping by!</i></p>
            </footer>
        )
    }
}

export default Footer