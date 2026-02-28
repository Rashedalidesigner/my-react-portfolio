import React from 'react'
import Header from './page/header/Header'
import Navbar from './page/nav/Navbar'
import About from './page/about/About'
import Exprience from './page/exprience/Exprience'
import Services from './page/services/Services'
import Portfolio from './page/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './page/contact/Contact'
import Footer from './page/footer/Footer'

const App = () => {
  return <>
    <Header />
    <Navbar />
    <About />
    <Exprience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
  </>
}

export default App