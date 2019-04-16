import React from 'react';
import ResumeSection from '../../components/ResumeSection';
import ResumeSectionDetails from '../../components/ResumeSectionDetails';

const SideProjects = () => {
  return (
    <div>
      <ResumeSection>
        <ResumeSectionDetails title1="PerfectCast" />
      </ResumeSection>
      <ResumeSection>
        <ResumeSectionDetails title1="FastLoot" />
      </ResumeSection>
    </div>
  );
};

export default SideProjects;
