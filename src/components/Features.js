import React from "react";

function Features() {
  return (
    <section id="features" className="features">
      <div className="feature-card">
        <h3>For Customers</h3>
        <ul>
          <li>Any order delivered within 10 minutes</li>
          <li>Choose shops as per your preference</li>
          <li>Shop rating system for better decisions</li>
        </ul>
      </div>
      <div className="feature-card">
        <h3>For Shop Owners</h3>
        <ul>
          <li>Access to a wide range of customers</li>
          <li>Subscription-based model, not commission</li>
          <li>Boost visibility with customer ratings</li>
        </ul>
      </div>
    </section>
  );
}

export default Features;