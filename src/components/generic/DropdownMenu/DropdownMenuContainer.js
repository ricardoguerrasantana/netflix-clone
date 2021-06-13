import React , { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu } from './DropdownMenu';
import { Icon , Menu } from '../..';

import Debug from "debug";
const log = Debug('App:DropdownMenuContaier');
log.log = console.log.bind(console);

function DropdownMenuContainer({ src , options }) {
  log('Rendering...');
  
  const [displayMenu , setDisplayMenu] = useState(false);

  function handlePointerEnter() {
    return setDisplayMenu(true);
  }
  
  function handlePointerLeave() {
    return setDisplayMenu(false);
  }

  return (
    <DropdownMenu 
      handlePointerEnter={handlePointerEnter}
      handlePointerLeave={handlePointerLeave}
      icon={<Icon src={src} />} 
      menu={
        <Menu 
          display={displayMenu} 
          options={options} 
        />
      }
    />
  );
}

DropdownMenuContainer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  src: PropTypes.string.isRequired,
}

export default memo(DropdownMenuContainer);