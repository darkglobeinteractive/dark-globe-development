import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {

  // Generate projects grid
  renderProjects() {

    return this.props.projects.map((project, index) => {
      // Note: Below, we create an object from the categories state where we make the key of each item in the object the id of the category
      if (project.active) {
        return (
          <ProjectItem key={index} project={project} cats={_.groupBy(this.props.cats, 'id')} />
        );
      } else {
        return <React.Fragment key={index} />;
      }
    });

  }

  render() {

    return (
      <div id="project-grid" className="ui stackable three column grid">
        {this.renderProjects()}
      </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    cats: state.categories
  }
}

export default connect(mapStateToProps)(Projects);
