import React from 'react';
import PropTypes from 'prop-types';

const SkillColumn = ({ title, children }) => {
  return (
    <div className="column">
      {title && (
        <h2 className="title is-size-4 is-spaced has-text-centered">{title}</h2>
      )}
      {children}
    </div>
  );
};

SkillColumn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SkillColumn;
