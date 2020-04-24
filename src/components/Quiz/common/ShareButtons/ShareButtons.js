import React from 'react';
import PropTypes from 'prop-types';
import './ShareButtons.scss';

import ShareButton from './ShareButton/ShareButton';

import iconFacebook from './assets/images/icon-facebook.svg';
import iconTwitter from './assets/images/icon-twitter.svg';
import iconWhatsapp from './assets/images/icon-whatsapp.svg';

function ShareButtons({ shareUrl, shareMessage, hashtags }) {
  return (
    <div className="share-buttons">
      <ShareButton
        shareUrl={shareUrl}
        shareMessage={shareMessage}
        hashtags={hashtags}
        icon={iconFacebook}
        socialMedia="Facebook"
      />
      <ShareButton
        shareUrl={shareUrl}
        shareMessage={shareMessage}
        hashtags={hashtags}
        icon={iconTwitter}
        socialMedia="Twitter"
      />
      <ShareButton
        shareUrl={shareUrl}
        shareMessage={shareMessage}
        hashtags={hashtags}
        icon={iconWhatsapp}
        socialMedia="WhatsApp"
      />
    </div>
  );
}

ShareButtons.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  shareMessage: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShareButtons;
