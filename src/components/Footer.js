import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container' id='contact'>
                <div className="row">
                    <footer>
                        <h1>Contact</h1>
                        <dl className="contactList">
                            <dt>Email</dt>
                            <dd><a href="#">cy986@nyu.edu</a></dd>
                        </dl>
                        <ul className="icons">
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" color="black"/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer