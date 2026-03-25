import React from 'react'

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-title-container">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know more about my background, skills, and what drives me.
                    </p>
                </div>
                <div className="about-container">
                    <div className="about-content">
                        <div className="about-tagline">My Background</div>
                        <h3 className="about-heading">Developer by Profession, Problem Solver by Passion.</h3>
                        <p className="about-text">
                            I'm Utkarsh Awasthi — a passionate software developer who loves solving complex real-world problems through clean, efficient code. With hands-on experience in building full-stack applications using technologies like Java, Spring Boot, React, MySQL and numerous others, I’ve dedicated my career to creating impactful digital solutions that are both scalable and user-friendly.
                        </p>
                        <p className="about-text">
                            With a strong understanding of system design principles, I enjoy architecting applications that handle real-world constraints—whether it’s optimizing performance, building reliable APIs, or structuring distributed components that grow seamlessly with user needs.
                        </p>
                        <p className="about-text">
                            Beyond development, I’m a DevOps enthusiast committed to bridging the gap between software engineering and seamless deployment pipelines. I actively explore tools and practices that enhance automation, reliability, and collaboration.
                        </p>

                    </div>
                    <div className="about-visual">
                        <div className="about-image-container">
                            <div className="about-image-bg"></div>
                            <img src="/images/hero-section.jpg" alt="About" className="about-image"></img>
                        </div>
                        <div className="about-decorations">
                            <div className="about-decoration"></div>
                            <div className="about-decoration"></div>
                        </div>
                    </div>

                </div>
                <div className="skills-container">
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-solid fa-code"></i></div>
                        <div className="skill-name">HTML5</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-brands fa-css3"></i></div>
                        <div className="skill-name">CSS3</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-brands fa-bootstrap"></i></div>
                        <div className="skill-name">Bootstrap</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-js"></i></div>
                        <div className="skill-name">JavaScript</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-react"></i></div>
                        <div className="skill-name">React</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-java"></i></div>
                        <div className="skill-name">Java</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-solid fa-power-off"></i></div>
                        <div className="skill-name">Spring Boot</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fas fa-database"></i></div>
                        <div className="skill-name">SQL</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-server"></i></div>
                        <div className="skill-name">MySQL</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-solid fa-leaf"></i></div>
                        <div className="skill-name">Mongo DB</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-cloud"></i></div>
                        <div className="skill-name">AWS</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-brands fa-docker"></i></div>
                        <div className="skill-name">Docker</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-code-branch"></i></div>
                        <div className="skill-name">Git</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i class="fa-brands fa-github"></i></div>
                        <div className="skill-name">Github</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About