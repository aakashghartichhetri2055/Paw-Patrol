import React from 'react';
import './Footer.css';

const Footer = () => {
  // Generate random social media links
  const socialMediaLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/example' },
    { name: 'Twitter', url: 'https://www.twitter.com/example' },
    { name: 'Instagram', url: 'https://www.instagram.com/example' }
  ];

  return (
    <footer>
      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
      {/* Social Media Links */}
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Copyright Information */}
      <div className="copyright">
        <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
