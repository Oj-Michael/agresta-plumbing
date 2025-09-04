import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agrestaLogo from '../../assets/images/agresta-logo.jpg';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Cities We Serve', href: '/cities' }
  ];


  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Left Column - Branding */}
          <div className="footer__section footer__section--branding">
            <div className="footer__logo">
              <img src={agrestaLogo} alt="Agresta Plumbing" className="footer__logo-img" />
            </div>
          </div>

          {/* Middle Column - Useful Links */}
          <div className="footer__section">
            <h3 className="footer__heading">Useful Links</h3>
            <ul className="footer__links">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div className="footer__section">
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span>Available 24/7</span>
              </div>
              <div className="footer__contact-item">
                <span>Southern Ontario</span>
              </div>
              <div className="footer__contact-item">
                <span>(905) 902-0121</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p>&copy; 2025 Agresta Plumbing. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="footer__scroll-icon">↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
