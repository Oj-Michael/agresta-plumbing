import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import aprestaLogo from '../../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={aprestaLogo} alt="Agresta Plumbing" className="header__logo-img" />
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`header__nav-link ${isActive(item.href) ? 'header__nav-link--active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#" className="header__phone">
            Call Now
          </a>
          <button 
            className="header__mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
