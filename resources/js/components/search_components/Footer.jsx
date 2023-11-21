import React, { useState } from 'react';
import './Footer.scss';
import axios from 'axios';

const Footer = () => {
  const [message, setMessage] = useState(null);
  const [ mail, setMail ] = useState(null);

  const handleInputChange = (e) => {
        setMail({
            [e.target.name]: e.target.value,
        });
    };

  const sendData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/email-to-newsletter', mail);
            setMessage(response.data["message"]);
        } catch (error) {
            console.log(error);
        }
    };

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
              { message 
              ?
              <p>{message}</p>
              :
              <p>Subscribe to our newsletter for updates and promotions.</p>
              }
              <form onSubmit={sendData}>
                <input name="email" type="email" onChange={handleInputChange} placeholder="Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;