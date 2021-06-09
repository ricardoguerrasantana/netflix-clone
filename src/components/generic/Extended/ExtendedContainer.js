import Debug from "debug";
const log = Debug('App:ExtendedContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Extended from './Extended';
import { global } from "../../../constants/ui-text";

function ExtendedContainer({ elements, backgroundSrc, setDisplayExtended }) {
  log('Rendering...');

  function handleCloseIconClick() {
    setDisplayExtended(false);
  }

  return (
    <Extended
      backgroundSrc={backgroundSrc}
      closeIconSrc={global.closeIconSrc}
      elements={elements}
      handleCloseIconClick={handleCloseIconClick}
    />
  );
}

ExtendedContainer.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  elements: PropTypes.element.isRequired,
  setDisplayExtended: PropTypes.func.isRequired,
}

export default memo(ExtendedContainer);