import React from 'react';
import PropTypes from 'prop-types';

const SkillsSection = ({ children }) => {
  return (
    <section className="section skills">
      <div className="container is-narrow">
        <h2 className="title is-marginless">Skills</h2>
        <div className="box">
          <div className="content">
            <div className="columns">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  children: PropTypes.node,
};

export default SkillsSection;
