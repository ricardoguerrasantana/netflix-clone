import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin: 0 30px 0 0;
  font-weight: ${({ selected }) => (selected === true ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: 900;
  }

  &:last-of-type {
    margin: 0;
  } 
`;

Link.propTypes = {
  selected: PropTypes.bool.isRequired
}

export default Link;