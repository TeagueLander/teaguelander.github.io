import React from 'react';
import SkillColumn from './index';
import TechIcon from '../../components/TechIcon';
import IconRow from '../../components/IconRow';

import jestIcon from '../../../images/test/icon-jest.svg';
import junitIcon from '../../../images/test/icon-junit.svg';
import puppeteerIcon from '../../../images/test/icon-puppeteer-centered.svg';
import postmanIcon from '../../../images/test/icon-postman.svg';
import browserStackIcon from '../../../images/test/icon-browserstack.svg';
import SkillListItem from '../SkillList/SkillListItem';
import KW from '../../components/Keyword';
import SkillList from '../SkillList';

const TestSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Let's talk Testing" {...props}>
      <IconRow>
        <TechIcon imgSrc={junitIcon} altText="JUnit" />
        <TechIcon imgSrc={jestIcon} altText="Jest" paddingSides={0.1} />
        <TechIcon imgSrc={puppeteerIcon} altText="Puppeteer" />
        <TechIcon imgSrc={postmanIcon} altText="Postman" paddingSides={0.1} />
        <TechIcon imgSrc={browserStackIcon} altText="BrowserStack" />
      </IconRow>
      <SkillList>
        <SkillListItem>
          Composed functional and integration tests in <KW>JUnit</KW>; tested
          invidiual services along with data-layer and web-endpoint interactions
        </SkillListItem>
        <SkillListItem>
          Wrote component tests client-side tests in <KW>Jest</KW>
        </SkillListItem>
        <SkillListItem>
          Combined <KW>Jest</KW> and <KW>Puppeteer</KW> to write versatile
          end-to-end tests
        </SkillListItem>
        <SkillListItem>
          Compiled a collection of <KW>Postman</KW> requests to test
          applications in development and production
        </SkillListItem>
        <SkillListItem>
          Wrote <KW>Selenium</KW> based tests which ran in <KW>Browserstack</KW>{' '}
          against a wide variety types of clients
        </SkillListItem>
      </SkillList>
    </SkillColumn>
  );
};

export default TestSkillColumn;
