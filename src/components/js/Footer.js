import React from 'react';
import '../css/Footer.css';
import threesoftLogo from '../../images/Threesoft_New_Logo.PNG'; // byt till rätt logotyp om du har en annan

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={threesoftLogo} alt="Threesoft Logo" className="footer-logo" />
        <div className="footer-text">
         <p>
  This website was proudly developed by <a href="https://threesoft.se" target="_blank" rel="noopener noreferrer">Threesoft.se</a>
</p>
<p>
  Threesoft is a Scandinavian tech company headquartered in Sweden, working internationally to deliver smart, elegant and user-first solutions across web, mobile, and AI.
</p>
            <p>© 2025 Threesoft AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
