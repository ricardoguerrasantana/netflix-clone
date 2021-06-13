import Debug from "debug";
const log = Debug('App:OptFormContainer');
log.log = console.log.bind(console);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import OptForm from './OptForm';
import { buttons, global, homePage } from "../../../constants/ui-text";
import { Button } from "../..";

function OptFormContainer({ footer, handleSubmit, header }) {
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
      handleSubmit={handleSubmit}
      header={header}
      inputPlaceholder={global.emailPlaceholder}
    />
  );
}

OptFormContainer.propTypes = {
  footer: PropTypes.element,
  handleSubmit: PropTypes.func,
  header: PropTypes.element,
}

OptFormContainer.defaultProps = {
  footer: null,
  handleSubmit: () => {},
  header: null,
}

export default memo(OptFormContainer);