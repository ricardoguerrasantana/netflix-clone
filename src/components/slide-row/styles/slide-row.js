import styled from 'styled-components/macro';

export const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GenreTitle = styled.h1`
font-size: 24px;
color: #e5e5e5;
font-weight: bold;
margin: 0 56px 22px 56px;
`;

export const Container = styled(FlexColDiv)`
margin-bottom: 50px;
box-sizing: border-box;

> ${GenreTitle} {
  @media (max-width: 900px) {
    margin-left: 30px;
  }
}

// &:last-of-type {
//   margin-bottom: 150px;
// }

`;

export const Section = styled(FlexColDiv)`
> ${Container}:first-of-type {
    @media (min-width: 900px) {
      margin-top: -150px;
    }
  } 
`;

export const CardHover = styled(FlexColDiv)`
display: none;
position: absolute;
background-color: #0000008f;
height: 100%;
width: 100%;

`;

export const CardDetail = styled(FlexColDiv)`
display: none;
position: absolute;
bottom: 0;
padding: 10px;
`;

export const CardText = styled.p`
margin-top: 5px;
font-size: 10px;
color: #fff;
margin-bottom: 0;
user-select: none;
// display: none;
line-height: normal;
`;

export const CardTitle = styled(GenreTitle)`
margin-left: 0;
`;

export const Card = styled(FlexColDiv)`
margin-right: 5px;
position: relative;
cursor: pointer;
transition: transform 0.2s;

&:hover {
  transform: scale(1.3);
  z-index: 999;
}

&:first-of-type {
  margin-left: 56px;

  @media (max-width: 900px) {
    margin-left: 30px;
  }
}

&:last-of-type {
  margin-right: 56px;
  
  @media (max-width: 900px) {
    margin-right: 30px;
  }
}

@media (min-width: 1200px) {
  &:hover ${CardHover} , &:hover ${CardDetail} {
    display: block;
    z-index: 999;
  }
}
`;

export const CloseIcon = styled.img`
  filter: brightness(0) invert(1);
  cursor: pointer;
  // color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: 0;
  width: 24px;
`;

export const FocusText = styled.p`
font-size: 18px;
color: white;
font-weight: normal;
`;

export const FocusDetail = styled.div`

`;

export const FocusInfo = styled(FlexColDiv)`
max-width: 500px;
margin: 56px;
line-height: normal;

@media (max-width: 900px) {
  margin: 30px;
  // max-width: none;
}
`;

export const FocusMaturity = styled(FlexRowDiv)`
// display: flex-block;
margin: 30px 10px;
align-items: center;
// justify-content: space-between;
`;

export const FocusTitle = styled.h1`

`;

export const Focus = styled(FlexRowDiv)`
  background-image: url(${({src}) => (src)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  position: relative;
  height: 360px;

  @media (max-width: 900px) {
    height: auto;
    // background-size: auto;

    ${FocusTitle} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FocusText} {
      font-size: 14px;
    }
  }
`;

export const Image = styled.img`
border: 0;
max-width: 305px;
width: 100%;
 height: auto;
 cursor: pointer;
 padding: 0;
 margin: 0;
`;

export const Inner = styled(FlexRowDiv)``;

export const Item = styled.div`

`;

export const MaturityGrade = styled(FlexColDiv)`
background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
border-radius: 15px;
// border: 0;
margin: 0;
padding: 6px 5px 5px 5px;
width: 30px;
// line-height: 1;
// height: 30px;
text-align: center;
// align-items: center;
font-size: 12px;
margin-right: 10px;
color: white;
text-shadow: 2px 2px 4px rgba(0 , 0 , 0 , 0.4);
font-weight: bold;
`;

export const MaturityText = styled(FocusText)`
  font-weight: bold;
`;

export const SubTitle = styled.h2`

`;