import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/isaackbanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
      </a>
      <a href="https://linkedin.com/in/isaackbanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
      </a>
      <a href="https://twitter.com/isaackbanda" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
      </a>
    </div>
  );
}

export default SocialLinks;
