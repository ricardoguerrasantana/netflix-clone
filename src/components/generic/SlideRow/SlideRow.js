import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Inner, Item } from './styled-components';

function SlideRow({ title, extendedItem, items }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Inner>
        {items.map(item => {
          return (
            <Item key={item.id} >
              {item.element}
            </Item>
          );
        })}
      </Inner>

      {extendedItem}
    </Container>
  );
}

SlideRow.propTypes = {
  extendedItem: PropTypes.element,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}

SlideRow.defaultProps = {
  extendedItem: null,
}

export default SlideRow;