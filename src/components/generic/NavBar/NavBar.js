import React from 'react';
import { Container, Group } from './styled-components';
import PropTypes from 'prop-types';

function NavBar({ items }) {
  return (
    <Container>
      {items.map(item => {
        return (
          <Group key={item.key}>
            {item.elements}
          </Group>
        );
      })}
    </Container>
  );
}

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    elements: PropTypes.element,
    key: PropTypes.string
  })).isRequired,
};

export default NavBar;