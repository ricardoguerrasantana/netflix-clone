import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from '../styles/ModelStyles';

function Link({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Link.propTypes = {
  children: PropTypes.element,
}

Link.defaultProps = {
  children: null,
} 

export default Link;