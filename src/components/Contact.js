import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="py-5 contact-section" id="contact">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <p className="text-center mb-5">Feel free to reach out to me via the following platforms:</p>
        <div className="section-content row mb-5">
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p><a href="mailto:your-email@example.com" className="contact-link">yahyaaanaeem@gmail.com</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <p><a href="https://www.linkedin.com/in/myahyanaeem/" className="contact-link">linkedin.com/in/myahyanaeem</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-4">
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              <p><a href="https://github.com/dotyahya" className="contact-link">github.com/dotyahya</a></p>
            </div>
          </div>
        </div>
        {/* <form>
          <label className="w-100">
            Name:
            <input type="text" name="name" className="form-control custom-input" />
          </label>
          <label className="w-100 mt-3">
            Email:
            <input type="email" name="email" className="form-control custom-input" />
          </label>
          <label className="w-100 mt-3">
            Message:
            <textarea name="message" className="form-control custom-input"></textarea>
          </label>
          <button type="submit" className="btn btn-primary mt-3 custom-button">Send</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
