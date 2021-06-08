import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding-left: 4px;
  background-color: #44444459;
  color: white;
  height: 30px;
  font-size: 14px;
  transition: width 0.5s;
  width: ${({ active }) => (active === true ? '200px' : '0px')};
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  border: ${({ active }) => (active === true ? '1px solid white' : '0')};
`;

Input.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Input;