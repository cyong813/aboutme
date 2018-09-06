import React, { Component } from 'react'
import Avatar from '../assets/images/avatar.jpg'

class Intro extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid' id='intro'>
                <div className="row">
                    <div className="col-sm-3 col-md-3"></div>
                    <div className="col-sm-7 col-md-7">
                        <section id='section'>
                            <h1 id='title'>Introduction</h1>
                                <p>Born and raised in Brooklyn, New York. I found my passion for computer science after realizing how much I loved
                                playing flash games and designing basic websites since I was younger. </p>
                                <p>Fast forward to the present, I'm a senior attending New York University
                                Tandon School of Engineering on track for a bachelor's degree in Computer Science and a minor in cyber security.</p>
                        </section>
                    </div>
                    <div className="col-md-2 col-sm-2 avatarCol">
                        <img
                            src={Avatar}
                            id='avatar'
                            className="pull-right img-fluid"
                            width="150px"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro