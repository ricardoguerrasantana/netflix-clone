import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0 , 0 , 0 , 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  max-width: 450px;
  
  @media (max-width: 400px) {
    padding: 10%;
  }
`;

export default Container;