import styled from 'styled-components/macro';

const Item = styled.div`
display: flex;
margin-right: 5px;

&:last-of-type {
  margin-right: 0;
}
`;

export default Item;