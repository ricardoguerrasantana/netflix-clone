import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledButton = styled.button`${({ styles, to }) => (
  (styles === "SmallSignIn") || (styles === "SmallSignUp") ?
    `
    background-color: #e50914;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 18px;
    cursor: ${to === "#" ? "default" : "pointer"};
    &:hover {
      background: #f40612;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
    `
    : (styles === "LargeSignIn") || (styles === "LargeSignUp") ?
      `
    background: #e50914;
    color: white;
    border: 0;
    font-size: 16px;
    border-radius: 4px;
    padding: 16px;
    cursor: ${to === "#" ? "default" : "pointer"};
    font-weight: bold;
    margin: 24px 0 12px;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
    `
    : (styles === "bigPlayer") ?
    `
    background-color: #e50914;
    color: white;
    // border: 0;
    border-color: #ff0a10;
    padding-left: 0;
    width: 114px;
    height: 45px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { 
      transform: scale(1.15);
      // background-color: #ff0a16;
    }
    `: ""
    )
  }`;

StyledButton.propTypes = {
  to: PropTypes.string.isRequired
}

export default StyledButton;