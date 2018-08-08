import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Experiences from '../components/Experiences'
import '../assets/scss/main.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Intro />
        <Experiences />
      </div>
    )
  }
}

export default IndexPage
