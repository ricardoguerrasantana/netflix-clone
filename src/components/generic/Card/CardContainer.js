import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import Debug from "debug";
const log = Debug('App:CardContainer');
log.log = console.log.bind(console);

function CardContainer({ alt , imageSrc, title, description , handleCardClick }) {
  log('Rendering...');

  const [displayDetail , setDisplayDetail] = useState(false);

  function handleCardPointerLeave() {
    setDisplayDetail(false);
  }

  function handleCardPointerEnter() {
    setDisplayDetail(true)
  }

  function truncateDescription() {
    const limit = 262;
    return description.length > limit ? 
    description.slice(0 , limit) + "..." : 
    description;
  }

  return (
    <Card
      alt={alt}
      description={truncateDescription()}
      displayDetail={displayDetail} 
      handleCardClick={handleCardClick}
      handleCardPointerEnter={handleCardPointerEnter}
      handleCardPointerLeave={handleCardPointerLeave}
      imageSrc={imageSrc}
      title={title}
    />
  );
}

CardContainer.propTypes = {
  alt: PropTypes.string,
  description: PropTypes.string,
  handleCardClick: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

CardContainer.defaultProps = {
  alt: "",
  description: "",
}

export default memo(CardContainer);