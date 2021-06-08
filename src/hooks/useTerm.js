import { useContext } from 'react';
import { TermContext } from '../contexts'

export function useTerm() {
  return useContext(TermContext);
}
