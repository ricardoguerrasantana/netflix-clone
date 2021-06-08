import { useContext } from 'react';
import { ProfileContext } from '../contexts'

export function useProfile() {
  return useContext(ProfileContext);
}
