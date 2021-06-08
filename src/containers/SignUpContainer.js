import React , { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { LargeSignUpButton } from '../containers';
import * as ROUTES from '../constants/routes';
import { singUpPage , global } from '../constants/ui-text';
import { useFirebase } from '../hooks';
 
export default function SignInBodyContainer() {
  const history = useHistory();
  const firebase = useFirebase();

  const [firstName , setFirstName] = useState('');
  const [emailAddress , setEmailAddress] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress , password)
      .then((result) => 
        result.user
          .updateProfile({
            displayName: firstName , 
            photoURL: global.profilePhotoURLs[Math.floor(Math.random() * 5)] , 
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          }))
      .catch((err) => {
        setError(err.message);
      });
  };
  
  let isInvalid = password === '' || emailAddress === '' || firstName === '';

  return (
    <Form>
      <Form.Title>{singUpPage.main}</Form.Title>
      {error && <Form.Error>error</Form.Error>}
      
      <Form.Base onSubmit={handleSignIn} method="POST">
        <Form.Input  
          placeholder={global.firstNamePlaceholder}
          value={firstName} 
          onChange={({ target }) => setFirstName(target.value)}
        />
        <Form.Input  
          placeholder={global.emailPlaceholder}
          value={emailAddress} 
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input 
          type="password"  
          placeholder={global.passwordPlaceholder} 
          autoComplete="off" 
          value={password} 
          onChange={({ target }) => setPassword(target.value)}
        />

        <Form.Text>
        {singUpPage.text[1]} <Form.Link to={ROUTES.SIGN_IN}>{singUpPage.text[2]}</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          {singUpPage.textSmall}
        </Form.TextSmall>
        <LargeSignUpButton 
          type="submit" 
          disabled={isInvalid} 
        />
        {/* <Form.Submit disabled={isInvalid} type="submit">
          {singUpPage.main}
        </Form.Submit> */}
      </Form.Base>
    </Form>
  );
}