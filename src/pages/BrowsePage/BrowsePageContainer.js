/* eslint-disable react/jsx-max-depth */
import Debug from 'debug';
import React, { memo, useState } from "react";
import { BrowsePage } from './BrowsePage';
import { TermProvider, CategoryContentProvider, ProfileProvider } from '../../providers'


const log = Debug('App:BrowseContainer');
log.log = console.log.bind(console);

function BrowsePageContainer() {
  log('Rendering BrowseContainer...');
  const [profile, setProfile] = useState({});
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
            category={category}
            loading={loading}
            profile={profile}
            setCategory={setCategory}
            setLoading={setLoading}
          />
        </TermProvider>
      </CategoryContentProvider>
    </ProfileProvider>
  );
}

export default memo(BrowsePageContainer);