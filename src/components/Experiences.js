import React, { Component } from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import Experience from '../components/Experience'

class Experiences extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        configureAnchors({scrollDuration: 100, keepLastAnchorHash: false})
    }

    render() {
        return (
            <ScrollableAnchor id={'experience'}>
            <div className='container' id='experiences'>
                <div className="row">
                    <section id='section'>
                        <h1 id='title'>Experience</h1>
                            <Experience 
                                date="Jul 2018-Aug 2018"
                                position="Teaching Assistant for Computer Science and Entrepreneurship for Social Good"
                                company="Cooper Union"
                                location="New York, New York"
                                description={[
                                    "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                                    "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                                ]} />
                            <Experience 
                                date="Jul 2018-Aug 2018"
                                position="Teaching Assistant for Computer Science and Entrepreneurship for Social Good"
                                company="Cooper Union"
                                location="New York, New York"
                                description={[
                                    "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                                    "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                                ]} />
                            <Experience 
                                date="Jul 2018-Aug 2018"
                                position="Teaching Assistant for Computer Science and Entrepreneurship for Social Good"
                                company="Cooper Union"
                                location="New York, New York"
                                description={[
                                    "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                                    "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                                ]} />
                            <Experience 
                                date="Jul 2018-Aug 2018"
                                position="Teaching Assistant for Computer Science and Entrepreneurship for Social Good"
                                company="Cooper Union"
                                location="New York, New York"
                                description={[
                                    "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                                    "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                                ]} />
                    </section>
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}

export default Experiences