import styled from 'styled-components/macro';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(210px, 1fr));
  grid-gap: 15px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill , minmax(150px, 1fr));
    
  }
`;

export default Row;