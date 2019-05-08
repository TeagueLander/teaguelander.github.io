import React from 'react';
import IconRow from '../../components/IconRow';
import TechIcon from '../../components/TechIcon';
import SkillColumn from './index';
import SkillList from '../SkillList';
import SkillListItem from '../SkillList/SkillListItem';

import postgresIcon from '../../../images/data/icon-postgres.svg';
import oracleIcon from '../../../images/data/icon-oracle.svg';
import solrIcon from '../../../images/data/icon-solr-no-words.svg';
import androidIcon from '../../../images/other/icon-android.svg';
import pythonIcon from '../../../images/other/icon-python.svg';
import redhatIcon from '../../../images/tools/icon-redhat.svg';
import kafkaIcon from '../../../images/tools/icon-zookeeper-cropped.svg';
import ideaIcon from '../../../images/tools/icon-idea.svg';
// import zookeeperIcon from '../../../images/tools/icon-kafka.svg';
// import reduxIcon from '../../../images/web/icon-redux.svg';
import npmIcon from '../../../images/tools/icon-npm.svg';

const OtherSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Additional Skills" {...props}>
      <IconRow>
        {/* <TechIcon imgSrc={redhatIcon} altText="Red Hat" paddingSides={0.1} /> */}
        <TechIcon imgSrc={postgresIcon} altText="Postgres" />
        <TechIcon imgSrc={oracleIcon} altText="Oracle" />
        <TechIcon imgSrc={solrIcon} altText="Solr" />
        <TechIcon imgSrc={pythonIcon} altText="Python" />
        <TechIcon imgSrc={androidIcon} altText="Android" />
        <TechIcon imgSrc={redhatIcon} altText="Red Hat" />
        <TechIcon imgSrc={kafkaIcon} altText="Kafka" />
        <TechIcon imgSrc={ideaIcon} altText="IntelliJ IDEA" />
        <TechIcon imgSrc={npmIcon} altText="npm" />
      </IconRow>
      <SkillList>
        <SkillListItem>Setup maven</SkillListItem>
      </SkillList>
    </SkillColumn>
  );
};

export default OtherSkillColumn;
