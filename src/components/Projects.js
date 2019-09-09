import React, { Component } from 'react'
import Gallery from './Gallery'
import Kopi from '../assets/images/kopi.png'
import Pricosha from '../assets/images/pricosha.png'
import Asteroids from '../assets/images/asteroids.png'
import CheckText from '../assets/images/checktext.png'

const DEFAULT_IMAGES = [
    { id: '1', src: 'https://github.com/cyong813/kopi', thumbnail: Kopi, caption: 'Kopi', description: 'Coffee web application built with MERN (MongoDB, Express/React/Node JS) stack.'},
    { id: '2', src: 'https://github.com/cyong813/PriCoSha', thumbnail: Pricosha, caption: 'PriCoSha', description: 'Private Content Sharing web application built with MySQL & Flask.'},
    { id: '3', src: 'https://github.com/cyong813/Asteroid-Field-pygame-proj', thumbnail: Asteroids, caption: 'Asteroid Field', description: 'Minigame built with Python Pygame library.'},
    { id: '4', src: 'https://github.com/cyong813/appsec-check-yo-text', thumbnail: CheckText, caption: "Check-Yo'-Text", description: 'Secure spellcheck application built with MySQL & Flask.'}
];

class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid' id='projects'>
                <div className="row">
                    <div className="col-sm-3 col-md-3"></div>
                    <div className="col-sm-7 col-md-7">
                        <section id='section'>
                            <h1 id='title'>Projects</h1>
                            <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                                src,
                                thumbnail,
                                caption,
                                description
                            }))} />
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects