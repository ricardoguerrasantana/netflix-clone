import Debug from "debug";
const log = Debug('App:GridRowContainer');
log.log = console.log.bind(console);

import React , { memo } from 'react';
import PropTypes from 'prop-types';
import GridRow from './GridRow';

function GridRowContainer({ rows }) {
  log('Rendering...');

  return (
    <GridRow rows={rows} />
  );
}

GridRowContainer.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired, 
    })).isRequired
  })).isRequired,
}

export default memo(GridRowContainer);