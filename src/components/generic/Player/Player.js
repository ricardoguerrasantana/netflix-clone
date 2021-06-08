import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled-components';
import { Button, Video } from '../../../containers';

function Player({ buttonStyles , buttonText, displayVideo, handleButtonClick, handleCloseIcon, handleOverlayClick, videoId, videoSource, videoType }) {
  return (
    <Container>
      <Button
        handleClick={handleButtonClick}
        styles={buttonStyles}
        text={buttonText}
      />

      <Video
        displayVideo={displayVideo}
        handleCloseIcon={handleCloseIcon}
        handleOverlayClick={handleOverlayClick}
        videoId={videoId}
        videoSource={videoSource}
        videoType={videoType}
      />
    </Container>
  );
}

Player.propTypes = {
  buttonStyles: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  displayVideo: PropTypes.bool.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleCloseIcon: PropTypes.func.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

export default Player;