import { useContext } from 'react';
import { CategoryContext } from '../contexts'

export function useCategory() {
  return useContext(CategoryContext);
}