import { useContext } from 'react';
import { SetProfileListContext } from '../contexts'

function useSetProfileList() {
  return useContext(SetProfileListContext);
}

export default useSetProfileList;