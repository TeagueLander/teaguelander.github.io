import React from 'react';
import PropTypes from 'prop-types';
import ResumeSectionDetails from '../../components/ResumeSectionDetails';
import dateFormatter from '../../utils/dateFormatter';

const WorkExperienceDetails = ({
  jobTitle,
  dateStart,
  dateEnd,
  companyName,
}) => {
  const dateString = dateFormatter.buildDateRangeString(dateStart, dateEnd);

  return (
    <ResumeSectionDetails
      title1={jobTitle}
      title2={dateString}
      title3={companyName}
    />
  );
};

WorkExperienceDetails.propTypes = {
  jobTitle: PropTypes.string,
  dateStart: PropTypes.instanceOf(Date),
  dateEnd: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  companyName: PropTypes.string,
};

export default WorkExperienceDetails;
