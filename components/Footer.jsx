import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#" className="footer-logo">Utkarsh Awasthi</a>
                    <p className="footer-text">
                        Passionate about solving complex problems through code and equally devoted to teaching and mentoring, I bridge the worlds of software engineering and education to inspire innovation and growth.
                    </p>
                    <div className="footer-social">
                        <a href="tel:+917398386086" className="social-link">
                            <i className="fas fa-phone-alt"></i>
                        </a>
                        <a href="mailto:utkarsha070@gmail.com" className="social-link">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" className="social-link">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Utkarsh-Awasthi08/" target="_blank" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-links-container">
                    <h3 className="footer-heading">Quick Links</h3>
                    <div className="footer-links">
                        <a href="#home" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Home
                        </a>
                        <a href="#about" className="footer-link">
                            <i className="fas fa-chevron-right"></i> About
                        </a>
                        <a href="#projects" className="footer-link">
                            <i className="fas fa-chevron-right"></i> My Work
                        </a>
                        <a href="#experience" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Experience
                        </a>
                        {/* <a href="#achievements" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Achievements
                        </a> */}
                    </div>
                </div>
                <div className="footer-links-container">
                    <h3 className="footer-heading">Quick Links</h3>
                    <div className="footer-links">
                    <a href="https://github.com/Utkarsh-Awasthi08/" target="_blank" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Github
                        </a>
                        <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" className="footer-link">
                            <i className="fas fa-chevron-right"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Utkarsh Awasthi. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer