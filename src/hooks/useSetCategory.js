import { useContext } from 'react';
import { SetCategoryContext } from '../contexts'

function useSetCategory() {
  return useContext(SetCategoryContext);
}

export default useSetCategory;