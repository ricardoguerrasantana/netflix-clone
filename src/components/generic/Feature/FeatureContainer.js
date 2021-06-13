import Debug from "debug";
const log = Debug('App:FeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

function FeatureContainer({ backgroundSrc, dontShowOnSmallViewPort, children }) {
  log('Rendering...');

  return (
    <Feature
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
    >
      {children}
    </Feature>
  );
}

FeatureContainer.propTypes = {
  backgroundSrc: PropTypes.string,
  children: PropTypes.element.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool,
}

FeatureContainer.defaultProps = {
  backgroundSrc: "",
  dontShowOnSmallViewPort: false
}

export default memo(FeatureContainer);