import Debug from 'debug';
import React, { useContext, useEffect, useState } from "react";
import { 
  ProfilesContainer , 
  LoadingContainer, 
  ContentsContainer, 
} from "../containers";
import { FirebaseContext } from "../context/firebase";

const log = Debug('App:BrowseContainer');
log.log = console.log.bind(console);

export default function BrowseContainer({ slides }) {
  const [profile , setProfile] = useState({});
  const [loading , setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  // const user = {};
  const user = firebase.auth().currentUser || {}; // Read operation
  log('user' , user);

  return profile.displayName ? (
    loading ? <LoadingContainer src={profile.photoURL} setLoading={setLoading} /> : <ContentsContainer profile={profile} />
  ) : (
    <ProfilesContainer user={user} setProfile={setProfile} />
  );
}