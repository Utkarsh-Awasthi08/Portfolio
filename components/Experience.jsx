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
                                <strong>Manifested RebbenClipp, a multi-tenant e-commerce &amp; procurement platform</strong> unifying B2C, B2B, and Enterprise buying on one shared catalogue — powered by Next.js, Node.js, PostgreSQL, MongoDB, Redis, and REST APIs. Structured core modules including inventory management, RFQ workflows, contract pricing, and role-based access control.
                            </li>
                            <li className="timeline-list-item">
                                <strong>Created scalable backend systems and distributed services</strong>, integrating Firebase Authentication, Razorpay, MongoDB Atlas, Redis, Typesense and BunnyCDN into one unified platform. Built secure order processing, real-time inventory reservation, dynamic pricing engines, and a configurable enterprise purchase-approval workflow with parallel reviewer roles and budget/credit enforcement.
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
                            Designed and developed responsive web applications using modern frontend and backend technologies. Built full-stack web applications using React, Spring Boot, and MySQL.
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
                            Studied core system design concepts including scalability and modular architecture. Gained hands-on experience with REST APIs, database design, and authentication patterns.
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
                            Explored DevOps practices including containerization with Docker and CI/CD concepts. Built and deployed projects to understand real-world software lifecycle management.
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
                            Solved 500+ DSA problems across GeeksForGeeks, LeetCode, CodeChef and HackerRank. Competed in SIH 2024 &amp; 2025, Flipkart Grid 6.0, Adobe India Hackathon 2025, Walmart Sparkathon 2025, Amazon ML Challenge 2025, and NEST 2.0.
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