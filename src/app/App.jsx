import React, { Component } from 'react';
import { hot } from 'react-hot-loader/index';
import MyHero from './MyHero';

import SkillsSection from './SkillsSection';
import WebSkillColumn from './SkillsSection/SkillColumn/WebSkillColumn';
import DevopsSkillColumn from './SkillsSection/SkillColumn/DevopsSkillColumn';
import TestSkillColumn from './SkillsSection/SkillColumn/TestSkillColumn';
import OtherSkillColumn from './SkillsSection/SkillColumn/OtherSkillColumn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyHero />
        <SkillsSection>
          <DevopsSkillColumn />
          <WebSkillColumn />
          <TestSkillColumn className="no-border-right" />
          <OtherSkillColumn className="own-row" />
        </SkillsSection>
        {/* <br /> */}
        {/* <br /> */}
        {/* <Education /> */}
        {/* <SideProjects /> */}
        {/* <WorkExperience /> */}
      </div>
    );
  }
}

export default hot(module)(App);
