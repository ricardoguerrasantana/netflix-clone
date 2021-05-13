import styled from 'styled-components/macro';

const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`

`;

export const Button = styled.button`
background-color: #e50914;
color: white;
// border: 0;
border-color: #ff0a10;
padding-left: 0;
width: 114px;
height: 45px;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
font-size: 18px;
font-weight: bold;
margin: 0;
cursor: pointer;
transition: transform 0.2s;

&:hover { 
  transform: scale(1.15);
  // background-color: #ff0a16;
}
`;

export const Close = styled.img`
filter: brightness(0) invert(1);
position: absolute;
top: 15px;
right: 15px;
width: 28px;
height: auto;
opacity: 0.5;
background-color: transparent;
// border: 0;
cursor: pointer;

&:hover {
  opacity: 1;
}

// &:before , 
// &:after {
//   position: absolute;
//   left: 10px;
//   top: 0;
//   content: ' ';
//   height: 22px;
//   width: 22px;
//   background-color: #333;
// }

// &:before {
//   transform: rotate(45deg);
// }

// &:after {
//   transform: rotate(-45deg);
// }
`;

export const Inner = styled(FlexRowDiv)`
position: relative;
width: 100%;
max-width: 900px;
margin: auto;
z-index: 100;

video {
  height: 100%;
  width: 100%;
}
`;

export const InnerFrame = styled(FlexColDiv)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding: 0 20px;
box-sizing: border-box;
`;

export const Overlay = styled(FlexColDiv)`
position: fixed;
top: 0;
left: 0;
background-color: rgba(0 , 0 , 0 , 0.5);
width: 100%;
height: 100%;
z-index: 0;
// justify-content: center;
// margin: 0 20px;
// box-sizing: border-box;
`;