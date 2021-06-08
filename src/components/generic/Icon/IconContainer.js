import React , { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

import Debug from "debug";
const log = Debug('App:IconContainer');
log.log = console.log.bind(console);

function IconContainer({ src }) {
  log('Rendering...');
  return <Icon src={src} />;
}

IconContainer.propTypes = {
  src: PropTypes.string.isRequired,
}

export default memo(IconContainer);