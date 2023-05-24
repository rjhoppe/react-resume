import React from 'react'
import Header2 from './components/header/Header2'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <>
        <Header2 />
        <Nav />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
    </>
  )
}

export default App