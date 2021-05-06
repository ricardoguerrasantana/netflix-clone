import React , { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { singInPage , global } from '../constants/ui-text';
import { FirebaseContext } from '../context/firebase';
 
export default function SignInBodyContainer() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress , setEmailAddress] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress , password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  
  const isInvalid = password === '' || emailAddress === '';

  return (
    <Form>
      <Form.Title>{singInPage.main}</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      
      <Form.Base onSubmit={handleSignIn} method="POST">
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
        <Form.Submit disabled={isInvalid} type="submit">
          {singInPage.main}
        </Form.Submit>
      </Form.Base>

      <Form.Text>
      {singInPage.text[1]} <Form.Link to={ROUTES.SIGN_UP}>{singInPage.text[2]}</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        {singInPage.textSmall}
      </Form.TextSmall>
    </Form>
  );
}