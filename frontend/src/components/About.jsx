import React, { useState, useMemo } from 'react';

const About = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Sarah L.", rating: 5, comment: "Absolutely incredible Dal Bhat. The ambiance is top notch!" },
    { id: 2, name: "Michael R.", rating: 4, comment: "Great food, slightly loud atmosphere. Will return." },
    { id: 3, name: "Anita K.", rating: 5, comment: "Authentic Himalayan flavors in a luxurious setting." }
  ]);

  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, rev) => sum + rev.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;
    
    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: Number(formData.rating),
      comment: formData.comment
    };
    
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', rating: 5, comment: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <span key={idx} className={idx < rating ? "star filled" : "star"}>★</span>
    ));
  };

  return (
    <section className="about-section" id="about">
      <div className="about-content glass-panel">
        <h2 className="section-title">About Gokyo Bistro</h2>
        <p className="about-desc">
          Inspired by the serene Gokyo Lakes of the Himalayas, our bistro brings you an elevated dining experience. We fuse traditional Nepalese and Tibetan recipes with contemporary culinary techniques, wrapped in a luxurious, moody ambiance that transports you straight to the mountains.
        </p>
        
        <div className="reviews-container">
          <div className="reviews-header">
            <h3>Customer Reviews</h3>
            <div className="avg-rating">
              <span className="rating-number">{avgRating}</span>
              <span className="rating-stars">{renderStars(Math.round(avgRating))}</span>
              <span className="rating-count">({reviews.length} reviews)</span>
            </div>
          </div>
          
          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review.id} className="review-card glass-panel">
                <div className="review-header">
                  <strong>{review.name}</strong>
                  <div className="review-stars">{renderStars(review.rating)}</div>
                </div>
                <p className="review-text">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-form-container glass-panel">
          <h3>Leave a Review</h3>
          {submitted ? (
            <p className="success-msg">Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <select 
                  value={formData.rating} 
                  onChange={(e) => setFormData({...formData, rating: e.target.value})}
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Average</option>
                  <option value="2">2 Stars - Poor</option>
                  <option value="1">1 Star - Terrible</option>
                </select>
              </div>
              <div className="form-group">
                <label>Comment</label>
                <textarea 
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  required 
                  placeholder="Tell us about your experience..."
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Submit Review</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
