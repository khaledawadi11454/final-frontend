import React from 'react';
import './newsletter.css'; // Import the CSS file

function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest trends, news, and offers in the WordPress community.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
