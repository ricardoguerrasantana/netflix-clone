import Debug from "debug";
const log = Debug('App:GridRowContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import PropTypes from 'prop-types';
import GridRow from './GridRow';

function GridRowContainer({ string }) {
  log('Rendering...');

  return (
    <GridRow string={string} />
  );
}

GridRowContainer.propTypes = {
  string: PropTypes.string,
}

GridRowContainer.defaultProps = {
  string: "",
}

export default memo(GridRowContainer);