import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions';

import Header from './Header';
import Filters from './Filters';
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
        <Filters />
        <Projects />
      </div>
    );
  }

}

export default connect(null, { fetchAll })(App);
