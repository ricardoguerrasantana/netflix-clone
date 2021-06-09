import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column, Item } from './styled-components';

function GridRow({ rows }) {
  return (
    <Row>
      {rows.map(col => {
        return (
          <Column key={col.key}>
            {col.items.map(item => {
              return (
                <Item key={item.key}>
                  {item.element}
                </Item>
              );
            })}
          </Column>
        );
      })}
    </Row>
  );
}

GridRow.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired,
    })).isRequired
  })).isRequired,
}

export default GridRow;