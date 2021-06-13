import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackground } from './styled-components';

function Background({ backgroundSrc, children, dontShowOnSmallViewPort }) {
  return (
    <StyledBackground
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
    >
      {children}
    </StyledBackground>
  );
}

Background.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool.isRequired,
}

export default Background;