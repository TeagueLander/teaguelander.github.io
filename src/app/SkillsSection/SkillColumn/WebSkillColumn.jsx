import React from 'react';
import SkillColumn from './index';
import TechIcon from '../../components/TechIcon';
import IconRow from '../../components/IconRow';

import html5Icon from '../../../images/web/icon-html5.svg';
import angularIcon from '../../../images/web/icon-angular.svg';
import reactIcon from '../../../images/web/icon-reactjs.svg';
import springIcon from '../../../images/web/icon-spring.svg';
import webpackIcon from '../../../images/web/icon-webpack.svg';

const WebSkillColumn = () => {
  return (
    <SkillColumn title="Let's talk Web">
      <IconRow>
        <TechIcon imgSrc={springIcon} altText="Spring" />
        <TechIcon imgSrc={reactIcon} altText="ReactJs" />
        <TechIcon imgSrc={html5Icon} altText="HTML5" />
        <TechIcon imgSrc={webpackIcon} altText="Webpack" />
        <TechIcon imgSrc={angularIcon} altText="AngularJs" />
      </IconRow>
    </SkillColumn>
  );
};

export default WebSkillColumn;
