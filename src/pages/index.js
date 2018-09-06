import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import MainNavbar from '../components/Navbar'
import Intro from '../components/Intro'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
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
        <div className='border' />
        <Experiences />
        <div className='border' />
        <Skills />
        <div className='border' />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
