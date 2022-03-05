import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {

  // Generate projects grid
  renderProjects() {
    return this.props.projects.map((project, index) => {
      return (
        <ProjectItem key={index} project={project} />
      );
    });
  }

  render() {

    return (
      <div className="projects">
        <div className="content">
          {this.renderProjects()}
        </div>
      </div>
    );
    
  }

}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects);
