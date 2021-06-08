import React from 'react';
import PropTypes from 'prop-types';
import { Background, Inner, CloseIcon } from './styled-components';

function Extended({ backgroundSrc, elements, handleCloseIconClick, closeIconSrc }) {

  return (
    <Background
      src={backgroundSrc}
    >
      <CloseIcon
        onClick={handleCloseIconClick}
        src={closeIconSrc}
      />

      <Inner>
        {elements}
      </Inner>
    </Background>
  );
}

Extended.propTypes = {
  backgroundSrc: PropTypes.string.isRequired,
  closeIconSrc: PropTypes.string.isRequired,
  elements: PropTypes.element.isRequired,
  handleCloseIconClick: PropTypes.func.isRequired,
}

export default Extended;