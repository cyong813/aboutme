import React, { Component } from 'react'
import Experience from '../components/Experience'

class Experiences extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid' id='experience'>
                <div className="row">
                    <div className="col-sm-3 col-md-3"></div>
                    <div className="col-sm-7 col-md-7">
                        <section id='section'>
                            <h1 id='title'>Experience</h1>
                                <Experience 
                                        date="Jul 2018 - Aug 2018"
                                        position="Teaching Assistant for CS and Entrepreneurship for Social Good"
                                        company="Cooper Union"
                                        location="New York, New York"
                                        description={[
                                            "Oversee and assist high school students in a Summer STEM program to develop web applications for non-profit organizations.", 
                                            "Design lectures and sample exercises for HTML, CSS, and ReactJS, and manage communication between clients."
                                        ]} />
                                    <Experience 
                                        date="Jun 2017 - May 2018"
                                        position="Technology Intern"
                                        company="The Wall Street Experience"
                                        location="New York, New York"
                                        description={[
                                            "Develop scripts to automate operating processes using Google applications with Google Apps Script and Python.", 
                                            "Create tools to scrape and parse information of tours to analyze for operation purposes."
                                        ]} />
                                    <Experience 
                                        date="May 2017 - Sep 2017"
                                        position="Cybersecurity Volunteer"
                                        company="Homeland Security Investigations"
                                        location="New York, New York"
                                        description={[
                                            "Assisted with cases within the Computer Forensics Unit, Child Exploitation Investigations, Dark Web/Tor Crypto-Currency Investigations and General Computer Crimes group.", 
                                            "Worked closely with case agents to conduct computer forensic analyses and imaging/extracting data using software such as Encase and Forensic Toolkit."
                                        ]} />
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences