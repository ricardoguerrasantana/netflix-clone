import React from 'react';
import PropTypes from 'prop-types';
import { Body, Container, Header, Image } from './styled-components';

function DropdownInfo({ body, closeAlt, closeImgSrc, displayBody, handleHeaderClick, header, openAlt, openImgSrc }) {
  return (
    <Container >
      <Header
        onClick={handleHeaderClick}
      >
        {header}

        <Image
          alt={displayBody ? closeAlt : openAlt}
          src={displayBody ? closeImgSrc : openImgSrc}
        />
      </Header>

      <Body displayBody={displayBody} >
        <span>
          {body}
        </span>
      </Body>
    </Container>
  );
}

DropdownInfo.propTypes = {
  body: PropTypes.string.isRequired,
  closeAlt: PropTypes.string,
  closeImgSrc: PropTypes.string.isRequired,
  displayBody: PropTypes.bool.isRequired,
  handleHeaderClick: PropTypes.func,
  header: PropTypes.string.isRequired,
  openAlt: PropTypes.string,
  openImgSrc: PropTypes.string.isRequired,
}

DropdownInfo.defaultProps = {
  closeAlt: "",
  handleHeaderClick: () => { },
  openAlt: "",
}

export default DropdownInfo;