import { useContext } from 'react';
import { SetTermContext } from '../contexts'

export function useSetTerm() {
  return useContext(SetTermContext);
}
