import React from 'react';
import PropTypes from 'prop-types';

const ResumeSectionDetails = ({ title1, title2, title3, title4 }) => (
  <div>
    {title1 && <div>{title1}</div>}
    {title2 && <div>{title2}</div>}
    {title3 && <div>{title3}</div>}
    {title4 && <div>{title4}</div>}
  </div>
);

ResumeSectionDetails.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
};

export default ResumeSectionDetails;
