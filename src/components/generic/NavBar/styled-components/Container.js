import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export default Container;