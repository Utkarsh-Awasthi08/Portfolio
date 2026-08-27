import './App.css'
import { ThemeProvider } from './ThemeContext'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import useSiteEffects from './hooks/useSiteEffects'

function AppInner() {
  useSiteEffects();
  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      {/* Ambient background orbs */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>

      <Loader />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App
