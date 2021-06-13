import styled from 'styled-components/macro';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 30px;
  margin: 5%;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default Container;