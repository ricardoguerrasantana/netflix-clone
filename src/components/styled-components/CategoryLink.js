import styled from 'styled-components/macro';

export const CategoryLink = styled.p`
  color: white;
  text-decoration: none;
  margin: 0 30px 0 0;
  font-weight: ${({ selected }) => (selected === true ? 'bold' : 'normal')};
  cursor: pointer;
  
  &:hover {
    font-weight: bold;
  }
  
  &:last-of-type {
    margin: 0;
  } 
`;