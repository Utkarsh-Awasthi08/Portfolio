import React from 'react'

const Experience = () => {
  return (
    <section className="section experience" id="experience">
        <div className="container">
            <div className="section-title-container reveal">
                <div className="section-badge"><i className="fas fa-briefcase"></i> Journey</div>
                <h2 className="section-title">Experience &amp; <span className="highlight">Growth</span></h2>
                <p className="section-subtitle">
                    My professional journey and educational background
                </p>
            </div>

            <div className="timeline">
                <div className="timeline-line"></div>

                {/* Boomlex Internship */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="timeline-content timeline-content--highlight">
                        <div className="timeline-type-badge timeline-type-badge--work">Work</div>
                        <div className="timeline-date">June 2026 – Present</div>
                        <h3 className="timeline-title">Software Development Intern</h3>
                        <h4 className="timeline-subtitle">Boomlex Technologies</h4>
                        <ul className="timeline-list">
                            <li className="timeline-list-item">
                                <strong>Developed RebbenClipp, a multi-tenant e-commerce platform</strong> serving B2C, B2B, and Enterprise customers. Engineered the full-stack architecture using Next.js, Node.js, PostgreSQL, and Redis.
                            </li>
                            <li className="timeline-list-item">
                                <strong>Built scalable distributed systems</strong> integrating Firebase Auth, Razorpay, Typesense, and BunnyCDN. Designed secure order processing, real-time inventory, and dynamic pricing engines.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* IIIT Bhopal */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-type-badge timeline-type-badge--edu">Education</div>
                        <div className="timeline-date">October 2023 – Present</div>
                        <h3 className="timeline-title">B.Tech — Electronics &amp; Communication Engineering</h3>
                        <h4 className="timeline-subtitle">Indian Institute of Information Technology, Bhopal</h4>
                        <div className="timeline-edu-meta">
                            <span className="timeline-cgpa"><i className="fas fa-star"></i> CGPA: 8.49</span>
                        </div>
                        <p className="timeline-description">
                            Relevant Coursework: Data Structures &amp; Algorithms, Database Management Systems, Operating Systems.
                        </p>
                    </div>
                </div>

                {/* Full Stack Developer */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-person-chalkboard"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">2025 – Present</div>
                        <h3 className="timeline-title">Developer</h3>
                        <h4 className="timeline-subtitle">Java | React | Full Stack</h4>
                        <p className="timeline-description">
                            Built full-stack web applications utilizing React, Spring Boot, and MySQL.
                        </p>
                    </div>
                </div>

                {/* System Design */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">August 2025 – Present</div>
                        <h3 className="timeline-title">System Designer</h3>
                        <h4 className="timeline-subtitle">System Design</h4>
                        <p className="timeline-description">
                            Architecting scalable systems with RESTful APIs, optimized databases, and secure authentication.
                        </p>
                    </div>
                </div>

                {/* DevOps */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-cloud"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">2026 – Present</div>
                        <h3 className="timeline-title">DevOps Enthusiast</h3>
                        <h4 className="timeline-subtitle">Cloud &amp; DevOps</h4>
                        <p className="timeline-description">
                            Implementing containerization (Docker) and CI/CD pipelines for automated, reliable deployments.
                        </p>
                    </div>
                </div>

                {/* DSA */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">August 2023 – Present</div>
                        <h3 className="timeline-title">Problem Solver</h3>
                        <h4 className="timeline-subtitle">LeetCode | GFG | HackerRank</h4>
                        <p className="timeline-description">
                            500+ DSA problems solved. Active competitor in national hackathons including SIH, Flipkart Grid, and Amazon ML Challenge.
                        </p>
                    </div>
                </div>

                {/* Schooling */}
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-school"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-type-badge timeline-type-badge--edu">Education</div>
                        <div className="timeline-date">2021 – 2023</div>
                        <h3 className="timeline-title">XII (ICSE) — 88% &nbsp;|&nbsp; X (ICSE) — 96.8%</h3>
                        <h4 className="timeline-subtitle">City Montessori School, Lucknow</h4>
                        <p className="timeline-description">
                            Strong academic foundation with distinction in both Class X and Class XII board examinations.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Experience