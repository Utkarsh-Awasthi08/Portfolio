import React from 'react'

const Experience = () => {
  return (
    <section className="section experience" id="experience">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    My professional journey and educational background
                </p>
            </div>
            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-person-chalkboard"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">2025 - Present</div>
                        <h3 className="timeline-title">Developer</h3>
                        <h4 className="timeline-subtitle">Java | React | Full Stack</h4>
                        <p className="timeline-description">
                        Designed and developed responsive web applications using modern frontend and backend technologies. Built full-stack web applications using React, Spring Boot, and MySQL.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">August 2025 - Present</div>
                        <h3 className="timeline-title">Designer</h3>
                        <h4 className="timeline-subtitle">System Design</h4>
                        <p className="timeline-description">
                        Learned system design concepts. Studied core system design concepts including scalability and modular architecture. Gained hands-on experience with REST APIs, database design, and authentication.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-clapperboard"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">2026 - Present</div>
                        <h3 className="timeline-title">Enthusiast</h3>
                        <h4 className="timeline-subtitle">Cloud and DevOps</h4>
                        <p className="timeline-description">
                        Explored DevOps practices including containerization and CI/CD concepts. Built and deployed projects to understand real-world software lifecycle.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">August 2023 - Present</div>
                        <h3 className="timeline-title">Problem Solver</h3>
                        <h4 className="timeline-subtitle">Leetcode | GFG | Hackerrank</h4>
                        <p className="timeline-description">
                        Consistently practice problem-solving through coding challenges. Solved 200+ DSA problems. Strengthened understanding of data structures, algorithms, and system design fundamentals. Focused on writing clean, modular, and scalable code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience