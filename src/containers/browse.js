import Debug from 'debug';
import Fuse from 'fuse.js';
import React, { useContext, useEffect, useState } from "react";
import { 
  ProfilesContainer , 
  LoadingContainer, 
  ContentContainer, 
} from "../containers";
import { FirebaseContext } from "../context/firebase";

const log = Debug('App:BrowseContainer');
log.log = console.log.bind(console);

export default function BrowseContainer({ slides }) {
  const [slideRows , setSlideRows] = useState([]);
  const [category , setCategory] = useState('series');
  const [profile , setProfile] = useState({});
  const [loading , setLoading] = useState(true);
  const [term , setTerm] = useState('');

  const { firebase } = useContext(FirebaseContext);
  // const user = {};
  const user = firebase.auth().currentUser || {}; // Read operation
  log('user' , user);

  useEffect(() => {
    setSlideRows(slideRows => slides[category]);
  } , [slides , category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows , {
      keys: [
        'items.description' , 
        'items.title' , 
        'items.genre' , 
      ]
    });
    const search = fuse.search(term).map(({ item }) => item);
    if (slideRows.length > 0 && term.length > 1 && search.length > 0) {
      setSlideRows(prevSlideRows => search);
    } else {
      setSlideRows(prevSlideRows => slides[category]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

return profile.displayName ? (
    loading ? 
    <LoadingContainer src={profile.photoURL} setLoading={setLoading} /> : 
    <ContentContainer 
      profile={profile} 
      category={category} 
      setCategory={setCategory} 
      slideRows={slideRows} 
      term={term} 
      setTerm={setTerm} 
    />
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}