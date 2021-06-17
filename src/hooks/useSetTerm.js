import { useContext } from 'react';
import { SetTermContext } from '../contexts'

function useSetTerm() {
  return useContext(SetTermContext);
}

export default useSetTerm;