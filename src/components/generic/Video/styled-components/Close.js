import styled from 'styled-components/macro';

const Close = styled.img`
filter: brightness(0) invert(1);
position: absolute;
top: 15px;
right: 15px;
width: 28px;
height: auto;
opacity: 0.6;
cursor: pointer;

&:hover {
  opacity: 1;
}
`;

export default Close;