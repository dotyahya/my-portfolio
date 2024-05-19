import React from 'react';

const About = () => {
  return (
    <section className="py-5 contact-section" id="about">
      <div className="container">
        <h2 className="section-heading">About</h2>
        <div className="section-content row">
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>Who I Am</h3>
              <p>I am Muhammad Yahya, a passionate computer scientist with a love for coding and problem-solving.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>My Experience</h3>
              <p>Throughout my career, I have worked on numerous projects that showcase my skills and dedication to the field of computer science.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <h3>My Skills</h3>
              <p>My expertise includes a variety of programming languages and frameworks, and I am always eager to learn more and take on new challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
