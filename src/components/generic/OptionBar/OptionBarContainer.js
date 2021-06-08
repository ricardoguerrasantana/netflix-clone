import React, { memo } from 'react';
import OptionBar from "./OptionBar";
import { browsePage } from '../../../constants/ui-text';
import { useCategory, useSetCategory } from "../../../hooks";

import Debug from "debug";
const log = Debug('App:OptionBarContainer');
log.log = console.log.bind(console);

function OptionBarContainer() {
  log('Rendering...');
  const category = useCategory();
  const setCategory = useSetCategory();

  function handleClickOnOption(item) {
    return setCategory(item);
  } 

  return (
    <OptionBar 
      handleClickOnOption={handleClickOnOption}
      optionList={browsePage.categoryLinks}
      selection={category}
    />
  );
          
}

export default memo(OptionBarContainer);