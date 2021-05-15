import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 165px 45px;
margin: 0 56px;
`;  

export const Button = styled.button`
  color: #000;
  background-color: #e6e6e6;
  border: 0;
  padding: 10px 20px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  max-width: 130px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: 0 1vw 1vw -0.4vw rgba(0, 0, 0, 0.55);

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }

`;

export const CallOut = styled.p`
  color: white;
  font-size: 50px;
  line-height: normal;
  margin: 0 0 20px 0;
  font-weight: bold; 
  text-shadow: 2px 2px 4px rgba(0 , 0 , 0 , 0.45);
`;

export const Frame = styled.div`
  border-bottom: 8px solid #222;
`;  

export const Inner = styled(Container)`
  width: 50%;
  padding: 100px 0 250px 0;
  display: ${({ term }) => (term === '' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: normal;
  max-width: 1500px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0 , 0 , 0 , 0.45);
`;

