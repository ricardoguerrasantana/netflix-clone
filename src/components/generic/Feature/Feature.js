import React from 'react';
import PropTypes from 'prop-types';
import { Background } from "../..";

function Feature({ backgroundSrc, dontShowOnSmallViewPort,  children }) {
  return (
    <Background
      backgroundSrc={backgroundSrc}
      dontShowOnSmallViewPort={dontShowOnSmallViewPort}
    >
      {children}
    </Background>
  );
}

Feature.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  dontShowOnSmallViewPort: PropTypes.bool.isRequired,
}

export default Feature;