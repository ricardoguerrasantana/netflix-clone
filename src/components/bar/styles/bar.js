import styled from 'styled-components/macro';

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

export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin: 0 30px 0 0;
  font-weight: ${({ selected }) => (selected === true ? 'bold' : 'normal')};
  cursor: pointer;
  
  &:hover {
    font-weight: bold;
  }
  
  &:last-of-type {
    margin: 0;
  } 
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Capsule = styled(Group)`
  ${Link} {
    margin-left: 10px;
    cursor: default;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 32px;
  right: 0px;
  background-color: black;
  width: 100px;
  padding: 10px;

  ${Capsule} {
    margin-bottom: 10px;
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

export const Picture = styled.img`
  width: 32px;
  height: 100%;
  cursor: pointer;
  border: 0;
`;

export const Profile = styled.div`
  display: flex;
  position: relative;
  margin: 0 0 0 20px;
  
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  aling-items: center;
  
  svg {
    color: white;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
  
export const Icon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Input = styled.input`
  padding-left: 4px;
  background-color: #44444459;
  // border: 1px solid white;
  height: 30px;
  font-size: 14px;
  transition: width 0.5s;
  width: ${({ active }) => (active === true ? '200px' : '0px')};
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  border: ${({ active }) => (active === true ? '1px solid white' : '0')};
`;