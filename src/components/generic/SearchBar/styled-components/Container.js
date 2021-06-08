import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  svg {
    color: white;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export default Container;