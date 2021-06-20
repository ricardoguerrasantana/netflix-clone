import Debug from "debug";
const log = Debug('App:OptFormContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import OptForm from './OptForm';
import { buttons, homePage } from "../../../constants/ui-text";
import { Button } from '../../../components';

function OptFormContainer({ footer, handleInputChange, handleSubmit, header, inputType, inputPlaceholder , inputValue }) {
  log('Rendering...');

  const textButton = (
    <>
      {homePage.optFormButton}

      <img
        alt={buttons.optFormAlt}
        src={buttons.optFormSrc}
      />
    </>
  );

  const button = (
    <Button
      styles="optForm"
      text={textButton}
      type="submit"
    />
  );

  return (
    <OptForm
      button={button}
      footer={footer}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      header={header}
      inputPlaceholder={inputPlaceholder}
      inputType={inputType}
      inputValue={inputValue}
    />
  );
}

OptFormContainer.propTypes = {
  footer: PropTypes.element,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  header: PropTypes.element,
  inputPlaceholder: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
}

OptFormContainer.defaultProps = {
  footer: null,
  handleInputChange: () => { },
  handleSubmit: () => { },
  header: null,
  inputPlaceholder: "",
  inputType: "",
  inputValue: ""
}

export default memo(OptFormContainer);