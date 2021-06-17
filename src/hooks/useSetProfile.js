import { useContext } from 'react';
import { SetProfileContext } from '../contexts'

function useSetProfile() {
  return useContext(SetProfileContext);
}

export default useSetProfile;