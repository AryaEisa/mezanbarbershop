import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or want to book a visit?</p>

      <div className="contact-info">
        <p><strong>📞 Phone:</strong> <a href="tel:0616303549">0616 303 549</a></p>
        <p>
          <strong>💈 Facebook:</strong>{' '}
          <a
            href="https://www.facebook.com/profile.php?id=100089789767549"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our Facebook page
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
