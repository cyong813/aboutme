import React, { Component } from 'react'
import waveBorder from '../assets/images/border.svg'

class Border extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid' id='intro'>
                <div className="row">
                    <div className="col-sm-2 col-md-2"></div>
                    <div className="col-sm-10 col-md-10">
                        <div className='waveBorder'>
                            <img src={waveBorder} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Border