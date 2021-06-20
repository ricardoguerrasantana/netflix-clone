import React from 'react';
import PropTypes from 'prop-types';
import { Capsule, Container, Input } from './styled-components';

function OptForm({ button, footer, handleInputChange , handleSubmit, header, inputPlaceholder, inputType, inputValue }) {
  return (
    <Container
      // method="POST"
      onSubmit={handleSubmit}
    >
      {header}

      <Capsule>
        <Input
          onChange={handleInputChange}
          placeholder={inputPlaceholder}
          type={inputType}
          value={inputValue}
        />

        {button}
      </Capsule>

      {footer}

    </Container>
  );
}

OptForm.propTypes = {
  button: PropTypes.element.isRequired,
  footer: PropTypes.element,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.element,
  inputPlaceholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
}

OptForm.defaultProps = {
  footer: null,
  header: null,
}

export default OptForm;