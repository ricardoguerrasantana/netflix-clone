import React from 'react';
import PropTypes from 'prop-types';
import { Capsule, Container, Input } from './styled-components';

function OptForm({ button, footer, handleSubmit, header, inputPlaceholder }) {
  return (
    <Container
      // method="POST"
      onSubmit={handleSubmit}
    >
      {header}

      <Capsule>
        <Input placeholder={inputPlaceholder} />

        {button}
      </Capsule>

      {footer}

    </Container>
  );
}

OptForm.propTypes = {
  button: PropTypes.element.isRequired,
  footer: PropTypes.element,
  handleSubmit: PropTypes.func.isRequired,
  header: PropTypes.element,
  inputPlaceholder: PropTypes.string
}

OptForm.defaultProps = {
  footer: null,
  header: null,
  inputPlaceholder: ""
}

export default OptForm;