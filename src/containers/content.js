import React, { useContext, useState } from 'react';
import { FooterContainer } from '../containers';
import { 
  Bar,
  SlideRow,
  Feature , 
  Header , 
} from '../components';
import { browsePage } from '../constants/ui-text';
import { FirebaseContext } from '../context/firebase';

export default function ContentContainer({ 
  category , 
  setCategory , 
  profile , 
  slideRows , 
  ...rest 
}) {
  const { firebase } = useContext(FirebaseContext);

  return (<>
    <Header 
      src={browsePage.browseBg}
      dontShowOnSmallViewPort
    >
      <Bar>
        <Bar.Group>
          <Bar.Logo />
          <Bar.Link 
            selected={ 
              (category === browsePage.seriesLink.toLowerCase()) ? 
              true : false }
            onClick={() => {
              setCategory(category => browsePage.seriesLink.toLowerCase())
            }}
          >
            {browsePage.seriesLink}
          </Bar.Link>
          <Bar.Link 
            selected={ 
              (category === browsePage.filmsLink.toLowerCase()) ? 
              true : false }
            onClick={() => {
              setCategory(category => browsePage.filmsLink.toLowerCase())
            }}
          >
            {browsePage.filmsLink}
          </Bar.Link>
        </Bar.Group>
        <Bar.Group>
          <Bar.Search {...rest} />
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
    <SlideRow.Section>
      {slideRows.map(slideRow => (
        <SlideRow 
          key={slideRow.title.toLowerCase().trim().replace(/ /g , '-')} 
          category={category}
          slideRow={slideRow}
        />
      ))}
    </SlideRow.Section>
    <FooterContainer />
  </>);
} 
