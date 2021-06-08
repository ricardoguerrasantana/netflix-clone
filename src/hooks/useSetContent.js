import { useContext } from 'react';
import { SetContentContext } from '../contexts'

export function useSetContent() {
  return useContext(SetContentContext);
}