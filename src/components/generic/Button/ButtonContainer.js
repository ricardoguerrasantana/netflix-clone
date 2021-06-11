import Debug from "debug";
const log = Debug('App:ButtonContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonContainer({ to, text, type, styles, disabled , handleClick }) {
  log('Rendering...');

  return (
    <Button
      disabled={disabled}
      handleClick={handleClick}
      styles={styles}
      text={text}
      to={to}
      type={type}
    />
  );
}

ButtonContainer.propTypes = {
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  styles: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
}

ButtonContainer.defaultProps = {
  disabled: false ,
  handleClick: () => {} ,
  to: "#" ,
  type: "" ,
}

export default memo(ButtonContainer);