import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Neem Contact Op</h2>

      <p className="slogan">“Geen tijd om naar de kapper te gaan? Geen stress, bro!”</p>
      <p className="locations">📍 Je vindt ons op vaste plekken in <strong>[vul jouw steden in]</strong></p>
      <p className="whatsapp">📱 Boek direct via WhatsApp: <a href="https://wa.me/31616303549" target="_blank" rel="noopener noreferrer">0616 303 549</a></p>

      <div className="contact-info">
        <p><strong>📞 Telefoon:</strong> <a href="tel:0616303549">0616 303 549</a></p>

        <p><strong>💈 Facebook:</strong>{' '}
          <a
            href="https://www.facebook.com/profile.php?id=100089789767549"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bekijk onze Facebookpagina
          </a>
        </p>

        <p>✂️ Mazen Mobiele Barbershop komt gewoon naar jou toe!</p>
        <p>🚐 Of je nou thuis bent, op werk, of op school – wij rijden, jij relaxet.</p>
      </div>
    </div>
  );
}

export default Contact;
