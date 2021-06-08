import React from 'react';
import PropTypes from 'prop-types';
import { Container , Link } from './styled-components';

function OptionBar({ selection , optionList , handleClickOnOption }) {
  return (
    <Container>
      {
        optionList.map(item => {

          function handleClick() {
            return handleClickOnOption(item.toLowerCase());
          }
        
          return (
            <Link 
              key={item}
              onClick={handleClick}
              selected={selection === item.toLowerCase() ? true : false}
            >
              {item}
            </Link>
          );
          
        })
      }
    </Container>
  );

}

OptionBar.propTypes = {
  handleClickOnOption: PropTypes.func.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.string.isRequired,
}

export default OptionBar;