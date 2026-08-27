import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' }
        );
        sections.forEach(s => observer.observe(s));
        return () => sections.forEach(s => observer.unobserve(s));
    }, []);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <header className="header" id="site-header">
            <div className="container header-container">
                <a href="#home" className="logo">U.<span>A.</span></a>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#about"      className={`nav-link ${activeSection === 'about'      ? 'active' : ''}`} onClick={handleNavClick}>About</a>
                    <a href="#projects"   className={`nav-link ${activeSection === 'projects'   ? 'active' : ''}`} onClick={handleNavClick}>Projects</a>
                    <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={handleNavClick}>Experience</a>
                    <a href="#contact"    className={`nav-link nav-cta ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleNavClick}>Contact</a>
                </nav>

                <div className="header-right">
                    <ThemeToggle />
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header