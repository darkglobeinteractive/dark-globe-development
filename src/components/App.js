import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions';

import Header from './Header';
import CategoryCloud from './CategoryCloud';
import Projects from './Projects';

class App extends Component {

  componentDidMount() {

    // Call the primary fetchAll action creator to populate projects state
    this.props.fetchAll();

  }

  render() {
    return (
      <div id="page">
        <Header />
        <CategoryCloud />
        <Projects />
      </div>
    );
  }

}

export default connect(null, { fetchAll })(App);
