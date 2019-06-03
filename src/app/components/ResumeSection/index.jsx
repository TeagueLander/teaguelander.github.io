import React from 'react';
import PropTypes from 'prop-types';

const ResumeSection = ({ title, className = '', children }) => {
  return (
    <section className={`section resume-section ${className}`}>
      <div className="container is-narrow">
        <h2 className="title">{title}</h2>
        <div className="box">
          <div className="content">
            <div className="columns is-multiline">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

ResumeSection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ResumeSection;
