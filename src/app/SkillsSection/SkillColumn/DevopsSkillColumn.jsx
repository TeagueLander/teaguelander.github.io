import React from 'react';
import IconRow from '../../components/IconRow';
import TechIcon from '../../components/TechIcon';
import SkillColumn from './index';
import SkillList from '../SkillList';
import SkillListItem from '../SkillList/SkillListItem';

import dockerIcon from '../../../images/tools/icon-docker-flat.svg';
import jenkinsIcon from '../../../images/tools/icon-jenkins.svg';
import mavenIcon from '../../../images/tools/icon-maven-justm.svg';
import gitIcon from '../../../images/tools/icon-git.svg';

const DevopsSkillColumn = () => {
  return (
    <SkillColumn title="Let's talk DevOps">
      <IconRow>
        {/* <TechIcon imgSrc={redhatIcon} altText="Red Hat" paddingSides={0.1} /> */}
        <TechIcon imgSrc={gitIcon} altText="Git" paddingSides={0.1} />
        <TechIcon imgSrc={mavenIcon} altText="Maven" />
        <TechIcon imgSrc={dockerIcon} altText="Docker" />
        <TechIcon imgSrc={jenkinsIcon} altText="Jenkins" />
      </IconRow>
      <SkillList>
        <SkillListItem>Setup maven</SkillListItem>
      </SkillList>
    </SkillColumn>
  );
};

export default DevopsSkillColumn;
