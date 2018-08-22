import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import MainNavbar from '../components/Navbar'
import Intro from '../components/Intro'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import '../assets/scss/main.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <Header />
        <MainNavbar/>
        <Intro />
        <Experiences />
        <Skills />
      </div>
    )
  }
}

export default IndexPage
