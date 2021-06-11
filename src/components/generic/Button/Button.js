import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled-components';

function Button({ to, text, type, styles, disabled , handleClick }) {

  return (
    <StyledButton
      disabled={disabled}
      onClick={handleClick}
      styles={styles}
      to={to}
      type={type}
    >
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  type: ""
}

export default Button;