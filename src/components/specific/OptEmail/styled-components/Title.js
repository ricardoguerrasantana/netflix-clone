import styled from 'styled-components/macro';

const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export default Title;