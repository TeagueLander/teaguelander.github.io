import React from 'react';
import PropTypes from 'prop-types';

const IconRow = ({ children }) => {
  return (
    <div className="columns is-vcentered is-centered is-mobile">{children}</div>
  );
};

IconRow.propTypes = {
  children: PropTypes.node,
};

export default IconRow;
