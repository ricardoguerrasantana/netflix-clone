import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description } from './styled-components';

function Review({ title, description }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Description>
        {description}
      </Description>
    </Container>
  );
}

Review.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Review.defaultProps = {
  description: "",
}

export default Review;