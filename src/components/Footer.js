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
                    <a href="mailto:cy986@nyu.edu"><FontAwesomeIcon icon={faEnvelope} size="3x" color="#F9B320"/></a>
                    <a href="https://www.linkedin.com/in/corinnay813"><FontAwesomeIcon icon={faLinkedin} size="3x" color="#0177B5"/></a>
                    <a href="https://github.com/cyong813"><FontAwesomeIcon icon={faGithub} size="3x" color="black"/></a>
                </div>
                <p><i>Thanks for stopping by!</i></p>
            </footer>
        )
    }
}

export default Footer