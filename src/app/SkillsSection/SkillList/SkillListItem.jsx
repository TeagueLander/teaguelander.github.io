import React from 'react';
import PropTypes from 'prop-types';

const SkillListItem = ({ children }) => {
  return <li>{children}</li>;
};

SkillListItem.propTypes = {
  children: PropTypes.node,
};

export default SkillListItem;
