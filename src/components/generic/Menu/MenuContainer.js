import React , { memo } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

import Debug from "debug";
const log = Debug('App:MenuContainer');
log.log = console.log.bind(console);

function MenuContainer({ options , display }) {
  log('Rendering...');
  return (
    <Menu 
      displayMenu={display} 
      options={options} 
    />
  );
}

MenuContainer.propTypes = {
  display: PropTypes.bool.isRequired , 
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired , 
    el: PropTypes.element , 
    notClickable: PropTypes.bool , 
  })).isRequired,
}

export default memo(MenuContainer);