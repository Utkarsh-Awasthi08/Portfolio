import React, { useEffect, useRef } from "react";

const Achievements = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: "fa-solid fa-play",
      title: "22k Subscribers",
      desc: `Built a thriving tech-focused YouTube channel with 22k+ subscribers by consistently creating high-quality tutorials, project walkthroughs, and career guidance content.`,
    },
    {
      icon: "fas fa-trophy",
      title: "300+ bookings on Topmate",
      desc: `Successfully mentored over 300 individuals on Topmate, guiding them in tech career planning, coding, and project development.`,
    },
    {
      icon: "fa-solid fa-film",
      title: "Premium Courses on Udemy",
      desc: `Published premium courses on Udemy helping thousands learn Java, Spring Boot, and full-stack development through real-world projects.`,
    },
    {
      icon: "fa-solid fa-code-merge",
      title: "GitHub Contributions",
      desc: `Actively contribute to open-source, maintain full-stack repos, and help developers learn and collaborate globally.`,
    },
  ];

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognitions and milestones I've reached along my journey
          </p>
        </div>

        <div className="achievements-container">
          {achievements.map((item, idx) => (
            <div
              className="achievement-card"
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div className="achievement-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;