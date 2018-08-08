import React, { Component } from 'react'

class Experience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let description = this.props.description.map(descItem => {
            return (
                <ul>{descItem}</ul>
            )
        })

        return (
            <div className='container'>
                <div id="date">
                    {this.props.date}
                </div>
                <div id="position">
                    {this.props.position}
                </div>
                <div id="location">
                    {this.props.location}
                </div>
                <div id="description">
                    {description}
                </div>
            </div>
        )
    }
}

export default Experience