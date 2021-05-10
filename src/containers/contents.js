import React, { useContext, useState } from 'react';
import { 
  Bar,
  Contents , 
  Feature , 
  Header , 
} from '../components';
import { browsePage } from '../constants/ui-text';
import { FirebaseContext } from '../context/firebase';

export default function ContentsContainer({ children  , profile , ...rest }) {
  const { firebase } = useContext(FirebaseContext);

  return (
    <Header 
      src={browsePage.browseBg}
      dontShowOnSmallViewPort
    >
      <Bar>
        <Bar.Group>
          <Bar.Logo />
          <Bar.Link>{browsePage.seriesLink}</Bar.Link>
          <Bar.Link>{browsePage.filmsLink}</Bar.Link>
        </Bar.Group>
        <Bar.Group>
          <Bar.Search />
          <Bar.Profile>
            <Bar.Picture src={profile.photoURL}/>
            <Bar.Dropdown>
              <Bar.Capsule>
                <Bar.Picture src={profile.photoURL}/>
                <Bar.Link>{profile.displayName}</Bar.Link>
              </Bar.Capsule>
              <Bar.Link
                onClick={() => firebase.auth().signOut()}
              >
              {browsePage.signOutLink}
              </Bar.Link>
            </Bar.Dropdown>
          </Bar.Profile>
        </Bar.Group>
      </Bar>
      <Feature.Inner>
        <Feature.CallOut>{browsePage.callOut}</Feature.CallOut>
        <Feature.Text>{browsePage.description}</Feature.Text>
        <Feature.Button>Play</Feature.Button>
      </Feature.Inner>
    </Header>
  );
} 
