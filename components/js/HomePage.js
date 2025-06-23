import React from 'react';
import vanImage from '../../images/van.png';
import '../css/HomePage.css';
import Gallery from './Gallery';
import History from './History';
import Contact from './Contact';

function HomePage() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${vanImage})` }}>
        <div className="overlay">
          <h1>Welcome to Mazan Barbershop</h1>
          <p>Mobile barbershop – We'll come to you!</p>
          <a href="tel:0616303549" className="call-now">📞 0616 303 549</a>
        </div>
      </div>

      <section id="gallery" className="section">
        <Gallery />
      </section>

      <section id="history" className="section">
        <History />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </>
  );
}

export default HomePage;
