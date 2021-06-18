import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Text } from './styled-components';
import { GridRow } from '../../../components';

function FooterLinks({ copyRight, rows, title }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <GridRow rows={rows} />

      <Text>
        {copyRight}
      </Text>
    </Container>
  );
}

FooterLinks.propTypes = {
  copyRight: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired,
    })).isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
}

FooterLinks.defaultProps = {
}

export default FooterLinks;