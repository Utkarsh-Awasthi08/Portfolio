import React, { useEffect, useRef, useState } from 'react'

const ROLES = [
  'Full Stack Developer',
  'Problem Solver',
  'DevOps Enthusiast',
  'System Designer',
];

const TypeWriter = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return <span className="typewriter">{displayed}</span>;
};

const Hero = () => {
  return (
    <section className="hero" id="home">
        {/* Grid overlay background */}
        <div className="hero-grid-overlay"></div>

        <div className="container hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="dot"></span>
                    Open to Work &amp; Collaborations
                </div>

                <div className="hero-greeting">Hi there, I'm</div>

                <h1 className="hero-title">
                    <span className="gradient-text">Utkarsh Awasthi</span>
                </h1>

                <h2 className="hero-subtitle">
                    <TypeWriter />
                </h2>

                <p className="hero-description">
                    I'm a passionate full-stack developer who loves turning ideas into clean, functional,
                    and impactful digital experiences. Whether it's architecting robust backend systems
                    or crafting intuitive user interfaces, I enjoy solving real-world problems through
                    thoughtful engineering.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        View My Work <i className="fas fa-arrow-right"></i>
                    </a>
                    <a
                        href="/Utkarsh_Resume_SDE.pdf"
                        download="Utkarsh_Awasthi_Resume.pdf"
                        className="btn btn-outline"
                    >
                        <i className="fas fa-download"></i> Resume
                    </a>
                    <a href="#contact" className="btn btn-ghost">
                        Get In Touch
                    </a>
                </div>

                <div className="social-links">
                    <a href="tel:+917398386086" className="social-link" aria-label="Phone">
                        <i className="fas fa-phone-alt"></i>
                    </a>
                    <a href="mailto:utkarsha070@gmail.com" className="social-link" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-awasthi-79a349291" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Utkarsh-Awasthi08" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>

                <div className="hero-visual-inner">
                    <div className="hero-image-frame">
                        <img src="/images/Profile_2.webp" alt="Utkarsh Awasthi" />
                    </div>
                </div>

                <div className="hero-stats stats-1">
                    <div className="hero-stats-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Specialty</div>
                        <div className="hero-stats-value">Java Full Stack</div>
                    </div>
                </div>

                <div className="hero-stats stats-2">
                    <div className="hero-stats-icon">
                        <i className="fa-brands fa-docker"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Enthusiast</div>
                        <div className="hero-stats-value">DevOps & Cloud</div>
                    </div>
                </div>

                <div className="hero-stats stats-3">
                    <div className="hero-stats-icon">
                        <i className="fa-solid fa-sitemap"></i>
                    </div>
                    <div className="hero-stats-text">
                        <div className="hero-stats-label">Focus Area</div>
                        <div className="hero-stats-value">System Design</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="scroll-indicator">
            <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
            </div>
            <span>Scroll</span>
        </div>
    </section>
  )
}

export default Hero