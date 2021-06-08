import Debug from "debug";
const log = Debug("App:groupByGenre");
log.log = console.log.bind(console);

import { capitalizeFirstEach } from './index';

// Gets data ready for redering as slide rows
export function groupByGenre(data) {
  log('Processing groupByGenre...');
  log("data" , data);
  
  const groups = {};
  
  data.forEach(item => {
    
    if (item.genre) {
      const genre = capitalizeFirstEach(item.genre);
      
      if (!Object.keys(groups).includes(genre)) {
        Object.assign(groups , { [genre]: [] });
      }
      
      groups[genre].push(item);
    }
  });
  
  log("groups" , groups);
  return Object.entries(groups).map(([genre, items]) => {
    return {
      title: genre ,
      items: items  
    }
  });
}