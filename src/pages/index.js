import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import MainNavbar from '../components/Navbar'
import About from '../components/About'
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
        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
