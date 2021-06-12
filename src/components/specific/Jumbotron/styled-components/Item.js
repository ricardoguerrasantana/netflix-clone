import styled from 'styled-components/macro';

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Item;