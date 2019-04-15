import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ResumeSection = ({ title, children }) => (
  <div>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

ResumeSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ResumeSection;
