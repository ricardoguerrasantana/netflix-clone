import { useContext } from 'react';
import { SetAuthUserContext } from '../contexts'

function useSetAuthUser() {
  return useContext(SetAuthUserContext);
}

export default useSetAuthUser;