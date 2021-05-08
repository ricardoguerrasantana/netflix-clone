import Debug from 'debug';
import React, { useContext, useState } from "react";
import { ProfilesContainer } from "../containers";
import { FirebaseContext } from "../context/firebase";

const log = Debug('App:BrowseContainer');
log.log = console.log.bind(console);

export default function BrowseContainer({ slides }) {
  const [profile , setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  // const user = {};
  const user = firebase.auth().currentUser || {}; // Read operation
  log('user' , user);

  return <ProfilesContainer user={user} setProfile={setProfile} />;
}