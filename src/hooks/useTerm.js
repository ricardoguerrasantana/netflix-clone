import { useContext } from 'react';
import { TermContext } from '../contexts'

function useTerm() {
  return useContext(TermContext);
}

export default useTerm;