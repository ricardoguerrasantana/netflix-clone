import React from 'react';
import { Header } from '../components';
import { TopBar } from '../containers';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <TopBar />
      {children}
    </Header>
  );
}