import Debug from "debug";
const log = Debug('App:FeatureContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

function FeatureContainer({ action, callOut, description }) {
  log('Rendering...');

  return (
    <Feature
      action={action}
      callOut={callOut}
      description={description}
    />
  );
}

FeatureContainer.propTypes = {
  action: PropTypes.element,
  callOut: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

FeatureContainer.defaultProps = {
  action: null,
}

export default memo(FeatureContainer);