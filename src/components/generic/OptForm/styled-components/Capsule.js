import styled from 'styled-components/macro';

const Capsule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Capsule;