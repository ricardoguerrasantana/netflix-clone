import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container, Inner } from './styled-components';
import { DropdownInfo } from '../../../components';

function FaqsAccordion({ faqs, title }) {
  return (
    <Container>
      <Inner>
        <Title>
          {title}
        </Title>

        {faqs.map(item => (
          <DropdownInfo
            body={item.body}
            header={item.header}
            key={item.id}
          />
        ))}
      </Inner>
    </Container>
  );
}

FaqsAccordion.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  title: PropTypes.string,
}

FaqsAccordion.defaultProps = {
  title: "",
}

export default FaqsAccordion;