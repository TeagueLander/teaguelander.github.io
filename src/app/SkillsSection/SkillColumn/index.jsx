import React from 'react';
import PropTypes from 'prop-types';

const SkillColumn = ({ title, className = '', children }) => {
  return (
    <div className={'column ' + className}>
      {title && (
        <h3 className="title is-size-4 is-spaced has-text-centered">{title}</h3>
      )}
      {children}
    </div>
  );
};

SkillColumn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SkillColumn;
