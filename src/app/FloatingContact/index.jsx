import React from 'react';

import iconGithub from '../../images/tools/icon-github.svg';
import iconEmail from '../../images/tools/icon-email.svg';
import iconPhone from '../../images/tools/icon-phone.svg';

const FloatingContact = () => {
  return (
    <div className="floating-contact box">
      <ul>
        <li>
          <img className="contact-img" src={iconGithub} alt="Github" />
          <a className="is-hidden-print" href="https://github.com/teaguelander">
            GitHub
          </a>
          <span className="only-show-print">github.com/teaguelander</span>
        </li>
        <li>
          <img className="contact-img" src={iconEmail} alt="Email" />
          <a className="is-hidden-print" href="mailto:teaguelander@outlook.com">
            Email
          </a>
          <span className="only-show-print">teaguelander@outlook.com</span>
        </li>
        <li>
          <img className="contact-img" src={iconPhone} alt="Phone" />
          <a className="is-hidden-print" href="tel: 1 (250) 709-3848">
            Phone
          </a>
          <span className="only-show-print">1 (250) 709-3848</span>
        </li>
      </ul>
    </div>
  );
};

export default FloatingContact;
