import React from 'react';
import PropTypes from 'prop-types';
import './ShareButton.scss';

function ShareButton({ shareUrl, shareMessage, hashtags, socialMedia, icon }) {
  const facebookAppId = '';

  const socialMedias = {
    Facebook: {
      href: `https://www.facebook.com/dialog/share?app_id=${facebookAppId}&amp;display=popup&amp;quote=&amp;href=${shareUrl}`,
    },
    Twitter: {
      href: `https://twitter.com/intent/tweet?hashtags=${hashtags.join(
        ',',
      )}&amp;text=${shareMessage}`,
    },
    WhatsApp: {
      href: `https://api.whatsapp.com/send?text=${shareMessage}`,
    },
  };

  return (
    <a
      data-size="large"
      href={socialMedias[socialMedia].href}
      onClick={() => {
        window.open(
          socialMedias[socialMedia].href,
          '',
          'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600',
        );
        return false;
      }}
      rel="noopener noreferrer"
      className="share-button"
      target="_blank"
      title="Compartilhar"
    >
      <img alt={socialMedia} src={icon} />
    </a>
  );
}

ShareButton.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  shareMessage: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  socialMedia: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ShareButton;
