import Debug from "debug";
const log = Debug('App:PlayerContainer');
log.log = console.log.bind(console);

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

function PlayerContainer({ buttonStyles, buttonText, videoId, videoSource, videoType }) {
  log('Rendering...');

  const [displayVideo, setDisplayVideo] = useState(false);

  function handleButtonClick() {
    setDisplayVideo(true);
  }

  function handleOverlayClick() {
    setDisplayVideo(false);
  }

  function handleCloseIcon() {
    setDisplayVideo(false);
  }


  return (
    <Player
      buttonStyles={buttonStyles}
      buttonText={buttonText}
      displayVideo={displayVideo}
      handleButtonClick={handleButtonClick}
      handleCloseIcon={handleCloseIcon}
      handleOverlayClick={handleOverlayClick}
      videoId={videoId}
      videoSource={videoSource}
      videoType={videoType}
    />
  );
}

PlayerContainer.propTypes = {
  buttonStyles: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

export default memo(PlayerContainer);