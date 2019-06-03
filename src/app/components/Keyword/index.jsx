import React from 'react';
import PropTypes from 'prop-types';

const Keyword = ({ children }) => <b>{children}</b>;

export const KeywordAnchor = ({ children, ...props }) => (
  <a {...props} target="_blank">
    <b>{children}</b>
  </a>
);

Keyword.propTypes = {
  children: PropTypes.node,
};

KeywordAnchor.propTypes = Keyword.propTypes;

export default Keyword;
