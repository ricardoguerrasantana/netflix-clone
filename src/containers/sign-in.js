import React , { useState } from 'react';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { singInPage , global } from '../constants/ui-text';
 
export default function SignInBodyContainer() {
  const [emailAddress , setEmailAddress] = useState();
  const [password , setPassword] = useState();
  const [error , setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    // Firebase work here
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
          OnChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input 
          type="password"  
          placeholder={global.passwordPlaceholder} 
          autoComplete="off" 
          value={password} 
          OnChange={({ target }) => setPassword(target.value)}
        />

        <Form.Text>
        {singInPage.text[1]} <Form.Link to={ROUTES.SIGN_UP}>{singInPage.text[2]}</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          {singInPage.textSmall}
        </Form.TextSmall>
        <Form.Submit disabled={isInvalid} type="submit">
          {singInPage.main}
        </Form.Submit>
      </Form.Base>
    </Form>
  );
}