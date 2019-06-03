import React from 'react';
import PropTypes from 'prop-types';
import SkillList from '.';

const SkillListTwoColumn = ({ className = '', ...props }) => {
  return <SkillList {...props} className={`${className} skill-list-col-2`} />;
};

SkillListTwoColumn.propTypes = {
  className: PropTypes.string,
};

export default SkillListTwoColumn;
