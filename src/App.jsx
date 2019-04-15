import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import MyDetails from './MyDetails/MyDetails';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';
import SideProjects from './SideProjects/SideProjects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyDetails />
        <br />
        <br />
        <Education />
        <SideProjects />
        <WorkExperience />
      </div>
    );
  }
}

export default hot(module)(App);
