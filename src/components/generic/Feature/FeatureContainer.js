import Debug from "debug";
const log = Debug('App:FeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

function FeatureContainer({ backgroundSrc, dontShowOnSmallViewPort
  , elements }) {
  log('Rendering...');

  return (
    <Feature
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
      elements={elements}
    />
  );
}

FeatureContainer.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool,
  elements: PropTypes.element.isRequired,
}

FeatureContainer.defaultProps = {
  dontShowOnSmallViewPort: false
}

export default memo(FeatureContainer);