import { useContext } from 'react';
import { SetOptFormEmailContext } from '../contexts'

function useSetOptFormEmail() {
  return useContext(SetOptFormEmailContext);
}

export default useSetOptFormEmail;