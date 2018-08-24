import React, { Component } from 'react'

class Experience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let description = this.props.description.map(descItem => {
            return (
                <li>{descItem}</li>
            )
        })

        return (
            <div className='container' id='exp'>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div id="date">
                            {this.props.date}
                        </div>
                        <div id="company">
                            {this.props.company}
                        </div>
                        <div id="location">
                            {this.props.location}
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8">
                        <div id="position">
                            {this.props.position}
                        </div>
                        <div id="description">
                            <ul>{description}</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience