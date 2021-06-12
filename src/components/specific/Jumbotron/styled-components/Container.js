import styled from 'styled-components/macro';

const Container = styled.div`
display: flex;
padding: 50px 5%;
color: white;
overflow: hidden;

border-top: 8px solid #222;
&:last-of-type {
  border-bottom: 8px solid #222;
}
`;

export default Container;