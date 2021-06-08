import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled-components';

export function DropdownMenu({ icon , menu , handlePointerEnter , handlePointerLeave }) {
  return (
    <Container 
      onPointerEnter={handlePointerEnter} 
      onPointerLeave={handlePointerLeave}
    >
      {icon}

      {menu}
    </Container>
  );
}

DropdownMenu.propTypes = {
  handlePointerEnter: PropTypes.func.isRequired,
  handlePointerLeave: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired,
}