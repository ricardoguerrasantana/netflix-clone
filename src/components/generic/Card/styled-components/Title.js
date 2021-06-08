import styled from 'styled-components/macro';

const Title = styled.div`
font-size: 24px;
color: #e5e5e5;
font-weight: bold;
padding: 10px;
margin: 0;
position: absolute;
bottom: 0;

@media (max-width: 1500px) {
  font-size: 18px;
}

@media (max-width: 1100px) {
  font-size: 16px;
}

@media (max-width: 1000px) {
  font-size: 14px;
}

@media (max-width: 600px) {
  font-size: 10px;
}
`;


export default Title;