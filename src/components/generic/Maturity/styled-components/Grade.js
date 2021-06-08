import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Grade = styled.p`
background-color: ${({ maturityNumber }) => (maturityNumber >= 15 ? 'red' : 'green')};
border-radius: 15px;
margin: 0 10px 0 0;
padding: 6px 5px 5px 5px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: white;
text-shadow: 2px 2px 4px rgba(0 , 0 , 0 , 0.4);
font-weight: bold;
`;

Grade.propTypes = {
  maturityNumber: PropTypes.number.isRequired
}

export default Grade;