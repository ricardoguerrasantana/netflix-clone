import { useContext } from 'react';
import { SetProfileContext } from '../contexts'

export function useSetProfile() {
  return useContext(SetProfileContext);
}
