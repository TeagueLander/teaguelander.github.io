import React from 'react';
import WorkExperienceDetails from './WorkExperienceDetails';
import ResumeSection from '../../components/ResumeSection';

const WorkExperience = () => {
  return (
    <div>
      <ResumeSection>
        <WorkExperienceDetails
          jobTitle="Web Developer"
          companyName="James Evans & Associates"
          dateStart={new Date('August 2016')}
          dateEnd="Present"
        />
      </ResumeSection>
    </div>
  );
};

export default WorkExperience;
