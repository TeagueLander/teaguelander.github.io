import React from 'react';
import PropTypes from 'prop-types';

const TechIcon = ({ imgSrc, altText, paddingSides }) => {
  const style = {
    padding: '0 ' + (paddingSides || 0) + 'em',
  };

  return (
    <figure className="column image">
      <img src={imgSrc} alt={altText} title={altText} style={style} />
    </figure>
  );
};

TechIcon.propTypes = {
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  paddingSides: PropTypes.number,
};

export default TechIcon;
