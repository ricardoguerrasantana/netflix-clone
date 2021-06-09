import React from 'react';
import PropTypes from 'prop-types';
import { Inner, CallOut, Text } from './styled-components';

function Feature({ action, callOut, description }) {
  return (
    <Inner>
      <CallOut>
        {callOut}
      </CallOut>

      <Text>
        {description}
      </Text>

      {action}
    </Inner>
  );
}

Feature.propTypes = {
  action: PropTypes.element,
  callOut: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

Feature.defaultProps = {
  action: null,
}

export default Feature;