import Debug from "debug";
const log = Debug('App:ExtendedContainer');
log.log = console.log.bind(console);

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Extended from './Extended';
import { global } from "../../../constants/ui-text";

function ExtendedContainer({ displayFromOutside, elements, backgroundSrc }) {
  log('Rendering...');

  const [displayExtended, setDisplayExtended] = useState(false);

  useEffect(() => {
    if (displayFromOutside) {
      setDisplayExtended(true);
    } else {
      setDisplayExtended(false);
    }

  }, [displayFromOutside]);

  function handleCloseIconClick() {
    setDisplayExtended(false);
  }

  return displayExtended ?
    <Extended
      backgroundSrc={backgroundSrc}
      closeIconSrc={global.closeIconSrc}
      elements={elements}
      handleCloseIconClick={handleCloseIconClick}
    />
    : null;
}

ExtendedContainer.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  displayFromOutside: PropTypes.bool.isRequired,
  elements: PropTypes.element.isRequired,
}

export default memo(ExtendedContainer);