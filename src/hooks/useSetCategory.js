import { useContext } from 'react';
import { SetCategoryContext } from '../contexts'

export function useSetCategory() {
  return useContext(SetCategoryContext);
}