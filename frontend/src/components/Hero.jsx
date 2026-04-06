import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src="/images/hero.jpg" alt="Luxury Bistro Interior" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="hero-subtitle animate-fade-in">A Taste of the Himalayas</span>
        <h1 className="hero-title animate-fade-in delay-100">Elevated Nepalese Cuisine</h1>
        <div className="hero-actions animate-fade-in delay-200">
          <a href="#reservations" className="btn-primary">Book a Table</a>
          <a href="#menu" className="btn-outline">View Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
