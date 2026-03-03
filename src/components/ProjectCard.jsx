import React from 'react';
import './ProjectCard.css'; // We will create this style next

// This component acts like a template. 
// It accepts 'props' (inputs) so we can fill it with different info later.
const ProjectCard = ({ title, description, image, link, download }) => {
  return (
    <div className="card">
      {/* The Image Area */}
      <img src={image} alt={title} className="card-image" />
      
      {/* The Text Area */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* The Button */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>VIEW_PROJECT</button>
        </a>
        <a href={download} target="_blank" rel="noopener noreferrer">
          <button>DOWNLOAD_PROJECT</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;