import { useContext } from 'react';
import { SetContentContext } from '../contexts'

function useSetContent() {
  return useContext(SetContentContext);
}

export default useSetContent;