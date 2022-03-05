import React from 'react';

const ProjectItem = ({ project, cats }) => {

  // Cycle through each category associated with the project
  const renderedCats = project.category_ids.map((cat, index) => {

    // Create a variable of the category from the {cats} prop
    const this_category = cats[cat][0];

    // Return a category items
    return (
      <a key={index} href="#" className="cat">{this_category.title}</a>
    );

  });

  return (
    <div className="project-item">
      <div className="wrap">
        <h2 className="title">{project.title}</h2>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{__html: project.excerpt}} />
        <div className="cats">
          {renderedCats}
        </div>
      </div>
    </div>
  );

}

export default ProjectItem;
