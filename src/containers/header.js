import React from 'react';
import { Header } from '../components';
import { BarContainer } from '../containers';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <BarContainer />
      {children}
    </Header>
  );
}