import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Spinner = styled.div`
z-index: 999;

:after {
  width: 150px;
  height: 150px;
  background-image: url(${({spinnerSrc}) => spinnerSrc});
  background-size: contain;
  background-repeat: no-repeat;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px 0 0 -75px;
  padding: 0;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

Spinner.propTypes = {
  spinnerSrc: PropTypes.string.isRequired
}

export default Spinner;