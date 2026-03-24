import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home">
        <div className="hero-background"></div>
        <div className="container hero-container">
            <div className="hero-content">
                <div className="hero-greeting">Hi there, I'm</div>
                <h1 className="hero-title"><span className="gradient-text">Utkarsh Awasthi</span></h1>
                <h2 className="hero-subtitle">Developer, Problem Solver</h2>
                <p className="hero-description">
                    I’m a passionate full-stack developer who loves turning ideas into clean, functional, and impactful digital experiences. Whether it’s architecting robust backend systems or crafting intuitive user interfaces, I enjoy solving real-world problems through thoughtful engineering. With a strong foundation in Java, Spring Boot, React, and modern web technologies, I thrive on challenges that push me to learn, innovate, and grow—both as a developer and as a problem solver.
                </p>
                <div className="hero-buttons" style={{display: "flex", gap: "1rem"}}>
                    <a href="#projects" className="btn btn-primary">
                        View My Work <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get In Touch
                    </a>
                </div>
                <div className="social-links">
                    <a href="tel:+917398386086" className="social-link">
                        <i className="fas fa-phone-alt"></i>
                    </a>
                    <a href="mailto:utkarsha070@gmail.com" className="social-link">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Utkarsh-Awasthi08" target="_blank" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-visual-inner">
                    <div className="hero-visual-frame">
                        <img src="/images/Profile_2.png" alt="Profile" style={{ width: "90%", height: "90%", objectFit: "cover", borderRadius: "15px" }}></img>
                    </div>
                    <div className="hero-visual-frame"></div>
                    <div className="hero-visual-frame"></div>
                </div>
                <div className="hero-stats stats-1">
                    <div className="hero-stats-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Developer</div>
                        <div className="hero-stats-value">Java Full Stack</div>
                    </div>
                </div>
                <div className="hero-stats stats-2">
                    <div className="hero-stats-icon">
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Enthusiast</div>
                        <div className="hero-stats-value">DevOps</div>
                    </div>
                </div>
                <div className="hero-stats stats-3">
                    <div className="hero-stats-icon">
                        <i className="fa-solid fa-video"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Designer</div>
                        <div className="hero-stats-value">System Design</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-indicator-line">
                <div className="scroll-indicator-dot"></div>
            </div>
        </div>
    </section>
  )
}

export default Hero