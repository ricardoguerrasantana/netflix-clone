import { useContext } from 'react';
import { ContentContext } from '../contexts'

function useContent() {
  return useContext(ContentContext);
}

export default useContent;