import React from 'react';
import { connect } from 'react-redux';
import { setProjectCategory } from '../actions';

// We are destructuring the props object here
const ProjectItem = ({ project, cats, setProjectCategory, thumbnail, ia_url }) => {

  // Cycle through each category associated with the project
  const renderedCats = project.category_ids.map((cat, index) => {

    // Create a variable of the category from the {cats} prop
    const this_category = cats[cat][0];

    // Return a category item, clicking the category calls the setProjectCategory() action creator
    return (
      <button key={index} className="ui button tiny" onClick={() => setProjectCategory(this_category.id)}>{this_category.title}</button>
    );

  });

  const renderThumb = thumbnail.map((img, index) => {
    return <img key={index} src={img.url} />
  });

  const renderIA = ia_url.map((ia, index) => {
    return <a key={index} className="fluid ui button cta" href={ia.url} target="_blank">View Project Planning</a>
  });

  return (
    <div className="column project-item">
      <div className="ui segment">
        <div className="ui bordered rounded image thumbnail">
          {renderThumb}
        </div>
        <h2 className="title">{project.title}</h2>
        <div className="cats">
          {renderedCats}
        </div>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{__html: project.excerpt}} />
        {project.project_link &&
          <a className="fluid ui button cta" href={project.project_link} target="_blank">View Project</a>
        }
        {project.project_source &&
          <a className="fluid ui button cta" href={project.project_source} target="_blank">View Source (GitHub)</a>
        }
        {renderIA}
      </div>
    </div>
  );

}

const mapStateToProps = (state, ownProps) => {
  return {
    thumbnail: state.images.filter(img => img.project_id === ownProps.project.id),
    ia_url: state.media.filter(item => item.project_id === ownProps.project.id)
  }
}

export default connect(mapStateToProps, {
  setProjectCategory
})(ProjectItem);
