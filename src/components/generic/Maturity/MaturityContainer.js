import Debug from "debug";
const log = Debug('App:MaturityContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Maturity from './Maturity';

function MaturityContainer({ maturity, genre }) {
  log('Rendering...');

  const maturityNumber = parseInt(maturity);
  const maturityString = String(maturity < 12 ? 'PG' : `${maturity}`);

  return (
    <Maturity
      genre={genre}
      maturityNumber={maturityNumber}
      maturityString={maturityString}
    />
  );
}

MaturityContainer.propTypes = {
  genre: PropTypes.string.isRequired,
  maturity: PropTypes.string.isRequired,
}

export default memo(MaturityContainer);