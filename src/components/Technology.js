import React from "react";

function Technology() {
  return (
    <section id="technology" className="technology">
      <h2>Technology Stack</h2>
      <p>Our platform is built with modern and scalable technologies:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>⚛️ Frontend: ReactJS</li>
        <li>🧠 Backend: NodeJS</li>
        <li>🗄️ Database: MongoDB</li>
        <li>⚙️ CI/CD: Docker & Jenkins</li>
      </ul>
    </section>
  );
}

export default Technology;