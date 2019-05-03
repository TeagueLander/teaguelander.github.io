import React from 'react';
import SkillColumn from './index';
import TechIcon from '../../components/TechIcon';
import IconRow from '../../components/IconRow';

import jestIcon from '../../../images/test/icon-jest.svg';
import junitIcon from '../../../images/test/icon-junit.svg';
import puppeteerIcon from '../../../images/test/icon-puppeteer-centered.svg';
import postmanIcon from '../../../images/test/icon-postman.svg';

const TestSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Let's talk Testing" {...props}>
      <IconRow>
        <TechIcon imgSrc={postmanIcon} altText="Postman" paddingSides={0} />
        <TechIcon imgSrc={junitIcon} altText="JUnit" />
        <TechIcon imgSrc={puppeteerIcon} altText="Puppeteer" />
        <TechIcon imgSrc={jestIcon} altText="Jest" paddingSides={0} />
        {/* <TechIcon imgSrc={browserStackIcon} altText="BrowserStack" /> */}
      </IconRow>
    </SkillColumn>
  );
};

export default TestSkillColumn;
