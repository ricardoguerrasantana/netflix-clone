import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  Input,
} from './styled-components';

export function SearchBar({ onClickIcon, onChangeInput, displayInput, term, iconURL, iconAlt, inputPlaceholder }) {
  return (
    <Container>
      <Icon
        alt={iconAlt}
        onClick={onClickIcon}
        src={iconURL}
      />

      <Input
        active={displayInput}
        onChange={onChangeInput}
        placeholder={inputPlaceholder}
        value={term}
      />
    </Container>
  );
}

SearchBar.propTypes = {
  displayInput: PropTypes.bool.isRequired,
  iconAlt: PropTypes.string,
  iconURL: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
  onClickIcon: PropTypes.func.isRequired,
  term: PropTypes.string,
}

SearchBar.defaultProps = {
  iconAlt: "Search",
  inputPlaceholder: "Enter a term to search",
  term: "",
}