import { useContext } from 'react';
import { AuthUserContext } from '../contexts'

export function useAuthUser() {
  return useContext(AuthUserContext);
}