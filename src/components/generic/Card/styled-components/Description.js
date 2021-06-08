import styled from 'styled-components/macro';

const Description = styled.div`
font-size: 10px;
color: #fff;
margin: 10px 0 0 0;
user-select: none;
line-height: normal;

@media (min-width: 1600px) {
  font-size: 12px;
}

@media (min-width: 1900px) {
  font-size: 13px;
}

@media (max-width: 1400px) {
  font-size: 8.5px;
}

@media (max-width: 1200px) {
  display: none;
}
`;

export default Description;