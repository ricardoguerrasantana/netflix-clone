import React from 'react';
import PropTypes from 'prop-types';
import {
  Option , 
  MenuContainer , 
} from './styled-components';

export function Menu({ options , displayMenu }) {
  return (
    <MenuContainer displayMenu={displayMenu} >
      {options.map((opt) => {
        return (
          <Option 
            clickable={opt.handleClick ? true : false}
            key={opt.id}
            onClick={opt.handleClick}
          >
            {opt.el}
          </Option>
        );
      })}
    </MenuContainer>
  );
}

Menu.propTypes = {
  displayMenu: PropTypes.bool.isRequired , 
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired , 
    el: PropTypes.element , 
    handleClick: PropTypes.func , 
  })).isRequired ,
}