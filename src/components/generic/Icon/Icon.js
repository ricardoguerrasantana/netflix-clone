import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styled-components';

function Icon({ src }) {
  return (
    <Image src={src} />
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Icon;