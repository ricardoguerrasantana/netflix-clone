import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ReactRouterLink = styled(Link)`
  cursor: ${({ to }) => (to === "#" ? "default" : "pointer")};
`;

ReactRouterLink.propTypes = {
  to: PropTypes.string.isRequired
}