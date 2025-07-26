import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaCheckCircle } from 'react-icons/fa';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const programmingSkills = [
    { name: 'Python', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'C', level: 80 },
    { name: 'Java', level: 55 },
    { name: 'SQL', level: 85 },
  ];

  const frameworks = [
    { name: 'React.js', level: 70 },
    { name: 'Django', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <li key={index} className="mb-3">
        <div className="d-flex align-items-center mb-1">
          <FaCheckCircle className="text-success me-2" />
          <strong>{skill.name}</strong>
        </div>
        <div className="progress-container">
          <div className="progress">
            <div
              className={`progress-bar bg-success ${inView ? 'animate-progress' : ''}`}
              style={{ width: inView ? `${skill.level}%` : '0%' }}
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              
            </div>
          </div>
        </div>
      </li>
    ));

  return (
    <section id="skills" className="container py-5" ref={sectionRef}>
      <h1 className="text-center mb-2 fw-bold">Skills</h1>
      <h5 className='text-center mb-4 fw-light fst-italic'>Languages & Frameworks I Use</h5>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3 text-center">Programming Languages</h4>
              <ul className="ps-0 list-unstyled">{renderSkills(programmingSkills)}</ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3 text-center">Frameworks & Libraries</h4>
              <ul className="ps-0 list-unstyled">{renderSkills(frameworks)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
