import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div className="wrap">
        <h2 className="title">{project.title}</h2>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{__html: project.excerpt}} />
      </div>
    </div>
  );
}

export default ProjectItem;
