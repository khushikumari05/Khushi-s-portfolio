import React from 'react'
import Header from "./components/header/Header"
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
        <Nav/>

    <Header/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App