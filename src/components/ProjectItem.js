import React from 'react';
import { connect } from 'react-redux';
import { setProjectCategory } from '../actions';

const ProjectItem = ({ project, cats, setProjectCategory }) => {

  // Cycle through each category associated with the project
  const renderedCats = project.category_ids.map((cat, index) => {

    // Create a variable of the category from the {cats} prop
    const this_category = cats[cat][0];

    // Return a category item
    return (
      <button key={index} className="ui button tiny" onClick={() => setProjectCategory(this_category.id)}>{this_category.title}</button>
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

export default connect(null, {
  setProjectCategory
})(ProjectItem);
