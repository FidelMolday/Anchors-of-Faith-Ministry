import React from 'react';
import './links.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Links = () => {
  const resources = [
    {
      id: 1,
      title: 'Sabbath School Quarterly',
      description: "Tap to read this week's lesson.",
      route: 'https://www.sabbath.school/',
      external: true,
    },
    {
      id: 2,
      title: 'HCK Live',
      description: 'Watch Hope Channel Kenya Live.',
      route: 'https://hck.co.ke/watch/',
      external: true,
    },
    {
      id: 3,
      title: 'Adventist News',
      description: 'Get the latest Adventist news.',
      route: 'https://am.adventistmission.org/news',
      external: true,
    },
  ];

  return (
    <div className="pricing-container" style={{ paddingBottom: '60px' }}>
      <div className="pricing-header text-center">
        <h2>Links</h2>
        <p>Access Adventist resources instantly.</p>
      </div>

      <div className="pricing-row">
        {resources.map((resource) => (
          <div key={resource.id} className="pricing-card-wrapper">
            <div className="card pricing-card">
              <div className="card-body text-center">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">{resource.description}</p>

                {resource.external ? (
                  <a
                    href={resource.route}
                    target=""
                    rel="noopener noreferrer"
                    className="pricing-link border-link mt-2"
                  >
                    Visit
                  </a>
                ) : (
                  <Link
                    to={resource.route}
                    className="pricing-link border-link mt-2"
                  >
                    Visit
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Links;
