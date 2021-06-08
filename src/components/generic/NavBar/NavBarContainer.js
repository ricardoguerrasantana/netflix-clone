import PropTypes from 'prop-types';
import React, { memo } from 'react';
import NavBar from './NavBar';

import Debug from "debug";
const log = Debug('App:NavBarContainer');
log.log = console.log.bind(console);

function NavBarContainer({ items }) {
  log('Rendering...');

  return (
    <NavBar
      items={items}
    />
  );
}

NavBarContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    elements: PropTypes.element,
    key: PropTypes.string
  })).isRequired,
};

export default memo(NavBarContainer);