import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/my-portfolio" element={
          <div>
            <Element name="home">
              <Home />
            </Element>
            <Element name="about">
              <About />
            </Element>
            <Element name="services">
              <Services />
            </Element>
            <Element name="portfolio">
              <Portfolio />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
            <Element name="footer">
              <Footer />
            </Element>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
