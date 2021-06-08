import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grade, Description } from './styled-components';

function Maturity({ maturityString, maturityNumber, genre }) {
  return (
    <Container>
      <Grade maturityNumber={maturityNumber}>
        {maturityString}
      </Grade>

      <Description>
        {genre}
      </Description>
    </Container>
  );
}

Maturity.propTypes = {
  genre: PropTypes.string.isRequired,
  maturityNumber: PropTypes.number.isRequired,
  maturityString: PropTypes.string.isRequired,
}

export default Maturity;