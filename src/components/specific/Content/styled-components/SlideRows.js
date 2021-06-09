import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const SlideRows = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 900px) {
  ${({ term }) => (term === "" ? `
  position: relative;
  top: -140px;
  `
  : "")}
}
`;

SlideRows.propTypes = {
  term: PropTypes.string.isRequired
}

export default SlideRows;