import React from 'react';
import SkillColumn from './index';
import TechIcon from '../../components/TechIcon';
import IconRow from '../../components/IconRow';

// import html5Icon from '../../../images/web/icon-html5.svg';
import javaIcon from '../../../images/tools/icon-java.svg';
import angularIcon from '../../../images/web/icon-angular.svg';
import reactIcon from '../../../images/web/icon-reactjs.svg';
import springIcon from '../../../images/web/icon-spring.svg';
import webpackIcon from '../../../images/web/icon-webpack.svg';
import reduxIcon from '../../../images/web/icon-redux.svg';
import sassIcon from '../../../images/web/icon-sass.svg';
import wordpressIcon from '../../../images/tools/icon-wordpress.svg';

import SkillListItem from '../SkillList/SkillListItem';
import KW from '../../components/Keyword';
import SkillList from '../SkillList';

const WebSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Let's talk Web" {...props}>
      <IconRow>
        <TechIcon imgSrc={javaIcon} altText="Java" paddingSides={0.4} />
        <TechIcon imgSrc={springIcon} altText="Spring" />
        <TechIcon imgSrc={webpackIcon} altText="Webpack" />
        {/* <TechIcon imgSrc={html5Icon} altText="HTML5" /> */}
        <TechIcon imgSrc={sassIcon} altText="Sass" />
        <TechIcon imgSrc={reactIcon} altText="ReactJs" />
        {/*<TechIcon imgSrc={reduxIcon} altText="Redux" />*/}
        {/*<TechIcon imgSrc={angularIcon} altText="AngularJs" />*/}
        <TechIcon imgSrc={wordpressIcon} altText="WordPress" />
      </IconRow>
      <SkillList>
        <SkillListItem>
          Wrote, tested, and debugged the data integration and web layers of{' '}
          <KW>Java</KW> and <KW>Spring</KW> applications
        </SkillListItem>
        <SkillListItem>
          Bundled multi-package web projects using <KW>Webpack</KW> and{' '}
          <KW>Babel</KW>
        </SkillListItem>
        <SkillListItem>
          Wrote easily configurable styling using <KW>Sass</KW> mixins and
          variables, and customized popular libraries including{' '}
          <KW>Bootstrap</KW>
        </SkillListItem>
        <SkillListItem>
          Built interactive <KW>React form components</KW> and integrated them
          into an existing <KW>AngularJS</KW> application
        </SkillListItem>
        <SkillListItem>
          Wired components with a <KW>Redux store</KW> and wrote reducer
          functions
        </SkillListItem>
        <SkillListItem>
          Deployed and configured a custom <KW>WordPress</KW> environment
          to <KW>AWS</KW>
        </SkillListItem>
      </SkillList>
    </SkillColumn>
  );
};

export default WebSkillColumn;
