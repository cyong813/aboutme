import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout