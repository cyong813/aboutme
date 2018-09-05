import React from 'react'
import ProgressBar from './ProgressBar'

const Skills = (props) => {
    return (
        <div className='container-fluid' id='skills'>
            <div className="row">
                <div className="col-sm-3 col-md-3"></div>
                <div className="col-sm-7 col-md-7">
                    <section id='section'>
                        <h1 id='title'>Skills</h1>
                        <h2 id='subtitle'>Programming Languages</h2>

                        <div id='progressContainer'>
                            <ProgressBar item="Python" proficiencyClass="progressBar__bar__pro" />
                            <ProgressBar item="Apps Script" proficiencyClass="progressBar__bar__pro" />
                            <ProgressBar item="HTML/CSS" proficiencyClass="progressBar__bar__pro" />
                            <ProgressBar item="C++" proficiencyClass="progressBar__bar__medium" />
                            <ProgressBar item="Javascript" proficiencyClass="progressBar__bar__medium" />
                            <ProgressBar item="SQL" proficiencyClass="progressBar__bar__beginner" />
                        </div>

                        <h2 id='subtitle'>Frameworks/Technologies</h2>
                        <ul id='list'>
                            <li>Selenium</li>
                            <li>Flask</li>
                        </ul>

                        <h2 id='subtitle'>In progress...</h2>
                        <ul id='list'>
                            <li>React, React Native, Redux</li>
                            <li>Cloud Computing (AWS)</li>
                            <li>Machine Learning/AI</li>
                            <li>Security (penetration testing)</li>
                        </ul>

                        <h2 id='subtitle'>Hobbies</h2>
                        <ul id='list'>
                            <li>Guitar</li>
                            <li>Piano (self-teaching in progress!)</li>
                            <li>Coffee-making (also self-teaching)</li>
                        </ul>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Skills