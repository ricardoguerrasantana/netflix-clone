import Debug from "debug";
const log = Debug('App:FormContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

function FormContainer({ button, error, inputs, handleSubmitClick, subtext, text, title }) {
  log('Rendering...');

  return (
    <Form
      button={button}
      error={error}
      handleSubmitClick={handleSubmitClick}
      inputs={inputs}
      subtext={subtext}
      text={text}
      title={title}
    />
  );
}

FormContainer.propTypes = {
  button: PropTypes.element.isRequired,
  error: PropTypes.string,
  handleSubmitClick: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.shape({
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
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  title: PropTypes.string,
}

FormContainer.defaultProps = {
  error: "",
  subtext: "",
  text: "",
  title: "",
}

export default memo(FormContainer);