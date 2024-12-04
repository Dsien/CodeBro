import React from 'react'; // Import React

function ProjectCard({ src, link, h3, p }) { // Define ProjectCard component with props: src, link, h3, and p
  return (
    <a href={link} target="_blank"> {/* Anchor tag linking to the project, opens in a new tab */}
      <img className="hover" src={src} alt={`${h3} logo`} /> {/* Image with hover effect, source from src prop, alt text from h3 prop */}
      <h3>{h3}</h3> {/* Project title from h3 prop */}
      <p>{p}</p> {/* Project description from p prop */}
    </a>
  );
}

export default ProjectCard; // Export ProjectCard component as default