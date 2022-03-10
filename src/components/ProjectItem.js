import React from 'react';
import { connect } from 'react-redux';
import { setProjectCategory } from '../actions';

const ProjectItem = ({ project, cats, setProjectCategory, thumbnail }) => {

  // Cycle through each category associated with the project
  const renderedCats = project.category_ids.map((cat, index) => {

    // Create a variable of the category from the {cats} prop
    const this_category = cats[cat][0];

    // Return a category item
    return (
      <button key={index} className="ui button tiny" onClick={() => setProjectCategory(this_category.id)}>{this_category.title}</button>
    );

  });

  const renderThumb = thumbnail.map((img, index) => {
    return <img key={index} src={img.image} />
  });

  return (
    <div className="column project-item">
      <div className="ui segment">
        <div className="ui bordered rounded image thumbnail">
          {renderThumb}
        </div>
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

const mapStateToProps = (state, ownProps) => {
  return {
    thumbnail: state.images.filter(img => img.project_id === ownProps.project.id)
  }
}

export default connect(mapStateToProps, {
  setProjectCategory
})(ProjectItem);
