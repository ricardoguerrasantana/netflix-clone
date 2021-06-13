import Debug from "debug";
const log = Debug('App:SignInFormContainer');
log.log = console.log.bind(console);

import React, { memo, useState } from 'react';
import { useHistory } from "react-router";
import { global, signInPage } from "../../../constants/ui-text";
import { Form, LargeSignInButton } from "../..";
import { useFirebase } from "../../../hooks";
import { Link } from './styled-components';
import * as ROUTES from '../../../constants/routes';

function SignInFormContainer() {
  log('Rendering...');

  const history = useHistory();
  const firebase = useFirebase();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignInClick(event) {
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
  }



  function handleEmailAddressInputChange({ target }) {
    setEmailAddress(target.value);
  }

  function handlePasswordInputChange({ target }) {
    setPassword(target.value);
  }

  const inputs = [
    {
      key: "emailAddress",
      type: "email",
      autoComplete: "on",
      placeholder: global.emailPlaceholder,
      value: emailAddress,
      handleChange: handleEmailAddressInputChange
    },
    {
      key: "password",
      type: "password",
      autoComplete: "off",
      placeholder: global.passwordPlaceholder,
      value: password,
      handleChange: handlePasswordInputChange
    },
  ]

  const text = (
    <span>
      {signInPage.text}

      <Link to={ROUTES.SIGN_UP}>
        {signInPage.signUpLink}
      </Link>
    </span>
  );

  const singInButtonDisabled = password === '' || emailAddress === '';
  const button = (
    <LargeSignInButton
      disabled={singInButtonDisabled}
      type="submit"
    />
  );

  return (
    <Form
      button={button}
      error={error}
      handleSubmitClick={handleSignInClick}
      inputs={inputs}
      placeholder={global.firstNamePlaceholder}
      subtext={signInPage.subtext}
      text={text}
      title={signInPage.main}
    />
  );
}

export default memo(SignInFormContainer);