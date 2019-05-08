import React from 'react';
import SkillColumn from './index';
import TechIcon from '../../components/TechIcon';
import IconRow from '../../components/IconRow';

// import html5Icon from '../../../images/web/icon-html5.svg';
import angularIcon from '../../../images/web/icon-angular.svg';
import reactIcon from '../../../images/web/icon-reactjs.svg';
import springIcon from '../../../images/web/icon-spring.svg';
import webpackIcon from '../../../images/web/icon-webpack.svg';
// import reduxIcon from '../../../images/web/icon-redux.svg';
import sassIcon from '../../../images/web/icon-sass.svg';
import SkillListItem from '../SkillList/SkillListItem';
import KW from '../../components/Keyword';
import SkillList from '../SkillList';

const WebSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Let's talk Web" {...props}>
      <IconRow>
        <TechIcon imgSrc={springIcon} altText="Spring" />
        <TechIcon imgSrc={reactIcon} altText="ReactJs" />
        {/* <TechIcon imgSrc={html5Icon} altText="HTML5" /> */}
        {/* <TechIcon imgSrc={reduxIcon} altText="Redux" /> */}
        <TechIcon imgSrc={sassIcon} altText="Sass" />
        <TechIcon imgSrc={webpackIcon} altText="Webpack" />
        <TechIcon imgSrc={angularIcon} altText="AngularJs" />
      </IconRow>
      <SkillList>
        <SkillListItem>
          Wrote, tested, and debugged <KW>Java</KW> classes for{' '}
          <KW>Spring microservices</KW>
        </SkillListItem>
        <SkillListItem>
          Built interactive <KW>React form components</KW> and integrated them
          into an existing <KW>AngularJS</KW> application
        </SkillListItem>
        <SkillListItem />
      </SkillList>
    </SkillColumn>
  );
};

export default WebSkillColumn;
