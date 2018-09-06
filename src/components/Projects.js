import React, { Component } from 'react'
import Lightbox from 'react-images';
import Pricosha from '../assets/images/pricosha.png'
import Asteroids from '../assets/images/asteroids.png'

class Projects extends Component {
    constructor(props) {
        super(props)
    

    this.state = {
        lightboxIsOpen: false
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            lightboxIsOpen: true,
        });
    }

    closeLightbox () {
        this.setState({
            lightboxIsOpen: false,
        });
    }

    render() {
        return (
            <div className='container-fluid' id='projects'>
                <div className="row">
                    <div className="col-sm-3 col-md-3"></div>
                    <div className="col-sm-7 col-md-7">
                        <section id='section'>
                            <h1 id='title'>Projects</h1>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects