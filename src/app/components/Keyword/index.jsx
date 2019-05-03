import React from 'react';
import PropTypes from 'prop-types';

const TechIcon = ({ children }) => <b>{children}</b>;

TechIcon.propTypes = {
  children: PropTypes.node,
};

export default TechIcon;
