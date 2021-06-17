import { useContext } from 'react';
import { FirebaseContext } from '../contexts'

function useFirebase() {
  return useContext(FirebaseContext);
}

export default useFirebase;