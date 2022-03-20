import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions';

import Header from './Header';
import './App.css';
import CategoryCloud from './CategoryCloud';
import Projects from './Projects';
import Spinner from './Spinner';

class App extends Component {

  // On application mounting call the fetchAll() action creator to populate the state object
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {

    // Load the Spinner component until state.projects and state.categories have been populated
    if (this.props.projects.length === 0 || this.props.cats.length === 0) {
      return (
        <Spinner message="Fetching Projects" />
      );
    }
    return (
      <div id="page" className="ui container">
        <Header />
        <CategoryCloud />
        <Projects />
      </div>
    );
  }

}

// Get projects and categories for conditionally loading components
const mapStateToProps = state => {
  return {
    projects: state.projects,
    cats: state.categories
  }
}

export default connect(mapStateToProps, { fetchAll })(App);
