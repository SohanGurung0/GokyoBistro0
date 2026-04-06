import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackMenu = [
    { id: 1, name: "Everest Momo", description: "Authentic steamed chicken dumplings.", price: 12.99, imageUrl: "/images/momo.jpg" },
    { id: 2, name: "Dal Bhat Tarkari", description: "Traditional Nepali staple with lentils.", price: 18.99, imageUrl: "/images/dalbhat.jpg" },
    { id: 3, name: "Sherpa Stew (Thukpa)", description: "Hearty Tibetan-style noodle soup.", price: 14.50, imageUrl: "/images/thukpa.jpg" }
  ];

  useEffect(() => {
    fetch('http://localhost:8080/api/menu')
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch menu from backend, using fallback:", err);
        setMenuItems(fallbackMenu);
        setLoading(false);
      });
  }, []);

  return (
    <section className="menu-section" id="menu">
      <h2 className="section-title">Culinary Journey</h2>
      
      {loading ? (
        <p style={{textAlign: 'center', color: 'var(--text-muted)'}}>Loading menu...</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className={`menu-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`} key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="menu-image" onError={(e) => { e.target.src = '/images/momo.jpg'; }} />
              <div className="menu-content">
                <div className="menu-header">
                  <h3 className="dish-name">{item.name}</h3>
                  <span className="dish-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="dish-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
