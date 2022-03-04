import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

import Header from './Header';
import Filters from './Filters';
import Projects from './Projects';

class App extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div id="page">
        <Header />
        <Filters />
        <Projects />
      </div>
    );
  }

}

export default connect(null, {
  fetchProjects })(App);
