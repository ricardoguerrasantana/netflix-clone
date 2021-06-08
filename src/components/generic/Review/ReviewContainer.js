import Debug from "debug";
const log = Debug('App:ReviewContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

function ReviewContainer({ description, title }) {
  log('Rendering...');

  return (
    <Review
      description={description}
      title={title}
    />
  );
}

ReviewContainer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(ReviewContainer);