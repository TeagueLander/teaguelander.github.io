import React from 'react';
import SkillColumn from './SkillColumn';

const SkillsSection = () => {
  return (
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <SkillColumn title="Let's talk DevOps" />
              <SkillColumn title="Let's Develop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
