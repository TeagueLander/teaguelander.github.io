import React, { Component } from 'react';
import { hot } from 'react-hot-loader/index';
import MyHero from './MyHero/MyHero';
import WorkExperience from './Resume/WorkExperience/WorkExperience';
import Education from './Resume/Education/Education';
import SideProjects from './Resume/SideProjects/SideProjects';
import SkillsSection from './Skills/SkillsSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyHero />
        <SkillsSection />
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
