import styled from 'styled-components/macro';

const Inner = styled.div`
  display: flex;
  padding: 70px 45px 110px;
  flex-direction: column;
  max-width: 815px;
  width: 100%; // important always difined a 100% width with max-width otherwise words get tight up.
  margin: auto;
`;

export default Inner;