import React from 'react';
import '../css/HomePage.css';
import Gallery from './Gallery';
import Contact from './Contact';

function HomePage() {
  return (
    <>
      <div className="home">
        <div className="overlay">
          <div className="text-box">
            <h1>💈 Geen tijd om naar de kapper te gaan? Geen stress, bro!</h1>
            <ul>
              <li>✂️ Mazen Mobiele Barbershop komt gewoon naar jou toe!</li>
              <li>🚐 Of je nou thuis bent, op werk, op school – wij rijden, jij relaxet.</li>
            </ul>
            <h2>Strakke fades?</h2>
            <h3>Baard weer in model?</h3>
            <h3>Kids ook knippen?</h3>

            <a href="tel:0616303549" className="call-now" aria-label="Ring Mazen direkt">
              📞 0616 303 549
            </a>
          </div>
        </div>
      </div>

      <section id="gallery" className="section">
        <Gallery />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </>
  );
}

export default HomePage;
