/* eslint-disable react/jsx-max-depth */
import Debug from 'debug';
const log = Debug('App:BrowseContainer');
log.log = console.log.bind(console);

import React, { memo, useState } from "react";
import BrowsePage from './BrowsePage';
import { TermProvider, CategoryContentProvider, ProfileProvider } from '../../providers'

function BrowsePageContainer() {
  log('Rendering...');

  const [profile, setProfile] = useState(null);
  const [content, setContent] = useState([]);
  const [category, setCategory] = useState('series');
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  return (
    <ProfileProvider
      profile={profile}
      setProfile={setProfile}
    >
      <CategoryContentProvider
        category={category}
        content={content}
        setCategory={setCategory}
        setContent={setContent}
      >
        <TermProvider
          setTerm={setTerm}
          term={term}
        >
          <BrowsePage
            loading={loading}
            profile={profile}
            setLoading={setLoading}
          />
        </TermProvider>
      </CategoryContentProvider>
    </ProfileProvider>
  );
}

export default memo(BrowsePageContainer);