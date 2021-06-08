import styled from 'styled-components/macro';

const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 305px;
max-height: 172px;
width: 100%;
height: 100%;
cursor: pointer;
transition: transform 0.2s;

&:hover {
  transform: scale(1.3);
  z-index: 999;
}
`;


export default Container;