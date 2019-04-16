import React from 'react';
import PropTypes from 'prop-types';
import ResumeSectionDetails from '../../components/ResumeSectionDetails';
import dateFormatter from '../../utils/dateFormatter';

const EducationDetails = ({ degree, dateStart, dateEnd, location }) => {
  const dateString = dateFormatter.buildDateRangeString(dateStart, dateEnd);

  return (
    <ResumeSectionDetails
      title1={degree}
      title2={dateString}
      title3={location}
    />
  );
};

EducationDetails.propTypes = {
  degree: PropTypes.string,
  dateStart: PropTypes.instanceOf(Date),
  dateEnd: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  location: PropTypes.string,
};

export default EducationDetails;
