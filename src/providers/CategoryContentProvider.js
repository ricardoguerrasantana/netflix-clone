/* eslint-disable react/jsx-max-depth */
import Debug from 'debug';
const log = Debug('App:CategoryContentProvider');
log.log = console.log.bind(console);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CategoryContext, ContentContext, SetCategoryContext, SetContentContext } from '../contexts';
import { useFirebase } from '../hooks';

function CategoryContentProvider({ children, content, setContent, category, setCategory }) {
  log('Rendering...');

  const firebase = useFirebase();
  // Requests content from database
  useEffect(() => {
    firebase
      .firestore()
      .collection(category)
      .get()
      .then((snapshot) => {

        setContent(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
        );
      })
      .catch(err => log(err.message));
  }, [category]);

  return (
    <ContentContext.Provider value={content} >
      <SetContentContext.Provider value={setContent}>
        <CategoryContext.Provider value={category}>
          <SetCategoryContext.Provider value={setCategory}>
            {children}
          </SetCategoryContext.Provider>
        </CategoryContext.Provider>
      </SetContentContext.Provider>
    </ContentContext.Provider>
  );
}

CategoryContentProvider.propTypes = {
  category: PropTypes.string,
  children: PropTypes.element.isRequired,
  content: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  setCategory: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
};

CategoryContentProvider.defaultProps = {
  category: 'series',
  content: [],
}

export default CategoryContentProvider;