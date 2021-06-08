import React , { memo, useState } from 'react';
import { SearchBar } from './SearchBar';
import { browsePage } from '../../../constants/ui-text';
import { useSetTerm, useTerm } from "../../../hooks";

import Debug from "debug";
const log = Debug('App:SearchBarContainer');
log.log = console.log.bind(console);

function SearchBarContainer() {
  log('Rendering...');
  
  const term = useTerm();
  const setTerm = useSetTerm();
  const [displayInput , setDisplayInput] = useState(false);


  function onClickIcon() {
    setDisplayInput(displayInput => !displayInput);
  }

  function onChangeInput({ target }) {
    setTerm(target.value);
  }

  return (
    <SearchBar 
      displayInput={displayInput}
      iconAlt={browsePage.searchIconAlt}
      iconURL={browsePage.searchIconURL} 
      inputPlaceholder={browsePage.searchPlaceholder}
      onChangeInput={onChangeInput}  
      onClickIcon={onClickIcon} 
      setTerm={setTerm} 
      term={term} 
    />
  );
}

export default memo(SearchBarContainer);