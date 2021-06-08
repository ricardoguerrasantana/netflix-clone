import { useContext } from 'react';
import { FirebaseContext } from '../contexts'

export function useFirebase() {
  return useContext(FirebaseContext);
}
