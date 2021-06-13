import React from 'react';
import PropTypes from 'prop-types';
import { Container, Error, Input, Text, Title, Base, Subtext } from './styled-components';

function Form({ button, error, handleSubmitClick, inputs, subtext, text, title }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      {error &&
        <Error>
          {error}
        </Error>}

      <Base
        method="POST"
        onSubmit={handleSubmitClick}
      >
        {inputs.map(input => (
          <Input
            autoComplete={input.autoComplete}
            key={input.key}
            onChange={input.handleChange}
            placeholder={input.placeholder}
            type={input.type}
            value={input.value}
          />
        ))}

        {button}

        <Text>
          {text}
        </Text>

        <Subtext>
          {subtext}
        </Subtext>
      </Base>
    </Container>
  );
}

Form.propTypes = {
  button: PropTypes.element.isRequired,
  error: PropTypes.string.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.exact({
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoComplete: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  })).isRequired,
  subtext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Form;