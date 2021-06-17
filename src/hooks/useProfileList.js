import { useContext } from 'react';
import { ProfileListContext } from '../contexts'

function useProfileList() {
  return useContext(ProfileListContext);
}

export default useProfileList;