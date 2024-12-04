import React from 'react'; // Import React
import Projects from '../Projects/Projects'; // Import Projects component

const Portfolio = () => {
  return (
    <div> {/* Container div for the portfolio */}
      <h1>Portfolio</h1> {/* Portfolio title */}
      <p>Here are some of my projects:</p> {/* Introductory text */}
      <Projects /> {/* Render the Projects component */}
    </div>
  );
};

export default Portfolio; // Export Portfolio component as default