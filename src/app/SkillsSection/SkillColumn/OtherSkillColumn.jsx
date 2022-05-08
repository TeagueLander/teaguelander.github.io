import React from 'react';
import IconRow from '../../components/IconRow';
import TechIcon from '../../components/TechIcon';
import SkillColumn from './index';
// import SkillList from '../SkillList';
import SkillListItem from '../SkillList/SkillListItem';
import KW from '../../components/Keyword';

import pythonIcon from '../../../images/tools/icon-python.svg';
import microsoftIcon from '../../../images/tools/icon-microsoft.svg';
import postgresIcon from '../../../images/data/icon-postgres.svg';
import oracleIcon from '../../../images/data/icon-oracle.svg';
import solrIcon from '../../../images/data/icon-solr-no-words.svg';
import androidIcon from '../../../images/other/icon-android.svg';
// import pythonIcon from '../../../images/other/icon-python.svg';
import redhatIcon from '../../../images/tools/icon-redhat.svg';
import zookeeperIcon from '../../../images/tools/icon-zookeeper-cropped.svg';
import ideaIcon from '../../../images/tools/icon-idea.svg';
// import zookeeperIcon from '../../../images/tools/icon-kafka.svg';
// import reduxIcon from '../../../images/web/icon-redux.svg';
import npmIcon from '../../../images/tools/icon-npm.svg';
import SkillListTwoColumn from '../SkillList/SkillListTwoColumns';

const OtherSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Additional Skills" {...props}>
      <IconRow>
        {/* <TechIcon imgSrc={redhatIcon} altText="Red Hat" paddingSides={0.1} /> */}
        <TechIcon imgSrc={pythonIcon} altText="Python" />
        <TechIcon imgSrc={postgresIcon} altText="Postgres" />
        <TechIcon imgSrc={oracleIcon} altText="Oracle" />
        <TechIcon imgSrc={solrIcon} altText="Solr" />
        {/* <TechIcon imgSrc={pythonIcon} altText="Python" /> */}
        <TechIcon imgSrc={microsoftIcon} altText="Microsoft Identity Platform" />
        <TechIcon imgSrc={redhatIcon} altText="Red Hat" />
        <TechIcon imgSrc={zookeeperIcon} altText="Zookeeper" />
        <TechIcon imgSrc={ideaIcon} altText="IntelliJ IDEA" />
        {/*<TechIcon imgSrc={npmIcon} altText="npm" />*/}
        <TechIcon imgSrc={androidIcon} altText="Android" />
      </IconRow>
      <SkillListTwoColumn>
        <SkillListItem>
          Scripted commonly run tasks in runnable <KW>Python</KW> files
        </SkillListItem>
        <SkillListItem>
          <KW>Remediated incidents</KW> and <KW>documented</KW> solutions
          for future reference
        </SkillListItem>
        <SkillListItem>
          Worked with both <KW>Postgres</KW> and <KW>Oracle SQL</KW> databases
        </SkillListItem>
        <SkillListItem>
          Developed with and deployed applications to{' '}
          <KW>Red Hat Enterprise Linux</KW>
        </SkillListItem>
        <SkillListItem>
          Integrated applications with the <KW>Microsoft Identity Platform</KW>{' '}
          using <KW>OAuth</KW>
        </SkillListItem>
        <SkillListItem>
          Implemented search in <KW>Solr</KW>
        </SkillListItem>
        <SkillListItem>
          Implemented <KW>microservice discovery</KW> in <KW>Apache Kafka</KW>
        </SkillListItem>
        <SkillListItem>
          Developed using various IDEs and editors including <KW>Intellij</KW>,{' '}
          <KW>Eclipse</KW>, <KW>Visual Studio Code</KW>, and <KW>Vim</KW>
        </SkillListItem>
        {/*<SkillListItem>
          Made a podcasting <KW>Android</KW> application and published it on{' '}
          <KW>Google Play</KW>
        </SkillListItem>*/}
        {/*<SkillListItem>
          Managed packages and dependencies with <KW>npm</KW>
        </SkillListItem>*/}
      </SkillListTwoColumn>
    </SkillColumn>
  );
};

export default OtherSkillColumn;
