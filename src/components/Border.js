import React, { Component } from 'react'
import waveBorder from '../assets/images/border.svg'

class Border extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-3 col-md-3"></div>
                    <div className="col-sm-7 col-md-7">
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