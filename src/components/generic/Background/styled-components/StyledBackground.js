import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ backgroundSrc }) => backgroundSrc}) top center / cover no-repeat;

@media (max-width: 900px) {
  ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
}
`;

StyledBackground.propTypes = {
  backgroundSrc: PropTypes.string , 
  dontShowOnSmallViewPort: PropTypes.bool.isRequired , 
}

StyledBackground.defaultProps = {
  backgroundSrc: null ,
}

export default StyledBackground;