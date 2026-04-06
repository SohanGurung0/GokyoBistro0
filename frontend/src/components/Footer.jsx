import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Gokyo Bistro</div>
      <p className="footer-text">© {new Date().getFullYear()} Gokyo Bistro. Elevating Himalayan Cuisine.</p>
    </footer>
  );
};

export default Footer;
