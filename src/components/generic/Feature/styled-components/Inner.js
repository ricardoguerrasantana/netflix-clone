import styled from 'styled-components/macro';

const Inner = styled.div`
display: flex;
flex-direction: column;
margin: 0 56px;
width: 50%;
padding: 100px 0 250px 0;
max-width: 900px;

@media (max-width: 900px) {
  display: none;
}
`;

export default Inner;