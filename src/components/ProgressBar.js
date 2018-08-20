import React from 'react'

const ProgressBar = (props) => {
    return (
        <div className="progressBar">
            <b className={props.proficiencyClass}>
                <span className="progress__text">
                    <em>{props.item}</em>
                </span>
            </b>
        </div>
    )
}

export default ProgressBar