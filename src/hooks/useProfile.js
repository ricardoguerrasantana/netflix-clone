import { useContext } from 'react';
import { ProfileContext } from '../contexts'

function useProfile() {
  return useContext(ProfileContext);
}

export default useProfile;