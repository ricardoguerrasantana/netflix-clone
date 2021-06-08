import styled from 'styled-components/macro';

const Option = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  padding: 10px 15px;

  &:hover {
    font-weight: ${({ clickable }) => (clickable ? "bold" : "normal")};
    background-color: #44444459;
  }
  
  * {
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  }

  img {
    margin-right: 5px;
  }
`;

export default Option;