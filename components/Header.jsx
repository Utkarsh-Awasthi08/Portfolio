import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="logo">U.<span>A.</span></div>
            <nav className="nav">
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    {/* <a href="#achievements" className="nav-link">Achievements</a> */}
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>
            <button className="mobile-menu-btn">
                <i className="fas fa-bars"></i>
            </button>
        </div>
    </header>
  )
}

export default Header