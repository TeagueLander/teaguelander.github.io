import React from 'react';
import PropTypes from 'prop-types';

const SkillColumn = ({ title }) => {
  return (
    <div className="column">
      {title && <h2 className="title is-size-4 is-spaced">{title}</h2>}
    </div>
  );
};

SkillColumn.propTypes = {
  title: PropTypes.string,
};

export default SkillColumn;
