import React, { useEffect, useRef, useState } from 'react';
import './Certifications.css';
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const certifications = [
  {
    id: 1,
    title: 'Python Web Development',
    provider: 'Cognifyz',
    date: 'Dec 2024',
    link: 'https://www.linkedin.com/posts/venukumar-gundaboina-8509722a6_internship-completion-certificate-activity-7292172673462218752-RryC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnTVTwBgSLQZsKbl5chSooOw78A-E654-o'
  },
  {
    id: 2,
    title: 'SQL (Basic)',
    provider: 'HackerRank',
    date: 'Jan 2025',
    link: 'https://www.hackerrank.com/certificates/iframe/71375f5ad994'
  },
  {
    id: 3,
    title: 'Python (Basic)',
    provider: 'HackerRank',
    date: 'Jan 2025',
    link: 'https://www.hackerrank.com/certificates/901afc029022'
  },

];

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  
  return (
    <section id="certifications" className="container py-5">
      <h1 className="text-center fw-bold mb-2">Certifications</h1>
      <h5 className='text-center mb-4 fw-light fst-italic'>Where Learning Meets Recognition</h5>
      <div className="row">
        {certifications.map((cert, index) => (
          <div
            className={`col-md-6 col-lg-4 mb-4 fade-in-up ${visibleCards.includes(index) ? 'visible' : ''}`}
            key={cert.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card h-100 shadow-sm border-1 rounded-3">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cert.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{cert.provider}</h6>
                <p className="card-text">Issued: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-4 px-0 border-1 rounded-3"
                >
                  View Certificate<LiaExternalLinkSquareAltSolid size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
