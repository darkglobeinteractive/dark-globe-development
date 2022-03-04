import React, { Component } from 'react';
import DGD from '../apis/darkglobedevelopment'

class App extends Component {

  componentDidMount() {

    // Grab projects from the site
    const projects = async () => {
      return await DGD.get('/wp/v2/project', {
        params: {

        }
      });
    }

    projects().then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <h1>Dark Globe Development</h1>
        <p>Coming Soon</p>
      </div>
    );
  }

}

export default App;
