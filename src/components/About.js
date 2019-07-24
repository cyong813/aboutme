import React, { Component } from 'react'
import Avatar from '../assets/images/avatar.jpg'

class About extends Component {
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
                            <h1 id='title'>About</h1>
                                <p>Born and raised in Brooklyn, New York. I found my passion for computer science after realizing how much I loved
                                playing flash games and designing basic websites since I was younger. </p>
                                <p>I've graduated New York University
                                Tandon School of Engineering with a bachelor's degree in Computer Science and a minor in cyber security as of May 2019.</p>
                                <p>Feel free to check out my <a href='https://drive.google.com/file/d/14YEYGQ6GsqUPOCqj0CB7tiUjUM_rApBi/view?usp=sharing' target='_blank'><b>resume</b></a> and <a href='https://sad-elion-202e0c.netlify.com' target='_blank'><b>blog</b></a>.</p>
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

export default About