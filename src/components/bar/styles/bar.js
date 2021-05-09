import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Button = styled.a`
  display: block;
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 18px;
  cursor: pointer;
  text-decoration: none;
  border-image: none;
  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;