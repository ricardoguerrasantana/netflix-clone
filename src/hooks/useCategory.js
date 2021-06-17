import { useContext } from 'react';
import { CategoryContext } from '../contexts'

function useCategory() {
  return useContext(CategoryContext);
}

export default useCategory;