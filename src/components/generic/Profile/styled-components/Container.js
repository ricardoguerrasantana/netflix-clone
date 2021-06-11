import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  max-width: 200px;
  text-align: center;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  &:hover {
    
    img {
      border: 5px solid white;

      // this is to avoid a thin black line between 
      // border and image when hovering
      background-color: white; 
    }
    
    p {
        font-weight: bold;
        color: white;
      }

  }
`;

export default Container;