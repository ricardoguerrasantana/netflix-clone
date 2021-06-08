import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const MenuContainer = styled.div`
  display: ${({ displayMenu }) => (displayMenu ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 32px;
  right: 0px;
  background-color: black;
  // width: 100px;
`;

MenuContainer.propTypes = {
  displayMenu: PropTypes.bool.isRequired,
}

export default MenuContainer;