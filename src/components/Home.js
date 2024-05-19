import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Yahya 👋🏼</h1>
        <h3>Computer Scientist</h3>
        <p className="lead">🚧 Exciting stuff is happening behind the scenes! I'm putting in the hours to make my personal portfolio look awesome. It's going to be a showcase of all my skills and projects. I'm really pumped to share it with you! Stay tuned for the big reveal—I promise it's going to be worth the wait! 🚀✨</p>
        <div className="btn-box mt-4">
          <a href="#" className="mx-2">Hire Me</a>
          <a href="#" className="mx-2">Let's Connect</a>
        </div>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/myahyanaeem/" className="mx-2"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/dotyahya" className="mx-2"><i className='bx bxl-github'></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
