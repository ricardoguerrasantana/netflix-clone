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
    margin: 12px 0;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
    `
    : (styles === "extendedContentPlayer") ?
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
    `
    : (styles === "featuredContentPlayer") ? 
    `
    color: #000;
    background-color: #e6e6e6;
    border: 0;
    padding: 12px 20px;
    margin: 20px 0 0 10px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 5px;
    max-width: 130px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.5s ease;
    box-shadow: 0 1vw 1vw -0.4vw rgba(0, 0, 0, 0.55);

    &:hover {
      background-color: #ff1e1e;
      color: white;
    }
    `
    : (styles === "optForm") ? 
    `
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 28px;
    font-size: 26px;
    border: 0;
    cursor: pointer;
    // text-align: center;
    // justify-content: space-between;
    line-height: normal; // Aligns text with chevron image
    
    &:hover {
      background: #f40612;
    }
    
    @media (max-width: 1000px) {
      height: 50px;
      font-size: 16px;
      margin-top: 20px;
      font-weight: bold;
    }

    img {
      margin: 0 0 0 12px;
      filter: brightness(0) invert(1);
      width: 24px;

      @media (max-width: 1000px) {
        width: 16px;
      }
    }
    `
    : ""
    )
  }`;

StyledButton.propTypes = {
  styles: PropTypes.string.isRequired ,
  to: PropTypes.string.isRequired ,
}

export default StyledButton;