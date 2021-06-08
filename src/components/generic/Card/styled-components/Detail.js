import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Detail = styled.div`
${({ displayDetail }) => (displayDetail === true ? `
display: block;
z-index: 999;
position: absolute;
` : `
display: none;
`)}
bottom: 0;
background-color: #0000008f;
height: inherit;
width: inherit;
`;

Detail.propTypes = {
  displayDetail: PropTypes.bool.isRequired
}

export default Detail;