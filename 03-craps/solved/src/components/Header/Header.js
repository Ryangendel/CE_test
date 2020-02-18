import React from "react";
// import "./style.css";

// Component for the Navbar

function Header(props) {
    
  return (
    <nav className="navbar">
          <h1>Winner's Name: {props.userName}</h1>
          <h1>Dollars to bet: {props.userMoney}</h1>
    </nav>
  );
}

export default Header;

