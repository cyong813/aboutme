import React, { Component } from 'react'
import Gallery from './Gallery'
import Pricosha from '../assets/images/pricosha.png'
import Asteroids from '../assets/images/asteroids.png'

const DEFAULT_IMAGES = [
    { id: '1', src: 'https://github.com/cyong813/PriCoSha', thumbnail: Pricosha, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: 'https://github.com/cyong813/Asteroid-Field-pygame-proj', thumbnail: Asteroids, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
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