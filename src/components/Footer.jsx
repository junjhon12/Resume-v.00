import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3>READY_TO_CONNECT?</h3>
        <p>Drop a signal. I am currently open for work.</p>
        
        <div className="social-links">
          {/* Replace '#' with your real links later */}
          <a href="https://github.com/junjhon12" className="link-btn">GITHUB</a>
          <a href="https://www.linkedin.com/in/quoc-bao-le-8669b9177/" className="link-btn">LINKEDIN</a>
          <a href="mailto:q.le102100@gmail.com" className="link-btn">EMAIL</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} // BUILT_WITH_REACT
        </p>
      </div>
    </footer>
  );
};

export default Footer;