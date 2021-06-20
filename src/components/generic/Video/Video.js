/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Overlay, Inner, Close } from './styled-components';

function Video({ closeIconSrc , handleCloseIcon , handleOverlayClick , videoId , videoSource , videoType }) {
  return (
    <Container>
      <Overlay onClick={handleOverlayClick} />

      <Inner>
        <video
          autoPlay
          controls
          id={videoId}
        >
          <source
            src={videoSource}
            type={videoType}
          />
        </video>

        <Close
          onClick={handleCloseIcon}
          src={closeIconSrc}
        />
      </Inner>
    </Container>
  );
}

Video.propTypes = {
  closeIconSrc: PropTypes.string.isRequired,
  handleCloseIcon: PropTypes.func.isRequired,
  handleOverlayClick: PropTypes.func,
  videoId: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

Video.defaultProps = {
  handleOverlayClick: () => {},
}

export default Video;