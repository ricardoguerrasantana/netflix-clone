import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Background = styled.div`
  background-image: url(${({src}) => (src)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  position: relative;
  margin-top: 15px;

  @media (max-width: 900px) {
    p{
      font-size: 14px;
    }
    h1{
      font-size: 20px;
    }
  }
`;

Background.propTypes = {
  src: PropTypes.string.isRequired
};

export default Background;