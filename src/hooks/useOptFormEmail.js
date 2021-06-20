import { useContext } from 'react';
import { OptFormEmailContext } from '../contexts'

function useOptFormEmail() {
  return useContext(OptFormEmailContext);
}

export default useOptFormEmail;