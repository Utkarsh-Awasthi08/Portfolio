import React, { useEffect, useRef } from 'react'

const stats = [
  { number: '4+', label: 'Projects Shipped' },
  { number: '500+', label: 'DSA Problems' },
  { number: '8.49', label: 'CGPA at IIIT' },
  { number: '6+', label: 'Hackathons' },
];

const StatsStrip = () => {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.stat-item');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-strip" ref={ref}>
      <div className="container stats-strip-container">
        {stats.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && <div className="stat-divider" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;
