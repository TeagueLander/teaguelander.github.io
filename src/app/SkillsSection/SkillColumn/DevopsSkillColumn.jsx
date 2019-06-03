import React from 'react';
import IconRow from '../../components/IconRow';
import TechIcon from '../../components/TechIcon';
import SkillColumn from './index';
import SkillList from '../SkillList';
import SkillListItem from '../SkillList/SkillListItem';
import KW from '../../components/Keyword';

import dockerIcon from '../../../images/tools/icon-docker-no-words.svg';
import jenkinsIcon from '../../../images/tools/icon-jenkins.svg';
import mavenIcon from '../../../images/tools/icon-maven-justm.svg';
import gitIcon from '../../../images/tools/icon-git.svg';
import npmIcon from '../../../images/tools/icon-npm.svg';

const DevopsSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Let's talk DevOps" {...props}>
      <IconRow>
        {/* <TechIcon imgSrc={redhatIcon} altText="Red Hat" paddingSides={0.1} /> */}
        <TechIcon imgSrc={mavenIcon} altText="Maven" />
        <TechIcon imgSrc={dockerIcon} altText="Docker" />
        <TechIcon imgSrc={jenkinsIcon} altText="Jenkins" />
        <TechIcon imgSrc={gitIcon} altText="Git" paddingSides={0.1} />
        <TechIcon imgSrc={npmIcon} altText="npm" />
      </IconRow>
      <SkillList>
        <SkillListItem>
          Setup <KW>Maven</KW> phases to compile <KW>Java</KW> projects, package
          .rpm files, and build <KW>Docker</KW> images
        </SkillListItem>
        <SkillListItem>
          Wrote <KW>dockerfiles</KW> and configured <KW>docker-compose</KW>{' '}
          files in order to spin up complex environments across{' '}
          <KW>Docker swarms</KW>
        </SkillListItem>
        <SkillListItem>
          Built a <KW>Jenkins pipeline</KW> carried a project through
          compilation, packaging, deployment, and multi-round testing
        </SkillListItem>
        <SkillListItem>
          Managed <KW>Gitflow</KW>-style feature branches using <KW>GitHub</KW>{' '}
          and <KW>Bitbucket</KW>
        </SkillListItem>
        {/* <SkillListItem>
          Setup web development/production configurations and managed
          dependecies using <KW>npm</KW>
        </SkillListItem> */}
      </SkillList>
    </SkillColumn>
  );
};

export default DevopsSkillColumn;
