import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Connect with Us</h3>
                <div className="footer-section">
                    <p>123 Street, Cityville, Country</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Email: info@example.com</p>
                    
                </div>
              <div className="social-media-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
  
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates and promotions.</p>
              <form>
                <input type="email" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;