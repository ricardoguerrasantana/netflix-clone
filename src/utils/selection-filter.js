import { browsePage } from '../constants/ui-text';

export default function selectionFilter(data) {
  const slides = {};
  
  Object.entries(browsePage.slides).forEach(([format , genre_list]) => {
    
    const content = genre_list.map(genre => {
    
      if (data[format]) {
        const items = data[format].filter((item) => {
          return item.genre === genre.title.toLowerCase().trim().replace(/ /g, '-');
        });
        
        return {
          title: genre.title , 
          items: items , 
        };
      }

      return [];
    
    });
    
    Object.assign(slides , { [format]: content });

  });

  return slides;
}