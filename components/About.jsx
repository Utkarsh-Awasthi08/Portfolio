import React, { useEffect, useRef } from 'react'

const skills = [
  // Languages
  { icon: 'fa-brands fa-java', name: 'Java' },
  { icon: 'fa-brands fa-js', name: 'JavaScript' },
  { icon: 'fa-solid fa-code', name: 'TypeScript' },
  // Frontend
  { icon: 'fa-solid fa-code', name: 'HTML5' },
  { icon: 'fa-brands fa-css3', name: 'CSS3' },
  { icon: 'fa-brands fa-react', name: 'React.js' },
  { icon: 'fa-solid fa-n', name: 'Next.js' },
  { icon: 'fa-solid fa-wind', name: 'Tailwind' },
  // Backend
  { icon: 'fa-solid fa-power-off', name: 'Spring Boot' },
  { icon: 'fa-solid fa-shield-halved', name: 'Spring Security' },
  { icon: 'fa-brands fa-node', name: 'Node.js' },
  { icon: 'fa-solid fa-server', name: 'Express.js' },
  // Databases
  { icon: 'fa-solid fa-database', name: 'MySQL' },
  { icon: 'fa-solid fa-database', name: 'PostgreSQL' },
  { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
  { icon: 'fa-solid fa-server', name: 'Redis' },
  { icon: 'fa-solid fa-circle-nodes', name: 'Neo4j' },
  // DevOps & Cloud
  { icon: 'fa-brands fa-docker', name: 'Docker' },
  // Tools
  { icon: 'fa-solid fa-code-branch', name: 'Git' },
  { icon: 'fa-brands fa-github', name: 'GitHub' },
  { icon: 'fa-solid fa-vial', name: 'Postman' },
];

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const items = skillsRef.current?.querySelectorAll('.skill-item');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = skillsRef.current.querySelectorAll('.skill-item');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('skill-visible'), i * 60);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-title-container reveal">
          <div className="section-badge"><i className="fas fa-user"></i> About Me</div>
          <h2 className="section-title">Who I <span className="highlight">Am</span></h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives me.
          </p>
        </div>

        <div className="about-container">
          <div className="about-visual reveal-left">
            <div className="about-image-bg"></div>
            <div className="about-image-wrapper">
              <img src="/images/hero-section.webp" alt="Utkarsh Awasthi – About" className="about-image" loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="about-content reveal-right">
            <div className="about-tagline">My Background</div>
            <h3 className="about-heading">
              Developer by Profession,<br />Problem Solver by Passion.
            </h3>
            <p className="about-text">
              I’m Utkarsh Awasthi, a full-stack developer who enjoys building scalable, user-centric applications. With a strong foundation in Java, React, and Node.js, I specialize in architecting robust backend services and designing intuitive frontend interfaces.
            </p>
            <p className="about-text">
              I have a deep passion for problem-solving and system design, constantly exploring ways to optimize performance and data flows. Beyond coding, I actively leverage DevOps practices like Docker and CI/CD to bridge the gap between development and seamless, reliable deployments.
            </p>
          </div>
        </div>

        <div ref={skillsRef}>
          <p className="skills-section-title reveal">Tech Stack &amp; Tools</p>
          <div className="skills-container">
            {skills.map((skill, i) => (
              <div className="skill-item" key={i} title={skill.name}>
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About