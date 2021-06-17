import { useContext } from 'react';
import { AuthUserContext } from '../contexts'

function useAuthUser() {
  return useContext(AuthUserContext);
}

export default useAuthUser;