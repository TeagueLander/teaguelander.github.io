import React from 'react';
import PropTypes from 'prop-types';

const SkillList = ({ children, className = '', ...props }) => {
  return (
    <ul {...props} className={`${className} skill-list`}>
      {children}
    </ul>
  );
};

SkillList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SkillList;
