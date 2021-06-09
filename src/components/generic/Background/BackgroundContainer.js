import Debug from "debug";
const log = Debug('App:BackgroundContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Background from './Background';

function BackgroundContainer({ backgroundSrc, children, dontShowOnSmallViewPort }) {
  log('Rendering...');

  return (
    <Background
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
    >
      {children}
    </Background>
  );
}

BackgroundContainer.propTypes = {
  backgroundSrc: PropTypes.string,
  children: PropTypes.element.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool.isRequired,
}

BackgroundContainer.defaultProps = {
  backgroundSrc: null ,
}

export default memo(BackgroundContainer);