import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Tag from './components/tagcloud/Tag'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Tag />
        <Services/>
        <Contact />
        <Footer />
    </>
  )
}


export default App
