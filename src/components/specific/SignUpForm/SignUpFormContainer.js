import Debug from "debug";
const log = Debug('App:SignUpFormContainer');
log.log = console.log.bind(console);

import React, { memo, useState } from 'react';
import { useHistory } from "react-router";
import { global, signUpPage } from "../../../constants/ui-text";
import { Form, LargeSignUpButton } from '../../../components';
import {
  useFirebase
  , useSetProfileList
} from "../../../hooks";
import { Link } from './styled-components';
import * as ROUTES from '../../../constants/routes';

function SignUpFormContainer() {
  log('Rendering...');

  const history = useHistory();
  const firebase = useFirebase();
  const setProfileList = useSetProfileList();

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignUpClick(event) {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((userCredential) => {
        userCredential.user
          .updateProfile({
            displayName: firstName,
            photoURL: global.profilePhotoURLs[Math.floor(Math.random() * 5)], // Note: This a zero-based index number that targets 1 of 5 file source in the array.
          })
          .then(() => {
            log("profile has been updated.");
            log("userCredential.user", userCredential.user);
            log("sign up button is setting up profileList with updated profile.");
            log("userCredential.user.providerData", userCredential.user.providerData);
            setProfileList(userCredential.user.providerData);
            log("redirect to browse");
            history.push(ROUTES.BROWSE);
          })
      }).catch((err) => {
        setError(err.message);
      });
  }



  function handleEmailAddressInputChange({ target }) {
    setEmailAddress(target.value);
  }

  function handleFirstNameInputChange({ target }) {
    setFirstName(target.value);
  }

  function handlePasswordInputChange({ target }) {
    setPassword(target.value);
  }

  const inputs = [
    {
      key: "firstName",
      type: "text",
      autoComplete: "on",
      placeholder: global.firstNamePlaceholder,
      value: firstName,
      handleChange: handleFirstNameInputChange
    },
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
      {signUpPage.text}

      <Link to={ROUTES.SIGN_IN}>
        {signUpPage.signInLink}
      </Link>
    </span>
  );

  const singUpButtonDisabled = password === '' || emailAddress === '' || firstName === '';
  const button = (
    <LargeSignUpButton
      disabled={singUpButtonDisabled}
      type="submit"
    />
  );

  return (
    <Form
      button={button}
      error={error}
      handleSubmitClick={handleSignUpClick}
      inputs={inputs}
      placeholder={global.firstNamePlaceholder}
      subtext={signUpPage.subtext}
      text={text}
      title={signUpPage.main}
    />
  );
}

export default memo(SignUpFormContainer);