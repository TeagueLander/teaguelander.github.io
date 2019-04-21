import React from 'react';
import PropTypes from 'prop-types';

const SkillList = ({ children }) => {
  return <ul>{children}</ul>;
};

SkillList.propTypes = {
  children: PropTypes.node,
};

export default SkillList;
