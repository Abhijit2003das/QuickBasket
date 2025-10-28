import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h2>Same Quality, Less Price – Delivered in 10 Minutes</h2>
      <p>Choose your favorite shop, compare ratings, and get your order faster than ever.</p>
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          color: "#0ea5e9",
          padding: "12px 30px",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

export default Hero;