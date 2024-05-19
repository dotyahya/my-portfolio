import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-5 contact-section" id="portfolio">
    <div className="container">
      <h2 className="section-heading">Portfolio</h2>
        <div className="section-content row">
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Project 1</h3>
              <p>Description of the first project. Highlight key features, technologies used, and the outcome.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Project 2</h3>
              <p>Description of the second project. Highlight key features, technologies used, and the outcome.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Project 3</h3>
              <p>Description of the third project. Highlight key features, technologies used, and the outcome.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
