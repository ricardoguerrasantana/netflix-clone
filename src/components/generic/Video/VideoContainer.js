import Debug from "debug";
const log = Debug('App:VideoContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import { global } from "../../../constants/ui-text";

function VideoContainer({ displayVideo,
  handleCloseIcon, handleOverlayClick, videoId, videoSource, videoType }) {
  log('Rendering...');

  return displayVideo ?
    <Video
      closeIconSrc={global.closeIconSrc}
      handleCloseIcon={handleCloseIcon}
      handleOverlayClick={handleOverlayClick}
      videoId={videoId}
      videoSource={videoSource}
      videoType={videoType}
    />
    : null;
}

VideoContainer.propTypes = {
  displayVideo: PropTypes.bool.isRequired,
  handleCloseIcon: PropTypes.func.isRequired,
  handleOverlayClick: PropTypes.func,
  videoId: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

VideoContainer.defaultProps = {
  handleOverlayClick: () => {},
}

export default memo(VideoContainer);