import React from "react";

function Header() {
  return (
    <header>
      <h1>SwiftCart</h1>
      <nav>
        <a href="#features" style={{ color: "white", marginRight: 20 }}>
          Features
        </a>
        <a href="#technology" style={{ color: "white", marginRight: 20 }}>
          Technology
        </a>
        <a href="#objective" style={{ color: "white" }}>
          Objective
        </a>
      </nav>
    </header>
  );
}

export default Header;