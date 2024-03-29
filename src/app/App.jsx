import React, { Component } from 'react';
import MyHero from './MyHero';

import WebSkillColumn from './SkillsSection/SkillColumn/WebSkillColumn';
import DevopsSkillColumn from './SkillsSection/SkillColumn/DevopsSkillColumn';
import TestSkillColumn from './SkillsSection/SkillColumn/TestSkillColumn';
import OtherSkillColumn from './SkillsSection/SkillColumn/OtherSkillColumn';
import ResumeSection from './components/ResumeSection';

import TeagueSection from './components/TeagueSection';
import KW, { KeywordAnchor as KWA } from './components/Keyword';

import uvicLogo from '../images/education/uvic-cropped.svg';
import perfectCastLogo from '../images/projects/icon-perfectcast.svg';
import fastLootLogo from '../images/projects/icon-skyrim.svg';
import iconJea from '../images/work/icon-jea.png';
import iconMfa from '../images/work/icon-mfa.jpg';

import dateFormatter from './utils/dateFormatter';

import FloatingContact from './FloatingContact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const linkPerfectCastGithub = 'https://github.com/TeagueLander/PerfectCast';

    const linkFastLootGithub = 'https://github.com/TeagueLander/FastLoot';
    const linkFastLootNexusMods = 'https://www.nexusmods.com/skyrim/mods/72157';

    const classOfFirstThreeSkillColumns = 'is-4';

    return (
      <React.Fragment>
        <MyHero />
        <ResumeSection title="Skills" className="skills box-divided">
          <DevopsSkillColumn className={`${classOfFirstThreeSkillColumns}`} />
          <TestSkillColumn className={`${classOfFirstThreeSkillColumns}`} />
          <WebSkillColumn className={`no-border-right ${classOfFirstThreeSkillColumns}`} />
          <OtherSkillColumn className="own-row" />
        </ResumeSection>

        <br className="only-show-print" />

        {/* Work History */}
        <ResumeSection title="Work History" className="work-history">
          <TeagueSection
            title="Programmer/Analyst"
            subtitles={[
              'Municipal Finance Authority of BC (MFABC)',
              dateFormatter.buildDateRangeString(
                  new Date('October 2019'),
                  'Present',
              ),
            ]}
            imgSrc={iconMfa}
          >
            <ul>
              <li>
                Setup <KW>AWS Accounts</KW> and leveraged cloud services
                for backup, logging, compute, CI/CD, security, networking,
                and identity management
              </li>
              <li>
                Automated <KW>Linux</KW> environment setup and key processes
                using <KW>Ansible Playbooks</KW>
              </li>
              <li>
                Setup <KW>Github Actions</KW> to build applications
                using <KW>Gradle</KW> and <KW>Ant</KW>, to streamline
                the release process
              </li>
              <li>
                Implemented, developed, and deployed new features and modules
                for a financial management system
                using <KW>Java</KW>, <KW>Postgres</KW>, and <KW>React</KW>
              </li>
            </ul>
          </TeagueSection>
          
          <TeagueSection
            title="Developer"
            subtitles={[
              'James Evans and Associates (JEA)',
              dateFormatter.buildDateRangeString(
                new Date('July 2016'),
                new Date('October 2019'),
              ),
            ]}
            imgSrc={iconJea}
          >
            <ul>
              <li>
                Setup a streamlined <KW>development pipeline</KW> that included{' '}
                <KW>build management</KW>, <KW>testing</KW>, and{' '}
                <KW>deployment</KW>
              </li>
              <li>
                Developed <KW>RESTful APIs</KW> using <KW>Spring Boot</KW>, and
                built web applications and components in <KW>React</KW> and{' '}
                <KW>AngularJS</KW>
              </li>
              <li>
                Used <KW>JIRA</KW> to track development tasks and issues; used{' '}
                <KW>Git</KW> and <KW>Subversion</KW> for source control
              </li>
              <li>
                <KW>Deployed</KW> and upgraded services on client environments
              </li>
              <li>
                <KW>Researched</KW> and <KW>documented</KW> new technologies
              </li>
            </ul>
          </TeagueSection>
        </ResumeSection>

        {/* EDUCATION */}
        <ResumeSection title="Education" className="education">
          <TeagueSection
            title="University of Victoria"
            subtitles={[
              'B.Sc., Computer Science (Computer Communication and Networks Option)',
              'Graduated April 2018',
            ]}
            imgSrc={uvicLogo}
          />
        </ResumeSection>

        {/* SIDE PROJECTS */}
        <ResumeSection title="Side Projects" className="side-projects">
          <TeagueSection title="PerfectCast" imgSrc={perfectCastLogo} hasList>
            <ul>
              <li>
                Podcast application developed natively for <KW>Android</KW>{' '}
                using <KW>Java</KW> and <KW>Android Studio</KW>
              </li>
              <li>
                Implemented a <KW>SQLite</KW> database, a <KW>REST</KW> endpoint
                using Volley, and parsers for the iTunes API and podcast feed
                formats
              </li>
              <li className="is-hidden-print">
                Check it out on <KWA href={linkPerfectCastGithub}>Github</KWA>
              </li>
              <li className="only-show-print">
                Can be found on <KW>Github</KW>
              </li>
            </ul>
          </TeagueSection>
          <TeagueSection title="FastLoot" imgSrc={fastLootLogo} hasList>
            <ul>
              <li>
                Plugin for the video game Skyrim which overhauls the <KW>UI</KW>{' '}
                of the game's looting system
              </li>
              <li>
                Implemented using <KW>object-oriented</KW> and{' '}
                <KW>event-driven</KW> programming techniques
              </li>
              <li className="is-hidden-print">
                Check it out on <KWA href={linkFastLootGithub}>Github</KWA> and{' '}
                <KWA href={linkFastLootNexusMods}>Nexus Mods</KWA>
              </li>
              <li className="only-show-print">
                Can be found on <KW>Github</KW> and <KW>Nexus Mods</KW>
              </li>
            </ul>
          </TeagueSection>
        </ResumeSection>

        <FloatingContact />
      </React.Fragment>
    );
  }
}

export default App;
