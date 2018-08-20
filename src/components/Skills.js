import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ProgressBar from './ProgressBar'

const Skills = (props) => {
    return (
        <ScrollableAnchor id={'skills'}>
        <div className='container' id='skillset'>
            <div className="row">
                <div className="col-sm-6 col-md-8">
                    <section id='section'>
                        <h1 id='title'>Skills</h1>
                        <ProgressBar item="Python" proficiencyClass="progressBar__bar__pro" />
                        <ProgressBar item="HTML/CSS" proficiencyClass="progressBar__bar__pro" />
                        <ProgressBar item="C++" proficiencyClass="progressBar__bar__medium" />
                        <ProgressBar item="Javascript" proficiencyClass="progressBar__bar__medium" />
                        <ProgressBar item="Cloud Computing" proficiencyClass="progressBar__bar__beginner" />
                    </section>
                </div>
            </div>
        </div>
        </ScrollableAnchor>
    )
}

export default Skills