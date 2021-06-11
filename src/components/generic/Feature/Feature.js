import React from 'react';
import PropTypes from 'prop-types';
import { Background } from "../../../containers";

function Feature({ backgroundSrc, dontShowOnSmallViewPort
  , elements }) {
  return (
    <Background
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
    >
      {elements}
    </Background>
  );
}

Feature.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool.isRequired,
  elements: PropTypes.element.isRequired,
}

export default Feature;