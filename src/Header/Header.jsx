import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import './Header.css'; // Import CSS for styling the header

const Header = () => {
  return (
    <header className="header"> {/* Header section with class name for styling */}
      <nav> {/* Navigation bar */}
        <ul> {/* Unordered list for navigation links */}
          <li><Link to="/">Home</Link></li> {/* Link to Home page */}
          <li><Link to="/portfolio">Portfolio</Link></li> {/* Link to Portfolio page */}
          <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
          <li><Link to="/resume">Resume</Link></li> {/* Link to Resume page */}
          <li><Link to="/about">About Me</Link></li> {/* Link to About Me page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Export Header component as default
