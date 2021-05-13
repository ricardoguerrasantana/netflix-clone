import Debug from 'debug';
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

  const { firebase } = useContext(FirebaseContext);
  // const user = {};
  const user = firebase.auth().currentUser || {}; // Read operation
  log('user' , user);

  useEffect(() => {
    setSlideRows(slideRows => slides[category]);
  } , [slides , category]);

  // return profile.displayName ? (
  //   loading ? 
  //   <LoadingContainer src={profile.photoURL} setLoading={setLoading} /> : 
    return <ContentContainer 
      profile={profile} 
      category={category} 
      setCategory={setCategory} 
      slideRows={slideRows} 
    />
  // ) : (
  //   <ProfilesContainer user={user} setProfile={setProfile} />
  // );
}