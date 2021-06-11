/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Detail, Image, Description, Title } from './styled-components';

function Card({ altCard, imageSrc, title, description , handleCardPointerEnter , handleCardPointerLeave , displayDetail , handleCardClick }) {
  return (
    <Container
      onClick={handleCardClick}
      onPointerEnter={handleCardPointerEnter}
      onPointerLeave={handleCardPointerLeave}
    >
      <Image
        alt={altCard}
        src={imageSrc}
      />

      <Detail displayDetail={displayDetail} >
        <Title>
          {title}

          <Description >
            {description}
          </Description>
        </Title>
      </Detail>
    </Container>
  );
}

Card.propTypes = {
  altCard: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  displayDetail: PropTypes.bool.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  handleCardPointerEnter: PropTypes.func.isRequired,
  handleCardPointerLeave: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card;