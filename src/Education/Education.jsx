import React from 'react';
import EducationDetails from './EducationDetails';
import ResumeSection from '../components/ResumeSection';

const Education = () => {
  return (
    <div>
      <ResumeSection>
        <EducationDetails
          degree="Computer Science, Computer Communications and Networks"
          location="University of Victoria"
          dateStart={new Date('January 2015')}
          dateEnd="Present"
        />
      </ResumeSection>
    </div>
  );
};

export default Education;
