import React from 'react';

const Services = () => {
  return (
    <section className="py-5 contact-section" id="services">
      <div className="container">
        <h2 className="section-heading">Services</h2>
        <div className="section-content row">
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Web Development</h3>
              <p>I offer professional web development services, creating responsive and user-friendly websites tailored to your needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Software Engineering</h3>
              <p>With a strong foundation in software engineering principles, I can develop efficient and reliable software solutions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Data Analysis</h3>
              <p>I provide data analysis services to help you make informed decisions based on data-driven insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
