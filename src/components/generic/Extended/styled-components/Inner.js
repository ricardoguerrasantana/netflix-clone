import styled from 'styled-components/macro';

const Inner = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 56px;

@media (max-width: 900px) {
  margin: 30px;
}
`;

export default Inner;