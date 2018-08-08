import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Experience from '../components/Experience'

class Experiences extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollableAnchor id={'experience'}>
            <div className='container'>
                <div className="row">
                    <Experience 
                        date="Jul 2018-Aug 2018"
                        position="Teaching Assistant for Computer Science and Entrepreneurship for Social Good"
                        location="Cooper Union"
                        description={[
                            "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                            "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                        ]} />
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}

export default Experiences