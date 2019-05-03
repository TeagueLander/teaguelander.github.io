import React from 'react';
import IconRow from '../../components/IconRow';
import TechIcon from '../../components/TechIcon';
import SkillColumn from './index';
import SkillList from '../SkillList';
import SkillListItem from '../SkillList/SkillListItem';

import postgresIcon from '../../../images/data/icon-postgres.svg';
import solrIcon from '../../../images/data/icon-solr-no-words.svg';
import androidIcon from '../../../images/other/icon-android.svg';
import pythonIcon from '../../../images/other/icon-python.svg';
import redhatIcon from '../../../images/tools/icon-redhat.svg';

const OtherSkillColumn = ({ ...props }) => {
  return (
    <SkillColumn title="Additional Skills" {...props}>
      <IconRow>
        {/* <TechIcon imgSrc={redhatIcon} altText="Red Hat" paddingSides={0.1} /> */}
        <TechIcon imgSrc={postgresIcon} altText="Postgres" />
        <TechIcon imgSrc={solrIcon} altText="Solr" />
        <TechIcon imgSrc={pythonIcon} altText="Python" />
        <TechIcon imgSrc={androidIcon} altText="Android" />
        <TechIcon imgSrc={redhatIcon} altText="Android" />
      </IconRow>
      <SkillList>
        <SkillListItem>Setup maven</SkillListItem>
      </SkillList>
    </SkillColumn>
  );
};

export default OtherSkillColumn;
