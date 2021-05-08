import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 28px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  padding: 2px;
  margin: 0;

  &:hover {
    border: 3px solid white;

  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: 500;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
  }
`;