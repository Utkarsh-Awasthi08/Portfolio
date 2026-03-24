import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import useSiteEffects from './hooks/useSiteEffects'

function App() {
  useSiteEffects();
  return (
    <>
      <Loader/>

      

      <Header />

      <Hero />

      <About />

      <Projects />

      <Experience />

      {/* <Achievements /> */}

      <Contact />

      <Footer />
    </>
  )
}

export default App
