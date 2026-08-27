import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">Utkarsh<span> Awasthi</span></a>
                    <p className="footer-text">
                        Passionate about building scalable systems and solving real-world problems through clean, purposeful code. Always learning, always shipping.
                    </p>
                    <div className="footer-social">
                        <a href="tel:+917398386086" className="social-link" aria-label="Phone"><i className="fas fa-phone-alt"></i></a>
                        <a href="mailto:utkarsha070@gmail.com" className="social-link" aria-label="Email"><i className="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Utkarsh-Awasthi08/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h3 className="footer-heading">Navigation</h3>
                    <div className="footer-links">
                        <a href="#home" className="footer-link"><i className="fas fa-chevron-right"></i> Home</a>
                        <a href="#about" className="footer-link"><i className="fas fa-chevron-right"></i> About</a>
                        <a href="#projects" className="footer-link"><i className="fas fa-chevron-right"></i> Projects</a>
                        <a href="#experience" className="footer-link"><i className="fas fa-chevron-right"></i> Experience</a>
                        <a href="#contact" className="footer-link"><i className="fas fa-chevron-right"></i> Contact</a>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h3 className="footer-heading">Connect</h3>
                    <div className="footer-links">
                        <a href="https://github.com/Utkarsh-Awasthi08/" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fas fa-chevron-right"></i> GitHub</a>
                        <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fas fa-chevron-right"></i> LinkedIn</a>
                        <a href="mailto:utkarsha070@gmail.com" className="footer-link"><i className="fas fa-chevron-right"></i> Email Me</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Utkarsh Awasthi. All rights reserved.</p>
                <div className="footer-bottom-right">
                    Built with <i className="fas fa-heart"></i> using React &amp; Vite
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer